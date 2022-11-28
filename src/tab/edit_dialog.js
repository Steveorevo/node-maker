let tab = JSON.stringify({
    type: 'tab_definition',
    label: env.get('tab_label'),
    icon: env.get('tab_icon'),
    name: env.get('tab_name')
});
msg.edit_dialog.push(tab);
return msg;