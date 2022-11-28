msg.edit_dialog.push(msg.payload);
msg.defaults.push(msg.field_name + ': {value:"' + msg.field_default + '", type: "' + msg.confignode_type + '"}');
return msg;