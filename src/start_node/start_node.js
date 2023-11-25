msg.node_name = env.get('node_name');
/* crash and burn if name not defined */
if (!msg.node_name || msg.node_name=="") {
    node.error(("node name not given"), msg);
    return
}
msg.node_version = env.get('node_version');
msg.node_description = env.get('node_description');
msg.node_folder = env.get('HOME') + '/.node-red/node_modules/node-red-' + msg.node_name + '/';
let k = env.get('keywords');
k = '"' + k.replaceAll(' ', '').replaceAll(',', '","') + '"';
msg.node_category = env.get('node_category');
msg.node_palettelabel = env.get('node_palettelabel');
msg.node_icon = env.get('node_icon');
msg.node_color = env.get('node_color');
msg.keywords = k;
msg.author_name = env.get('author_name');
msg.author_email = env.get('author_email');
msg.github_handle = env.get('github_handle');
msg.package_json = msg.node_folder + 'package.json';
msg.gitignore = msg.node_folder + '.gitignore';
msg.license = msg.node_folder + 'LICENSE';
msg.readme = msg.node_folder + 'README.md';
msg.nodename_js = msg.node_folder + msg.node_name + '/' + msg.node_name + '.js';
msg.nodename_html = msg.node_folder + msg.node_name + '/' + msg.node_name + '.html';
msg.edit_dialog = [];
msg._oneditprepare = [];
msg._oneditresize = [];
msg._oneditsave = [];
msg._oneditcancel = [];
msg._othercode = {};
msg.defaults = [];
msg.row_width = env.get('row_width');
msg.numinputs = env.get('numinputs');
msg.numoutputs = env.get('numoutputs');
msg.inc_node_name = env.get('inc_node_name');
msg.nodemakerhtml = '';
msg.nodemakerjs = '';
msg.runtimecode = '';
if (msg.inc_node_name) {
    msg.inc_node_name = '    <div class="form-row">' +"\n";
    msg.inc_node_name += '        <label for="node-input-name"><i class="icon-tag"></i> Name</label>' + "\n";
    msg.inc_node_name += '        <input type="text" id="node-input-name" placeholder="Name">' + "\n";
    msg.inc_node_name += "    </div>";
}else{
    msg.inc_node_name = '';
}
return msg;
