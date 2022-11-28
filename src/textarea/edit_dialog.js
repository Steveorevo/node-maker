msg.edit_dialog.push(msg.payload);
let theDefault = msg.field_default;
let required = '';
if (msg.field_required) {
    required = ', required:true';
}
msg.defaults.push(msg.field_name + ': {value:"' + theDefault + '"' + required + '}');
return msg;