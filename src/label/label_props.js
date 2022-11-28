msg.label_caption = env.get('label_caption');
let icon = env.get('label_icon');
if (icon != '') {
    msg.label_icon = '<i class="fa fa-' + icon + '"></i> ';
}else{
    msg.label_icon = '';
} 
msg.field_columns = env.get('field_columns');
return msg;