if (msg._oneditprepare.indexOf(msg.payload) == -1) {
    msg._oneditprepare.push(msg.payload);
}
return msg;