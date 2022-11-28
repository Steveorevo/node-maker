msg.field_name = env.get('field_name');
msg.field_default = env.get('field_default');
msg.field_values = env.get('field_values');
let fv = msg.field_values.split(',');
let bg = '';
fv.forEach(function (v) {
    v = v.split(':');
    bg += '<button type="button" class="red-ui-button toggle ' + msg.field_name + '" value="' + v[1] + '">' + v[0] + '</button>';
});
msg.button_group = bg;
msg.field_columns = env.get('field_columns');
return msg;