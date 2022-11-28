node.on('input', function(msg) {
    msg.payload = "{{node_name}}";
    node.send(msg);
});