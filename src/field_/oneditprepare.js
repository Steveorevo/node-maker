if (!msg.hasOwnProperty('rgroup_name')) {
    msg._oneditprepare.push(msg.payload);
}else{
    msg.rgroup_details.push({
        field_name: msg.field_name,
        field_default_type: msg.field_default_type,
        field_types: msg.field_types,
        field_default: msg.field_default
    });
}
return msg;