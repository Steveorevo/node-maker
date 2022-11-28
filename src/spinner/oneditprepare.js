if (!msg.hasOwnProperty('rgroup_name')) {
    msg._oneditprepare.push(msg.payload);
} else {
    msg.rgroup_details.push({
        field_name: msg.field_name,
        field_min: msg.field_min,
        field_max: msg.field_max,
        field_default: msg.field_default,
        field_types: ''
    });
}
return msg;