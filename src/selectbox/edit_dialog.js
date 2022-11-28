msg.edit_dialog.push(msg.payload);
msg.defaults.push(msg.field_name + ': {value:"' + msg.field_default.replaceAll('"', '\"') + '"}');
return msg;