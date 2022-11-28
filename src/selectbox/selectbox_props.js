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
msg.selectbox_multiple = env.get('selectbox_multiple');
if (msg.selectbox_multiple) {
    msg.selectbox_multiple = 'multiple: "true",' + "\n";
}else{
    msg.selectbox_multiple = '';
}
msg.field_values = env.get('field_values');
let fv = msg.field_values.split(',');
let o = '';
fv.forEach(function(v, i) {
    v = v.split(':');
    o += '{ "value":"' + v[1] + '", "label": "' + v[0].trim().replace('"', '\"') + '"}';
    if (i < fv.length-1) {
        o += ",\n";
    }
});
o = o.replace(/^/gm, " ".repeat(28));
msg.field_values = o;
msg.field_columns = env.get('field_columns');
return msg;