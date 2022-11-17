# node-maker
A set of subflow nodes that can be used to quickly create a new Node-RED node, its property panels, and initial behavior. You can use Node Maker to easily create an initial template or the entire work necessary for creating a Node-RED node. 

![screenshot of node-maker](https://raw.github.com/steveorevo/node-maker/main/images/node-maker.jpg)

## Why Node-Maker?
Time and time again I've found that I need to create nodes with a rich property panel user interface. While Node-RED's fantastic editor includes the ability to make nodes and package them via it's [subflow functionality](https://nodered.org/docs/creating-nodes/subflow-modules#creating-a-subflow) it falls short in the key area of designing a rich user interface. Often this pushes users into [creating nodes](https://nodered.org/docs/creating-nodes/) from scratch that can furnish full control over the property UI:

* Place multiple input fields and types next to each other.
* Implement custom controls; i.e. option boxes, selectboxes with multiselect, etc.
* Create groups of repeating input fields aka "editableLists".
* Design a tabbed interface to pack more 'pages' of input fields.
* Customize the initial size of property panel.

Now with Node Maker you can create rich property panel combinations without even having to *leave the Node-RED Editor interface!

<sub>* technically you'll have to refresh the webpage to see newly created nodes in the palette</sub>

## Requirements
* You should be familiar with [Creating Nodes using Node-RED's documentation.](https://nodered.org/docs/creating-nodes/)
* Linux / macOS with native bash shell
* You may need CLI access to kickoff/troubleshoot the optional node-red restart abiility

Node Maker has currently been tested under Ubuntu Linux; it may work just as well on macOS. It does NOT currently work in Windows; however, a ticket has been opened for that possibility [here (ticket #1)](https://github.com/Steveorevo/node-maker/issues/1).

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
Node Maker is a group of subflow nodes that can be found in the Node-RED editor's palette group **node maker**. Within the palette you'll find two important nodes: 1) start node and 2) finish node. Wire these two nodes together and wire an [inject node](https://nodered.org/docs/user-guide/nodes#inject) to the start node. Double click the start node to fill out the required and optional input fields:

### start node
The start node marks the beginning of a new node defintion. To create a node,
connect an inject node to the start node and connect the start node to a 
finish node. You may wire various other nodes between the start and finish
nodes to define your node's user interface.

The following properties can be configured in the properties panel:

* Node Name - choose a JavaScript variable safe name for your node.
* Version - A valid version string in the form of major, minor, patch i.e. 1.0.0
* Description - a short description of your node.
* Category - The palette group the node will appear under; existing i.e. common or you can define your own.
* Icon - An existing fontawesome name, sans the 'font-awesome/fa-' prefix; i.e. bathtub
* Color - The color of the node as it appears in the palette and editor. I.e. #E2D96E
* Keywords - Used in the package.json file for reference and indexing by npm.
* Author Name - The name of the node author. Used in package.json
* Author Email - The email of the node author. Used in package.json
* GitHub Handle - The handle used for the GitHub repo URL, I.e. john will appears as https://github.com/john/node-name
* Max Row Width - The initial width of the property dialog (in pixels) when it is first opened.
* Inputs - Whether the node accepts an input or not; 1 or 0 our the only acceptable values.
* Outputs - The number of outputs the node will have.
* Include node name... - Determines if a default name field will appear at the top of the property window; appears above any tab or other input fields.

You may then drag and drop (wire inline) additional *UI input nodes* (user interface input nodes) between the start node and finish node; such as the label, field, selectbox, checkbox, spinner, option, textarea, editor, button, button group, or confignode. By default each UI input node will fill one line in the property panel. One line is typical for most applications and is the only option when designing the property panel using Subflows. However, Node Maker gives you the ability to pack up to four UI input nodes next to each other. This more compact arrangement allows you include more options in your property panel user interface.

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


#### Support the creator
TODO: provide contact details
