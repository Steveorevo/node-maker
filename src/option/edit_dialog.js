let radio_group = '<input type="hidden" id="node-input-' + msg.radio_group + '">' + "\n";
let pre = '';
if (msg.edit_dialog.join("\n").indexOf(radio_group) == -1) {
    pre = radio_group;
}
msg.edit_dialog.push(pre + msg.payload);
if (msg.defaults.indexOf(msg.radio_group + ': {value:"') == -1) {
    if (msg.field_default) {
        msg.defaults.push(msg.radio_group + ': {value:"' + msg.field_name + '"}');
    }
}
return msg;