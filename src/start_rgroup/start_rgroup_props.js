msg.rgroup_name = env.get('rgroup_name');
msg.rgroup_label = env.get('rgroup_label');
let icon = env.get('rgroup_icon');
if (icon != '') {
    msg.rgroup_icon = '<i class="fa fa-' + icon + '"></i> ';
} else {
    msg.rgroup_icon = '';
}
if (msg.rgroup_label == '') {
    msg.rgroup_label_elm = '';
} else {
    msg.rgroup_label_elm = '<label for="node-input-' + msg.rgroup_name + '">';
    msg.rgroup_label_elm += msg.rgroup_icon + msg.rgroup_label + '</label>';
}
//msg.field_columns = env.get('field_columns');
msg.rgroup_height = env.get('rgroup_height');
msg.rgroup_sortable = env.get('rgroup_sortable');
msg.rgroup_details = [];
return msg;