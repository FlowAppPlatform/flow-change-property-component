## Flow Change Property Component
A component to change component properties for flow

#### installation:
```
npm install --save flow-change-property-component
```
*Usage*
```javascript
// require the component
const Component = require('flow-change-property-component');

// create an instance of the componnet
const component = new Component()

// provide required parameters
component.getProperty('value').data = 'my awesone value';
component.getProperty('outputComponentId').data = 'my_component_id';
component.getProperty('outputPropertyId').data = 'my_property_id';

// listen for port emit events
component.getPort('Result').onEmit(function() {
  component.getPort('Result').getProperty('outputResult').data.value; //value
  component.getPort('Result').getProperty('outputResult').data.componentId; //component id
  component.getPort('Result').getProperty('outputResult').data.propertyId; //property id
})

// add the component to a graph
const Graph = require('flow-platform-sdk').Graph;
new Graph('graph_name').addComponent(component);

// execute
component.execute();
```
