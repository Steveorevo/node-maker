msg.field_name = env.get('field_name');
msg.field_label = env.get('field_label');
let icon = env.get('field_icon');
if (icon != '') {
    msg.field_icon = '<i class="fa fa-' + icon + '"></i> ';
} else {
    msg.field_icon = '';
}
msg.field_label_elm = msg.field_icon + msg.field_label;
msg.button_size = env.get('button_size');
return msg;