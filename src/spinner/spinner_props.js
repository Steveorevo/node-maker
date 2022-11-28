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
let fc = env.get('field_columns');
if (msg.field_label == '') {
    fc += ' no-label';
}
msg.field_min = env.get('field_min');
msg.field_max = env.get('field_max');
msg.field_columns = fc;
return msg;