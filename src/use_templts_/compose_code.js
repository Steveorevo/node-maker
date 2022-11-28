msg._oneditprepare.push(msg.payload);

String.prototype.delRightMost = function (sFind) {
    for (var i = this.length; i >= 0; i = i - 1) {
        var f = this.indexOf(sFind, i);
        if (f != -1) {
            return this.substring(0, f);
            break;
        }
    }
    return this;
};
String.prototype.getRightMost = function (sFind) {
    for (var i = this.length; i >= 0; i = i - 1) {
        var f = this.indexOf(sFind, i);
        if (f != -1) {
            return this.substring(f + sFind.length, f + sFind.length + this.length);
        }
    }
    return this;
};
String.prototype.delLeftMost = function (sFind) {
    for (var i = 0; i < this.length; i = i + 1) {
        var f = this.indexOf(sFind, i);
        if (f != -1) {
            return this.substring(f + sFind.length, f + sFind.length + this.length);
            break;
        }
    }
    return this;
};
String.prototype.getLeftMost = function (sFind) {
    for (var i = 0; i < this.length; i = i + 1) {
        var f = this.indexOf(sFind, i);
        if (f != -1) {
            return this.substring(0, f);
            break;
        }
    }
    return this;
};
var indent = " ".repeat(4);
var tabIndent = "";
var edit_dialog = " ".repeat(8) + '<div class="form-row">' + "\n";
var cTotal = 0;
var nItems = 0;
var initTab = false;
var firstTabName = '';
var bInRGroup = false;    
msg.edit_dialog.forEach(function(item, index) {
    if (item.indexOf('"type":"tab_definition"') == -1 && item.indexOf('form-row rgroup') == -1) {
        item = item.replace(/^/gm, tabIndent);
        item = item.replace(/^/gm, tabIndent);
        if (bInRGroup) {
            item = item.replace(/^/gm, " ".repeat(4));
        }
    }
    if (item.indexOf('<div class="form-row rgroup"') > -1) {
        edit_dialog = edit_dialog.delRightMost('<div class="form-row">').trimEnd() + "\n";
        item += " ".repeat(4) + '<div class="form-row">' + "\n";
        item = item.replace(/^/gm, " ".repeat(8) + tabIndent).trimEnd() + "\n";
        bInRGroup = true;
        edit_dialog += item;
        return;
    }
    if (item.indexOf('<!--form-row rgroup-->') > -1) {
        edit_dialog = edit_dialog.delRightMost('<div class="form-row">').trimEnd() + "\n";
        edit_dialog += " ".repeat(8) + tabIndent + "</div><!--form-row rgroup-...-template-->\n";
        if (index < msg.edit_dialog.length - 1) {
            edit_dialog += indent + indent + tabIndent + '<div class="form-row">' + "\n";
        }
        bInRGroup = false;
        return;
    }
    if (item.indexOf('"type":"tab_definition"') > -1) {
        let tab = JSON.parse(item);
        if (initTab == false) {
            
            // Inject the tab row
            let r = edit_dialog.getRightMost('<div class="form-row">');
            edit_dialog = edit_dialog.delRightMost('<div class="form-row">');
            edit_dialog += '<div class="form-row func-tabs-row">' + r;
            edit_dialog += indent + indent + indent + '<ul style="min-width: 600px; margin-bottom: 20px;" id="func-tabs"></ul>' + "\n";
            edit_dialog += indent + indent + "</div><!--func-tabs-row-->\n";
            edit_dialog += indent + indent + '<div id="func-tabs-content" style="min-height: calc(100% - 95px);">' + "\n";

            // Start first tab
            edit_dialog += indent + indent + indent + '<div id="func-tab-' + tab.name + '" style="display:none">' + "\n";
            edit_dialog += indent + indent + indent + indent + '<div class="form-row">' + "\n";
            tabIndent = " ".repeat(8);

            // Init tab system
            let code = "// Prepare tab system\n";
            code += "var tabs = RED.tabs.create({\n";
            code += "    id: 'func-tabs',\n";
            code += "    onchange: function(tab) {\n";
            code += "        $('#func-tabs-content').children().hide();\n";
            code += "        $('#' + tab.id).show();\n";
            code += "    }\n";
            code += "});\n\n";

            // Add first tab code
            code += "// Add first tab, " + tab.name + "\n";
            code += "tabs.addTab({\n";
            code += "    id: 'func-tab-" + tab.name + "',\n";
            code += "    iconClass: 'fa fa-" + tab.icon + "',\n";
            code += "    label: '" + tab.label + "'\n";
            code += "});\n\n";
            firstTabName = tab.name;
            code = code.replace(/^/gm, " ".repeat(12));
            msg._oneditprepare.push(code);
            initTab = true;
        }else{

            // Add subsequent tabs 
            let r = edit_dialog.getRightMost('    <div class="form-row"');
            edit_dialog = edit_dialog.delRightMost('    <div class="form-row"');
            edit_dialog += "</div><!--func-tab-tab#-->\n"; // close out last tab
            edit_dialog += " ".repeat(12) + '<div id="func-tab-' + tab.name + '" style="display:none">' + "\n";
            edit_dialog += " ".repeat(16) + '<div class="form-row"' + r;

            // Add additional tab code
            let code = "// Add tab, " + tab.name + "\n";            
            code += "tabs.addTab({\n";
            code += "    id: 'func-tab-" + tab.name + "',\n";
            code += "    iconClass: 'fa fa-" + tab.icon + "',\n";
            code += "    label: '" + tab.label + "'\n";
            code += "});\n\n";
            code = code.replace(/^/gm, " ".repeat(12));
            msg._oneditprepare.push(code);
        }        
    }else{
        if (tabIndent == '') {
            item = item.replace(/^/gm, indent + indent + indent);
        }else{
            item = item.replace(/^/gm, indent);
        }
        let c = item.delLeftMost('col-').getLeftMost('"').getLeftMost(' ');
        cTotal += Number(c);
        if (cTotal >= 83) {
            let m = 5 * nItems;
            if (m > 0) {
                item = item.replace(
                    'class="col ',
                    'style="margin-right:-' + m.toString() + 'px;" class="col '
                );
            }
            if (nItems == 3) {
                let r = edit_dialog.getRightMost('<div class="form-row">');
                edit_dialog = edit_dialog.delRightMost('<div class="form-row">');
                edit_dialog += '<div class="form-row" style="margin-right:10px;">' + r;
            }
            edit_dialog += item + "\n";
            if (index < msg.edit_dialog.length - 1) {
                if (bInRGroup) {
                    edit_dialog += " ".repeat(4);
                }
                edit_dialog += indent + indent + tabIndent + "</div><!--form-row-->\n";
                edit_dialog += indent + indent + tabIndent + '<div class="form-row">' + "\n";
                cTotal = 0;
                nItems = 0;
            }
        } else {
            edit_dialog += item + "\n";
            nItems++;
        }
    }
});
if (initTab) { 
    edit_dialog += " ".repeat(16) + "</div><!--form-row-->\n";
    edit_dialog += " ".repeat(12) + "</div><!--func-tab-tab#-->\n";
    edit_dialog += " ".repeat(8) + "</div><!--func-tabs-content-->";

    // Activate the first tab if present
    let code = " ".repeat(12) + 'tabs.activateTab("func-tab-' + firstTabName + '");' + "\n";
    msg._oneditprepare.push(code);
}else{
    edit_dialog += " ".repeat(8) + "</div><!--form-row-->";
}
msg.edit_dialog = edit_dialog;

let defaults = '';
msg.defaults.forEach(function(item, index) {
    defaults += "            " + item;
    if (index < msg.defaults.length -1) {
        defaults += ",\n";
    }else{
        defaults += "\n";
    }
});
msg.defaults = defaults;
msg.oneditprepare = "\n" + msg._oneditprepare.join("\n");
msg.oneditresize = "\n" + msg._oneditresize.join("\n");
msg.oneditsave = "\n" + msg._oneditsave.join("\n");
msg.oneditcancel = "\n" + msg._oneditcancel.join("\n");
msg.defaults = msg.defaults.slice(0, -1);
var othercode = "";
for (var key in msg._othercode) {
    var value = msg._othercode[key];
    othercode += value;
}
msg.othercode = "\n" + othercode;
msg.runtimecode = "\n" + msg.runtimecode.replace(/^/gm, "    ".repeat(4));
msg.useTemplates = true;
return msg;