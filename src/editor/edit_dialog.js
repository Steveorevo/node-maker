msg.defaults.push(msg.field_name + ': {value:"' +  msg.field_default.replace('"', '\"') + '"}');
msg.defaults.push(msg.field_name + '_format: {value:"' + msg.editor_format_default + '"}');
msg.edit_dialog.push(msg.payload);
return msg;