msg.edit_dialog.push("<!--form-row rgroup-->");
msg.rgroup_details = JSON.stringify(msg.rgroup_details, null, 4);
msg.rgroup_details = msg.rgroup_details.replace(/^/gm, "    ".repeat(5)).trim();
return msg;