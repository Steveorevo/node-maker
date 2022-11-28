if (msg._oneditsave.indexOf(msg.payload) == -1) {
    msg._oneditsave.push(msg.payload);
}
return msg;