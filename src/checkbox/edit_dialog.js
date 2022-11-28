msg.edit_dialog.push(msg.payload);
if (msg.field_default == 'checked') {
    msg.field_default = true;
}else{
    msg.field_default = false;
}
msg.defaults.push(msg.field_name + ': {value:' + msg.field_default.toString() + '}');
if (msg.hasOwnProperty('rgroup_name')) {
    msg.rgroup_details.push({
        field_name: msg.field_name,
        field_default_type: '',
        field_types: ''
    });
}
return msg;