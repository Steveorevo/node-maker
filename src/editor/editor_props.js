msg.field_columns = env.get('field_columns');
msg.field_name = env.get('field_name');
msg.field_default = env.get('field_default');
msg.editor_expand = env.get('editor_expand');
msg.editor_formatting = env.get('editor_formatting');
msg.field_label = env.get('field_label');
msg.editor_format_default = env.get('editor_format_default');
if (msg.editor_format_default == '') {
    msg.editor_format_default = 'text';
}
let expandOffset = '';
if (msg.editor_formatting == '' && msg.field_label == '') {
    expandOffset = 'style="margin-top:-3px;"';
}
if (msg.editor_expand) {
    msg.editor_expand = '<button id="node-function-expand-' + msg.field_name + '" class="red-ui-button red-ui-button-small" ' + expandOffset + '><i class="fa fa-expand"></i></button>' + "\n";
}else{
    msg.editor_expand = '';
}
let selectList = '';
if (msg.editor_formatting != '') {
    let formattingList = msg.editor_formatting.replaceAll(' ', '').split(',');
    selectList = '<span data-i18n="node-red:template.label.format">Syntax Highlight</span>:' + "\n";
    selectList += '<select id="node-input-format_' + msg.field_name + '" style="width:110px; font-size: 10px !important;  height: 24px; padding:0;">' + "\n";
    formattingList.forEach(function(fl) {
        fl = fl.split(':');
        selectList += " ".repeat(4) + '<option value="' + fl[1] + '">' + fl[0] + "</option>\n";
    });
    selectList += "</select>\n";
}
selectList = selectList.replace(/^/gm, " ".repeat(8));
msg.editor_options = '';
if (selectList != '' || msg.editor_expand != '') {
    msg.editor_options += "\n" + " ".repeat(4) + '<div style="position:absolute;right:0;display:inline-block;text-align:right;font-size: 0.8em;z-index:100;">' + "\n";
    msg.editor_options += selectList;
    msg.editor_options += msg.editor_expand;
    msg.editor_options += " ".repeat(4) + "</div>";
}
let icon = env.get('field_icon');
if (icon != '') {
    msg.field_icon = '<i class="fa fa-' + icon + '"></i> ';
} else {
    msg.field_icon = '';
}
if (msg.field_label == '') {
    msg.field_label_elm = '';
} else {
    msg.field_label_elm = '<label for="node-input-' + msg.field_name + '">';
    msg.field_label_elm += msg.field_icon + msg.field_label + '</label>';
}
return msg;