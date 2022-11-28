msg.field_name = env.get('field_name');
msg.field_label = env.get('field_label');
let icon = env.get('field_icon');
if (icon != '') {
    msg.field_icon = '<i class="fa fa-' + icon + '"></i> ';
}else{
    msg.field_icon = '';
}
if (msg.field_label == '') {
    msg.field_label_elm = '';
}else{
    msg.field_label_elm = '<label for="node-input-' + msg.field_name + '">';
    msg.field_label_elm += msg.field_icon + msg.field_label + '</label>';
}
msg.field_placeholder = env.get('field_placeholder');
msg.field_required = env.get('field_required');
msg.field_default = env.get('field_default');

msg.field_type_string = env.get('field_type_string');
msg.field_type_number = env.get('field_type_number');
msg.field_type_boolean = env.get('field_type_boolean');
msg.field_type_msg = env.get('field_type_msg');
msg.field_type_flow = env.get('field_type_flow');
msg.field_type_global = env.get('field_type_global');
msg.field_type_json = env.get('field_type_json');
msg.field_type_additional = env.get('field_type_additional');
msg.field_default_type = env.get('field_default_type');
msg.field_types = [];
if (msg.field_type_string) {
    msg.field_types.push('str');
}
if (msg.field_type_number) {
    msg.field_types.push('num');
}
if (msg.field_type_boolean) {
    msg.field_types.push('bool');
}
if (msg.field_type_msg) {
    msg.field_types.push('msg');
}
if (msg.field_type_flow) {
    msg.field_types.push('flow');
}
if (msg.field_type_global) {
    msg.field_types.push('global');
}
if (msg.field_type_json) {
    msg.field_types.push('json');
}
if (msg.field_type_additional) {
    msg.field_additional_types = env.get('field_additional_types');
    msg.field_types = msg.field_types.concat(msg.field_additional_types);
}
msg.field_has_hidden_type = '';
if (msg.field_types.length > 0) {
    if (msg.field_default_type == '') {
        msg.field_default_type = msg.field_types[0];
    }
    msg.field_has_hidden_type = '<input type="hidden" id="node-input-' + env.get('field_name') + 'Type"';
    msg.field_has_hidden_type += 'value="' + msg.field_default_type + '">';
    msg.field_types_s = JSON.stringify(msg.field_types);
}
let fc = env.get('field_columns');
if (msg.field_label == '') {
    fc += ' no-label';
}
msg.field_columns = fc;
return msg;