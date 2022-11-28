msg.field_name = env.get('field_name');
msg.field_label = env.get('field_label');
let icon = env.get('field_icon');
if (icon != '') {
    msg.field_icon = '<i class="fa fa-' + icon + '"></i> ';
} else {
    msg.field_icon = '';
}
if (msg.field_label == '') {
    msg.field_label_elm = '';
} else {
    msg.field_label_elm = '<label for="node-input-' + msg.field_name + '">';
    msg.field_label_elm += msg.field_icon + msg.field_label + '</label>';
}
msg.field_default = env.get('field_default');
msg.field_placeholder = env.get('field_placeholder');
msg.field_columns = env.get('field_columns');
msg.confignode_type = env.get('confignode_type');
return msg;