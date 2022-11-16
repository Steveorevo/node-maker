# node-maker
A set of sub flows that can be used to quickly create a new Node-RED node, its property panels, and initial behavior. You can use Node Maker to easily create an initial template or the entire work necessary for creating a Node-RED node. 

#### The motivation behind Node-Maker
TODO: describe initial reason, ...

#### Support the creator
TODO: provide contact details

![screenshot of node-maker](https://raw.github.com/steveorevo/node-maker/main/images/node-maker.jpg)

## How to install Node Maker
Node Maker is distributed as a JSON flow file in the file named node-maker.json. To add node-maker to your own Node-RED instance, simply obtain the contents of the node-maker.json file and import it into your Node-RED editor:

#### Via [GitHub](https://github.com/steveorevo/node-maker)
1) View the [raw file by clicking here](https://raw.github.com/steveorevo/node-maker/main/node-maker.json), select all of its content and copy it to the clipboard.

#### Via [Node-RED's flows library](https://flows.nodered.org/flow/TDB)
1) View the Node-RED's flows library entry for the [Node Maker page by clicking here](https://flows.nodered.org/flow/TBD)
2) Use the copy button or select all of the JSON and copy it to the clipboard.

### Use Node-RED's Import command
1) Use Node-RED editor's hamburger menu in the upper right corner to select the "Import" menu option.
2) Paste the JSON flow from the clipboard and optionally select the Import into option button for "new flow", followed by the import button.

## How to use Node Maker
TODO: provide initial example explination

#### Tips on writing nodes
* Because you can crash the runtime; use try... catch liberally in your javascript file(s), then you can avoid having to drop to the shell to restart Node-RED. For example:
```
module.exports = function(RED) {
    function {{node_name}}(config) {
        RED.nodes.createNode(this,config);
        var node = this;
        try {
        
            // You might do something fatal
            
        }catch(e) {
          node.error(e); // report it within Node-RED's IDE
        }
    }
    RED.nodes.registerType('{{node_name}}', {{node_name}});
}
```
