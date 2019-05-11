import { Component, Property, Port } from 'flow-platform-sdk';

export default class Updater extends Component {
  constructor() {
    super();

    this.name = 'modifier';

    const value = new Property('value', 'text');
    const propertyId = new Property('outputPropertyId', 'text');
    const componentId = new Property('outputComponentId', 'text');
    const outputResult = new Property('outputResult', 'object');

    value.required = true;
    propertyId.required = true;
    componentId.required = true;
    outputResult.required = true;

    this.addProperty(value);
    this.addProperty(propertyId);
    this.addProperty(componentId);
    
    const result = new Port('Result');
    result.addProperty(outputResult);
    this.addPort(result);

    this.attachTask(() => {
      const port = this.getPort('Result');
      port.getProperty('outputResult').data = {
        value: this.getProperty('value').data,
        propertyId: this.getProperty('outputPropertyId').data,
        componentId: this.getProperty('outputComponentId').data
      };

      port.emit();
    });

    this.taskComplete();
  }
}