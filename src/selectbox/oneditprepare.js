if (!msg.hasOwnProperty('rgroup_name')) {
    msg._oneditprepare.push(msg.payload);
} else {
    msg.rgroup_details.push({
        field_name: msg.field_name,
        field_types: [{
                value: msg.field_name,
                multiple: (msg.selectbox_multiple != ''),
                options: JSON.parse('[' + msg.field_values + ']')
        }],
        field_default_type: null,
        field_default: msg.field_default
    });
}
return msg;