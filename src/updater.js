const Flow = require('flow-platform-sdk');

class Updater extends Flow.Component {
  constructor() {
    super();

    this.name = 'modifier';

    const value = new Flow.Property('value', 'text');
    const propertyId = new Flow.Property('outputPropertyId', 'text');
    const componentId = new Flow.Property('outputComponentId', 'text');
    const outputResult = new Flow.Property('outputResult', 'object');

    value.required = true;
    propertyId.required = true;
    componentId.required = true;
    outputResult.required = true;

    this.addProperty(value);
    this.addProperty(propertyId);
    this.addProperty(componentId);
    
    const result = new Flow.Port('Result');
    result.addProperty(outputResult)

    this.attachTask(() => {
      const port = this.getPort('Result')
      port.getProperty('outputResult').data = {
        value: this.getProperty('value').data,
        propertyId: this.getProperty('outputPropertyId').data,
        componentId: this.getProperty('outputComponentId').data
      }

      port.emit();
    });

    this.taskComplete()
  }
}

module.exports = Updater;