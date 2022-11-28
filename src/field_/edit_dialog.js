msg.edit_dialog.push(msg.payload);
let theDefault = msg.field_default;
if (msg.field_default_type != 'bool' && msg.field_default_type != 'num') {
    theDefault = '"' + theDefault + '"';
}
let required = '';
if (msg.field_required) {
    required = ', required:true';
}
msg.defaults.push(msg.field_name + ': {value:' + theDefault + required + '}');
if (msg.field_types.length > 0) {
    msg.defaults.push(msg.field_name + 'Type: {value:"' + msg.field_default_type + '"}');
}
return msg;