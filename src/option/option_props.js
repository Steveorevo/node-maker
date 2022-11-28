msg.field_name = env.get('field_name');
msg.field_label = env.get('field_label');
msg.radio_group = env.get('radio_group');
if (env.get('field_default') == 'checked') {
    msg.checked = 'checked';
    msg.field_default = true;
} else {
    msg.checked = '';
    msg.field_default = false;
}
msg.field_columns = env.get('field_columns');
return msg;
