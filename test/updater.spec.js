import { expect } from 'chai';
import { v4 as uuid } from 'uuid';
import Component from '../src/updater';

describe('Component tests', function() {
  it('contains properties passed in', function(done) {
    const component = new Component();
    const componentId = uuid();
    const propertyId = uuid();
    component.getProperty('value').data = 'test value';
    component.getProperty('outputComponentId').data = componentId;
    component.getProperty('outputPropertyId').data = propertyId;

    expect(component.getProperty('value').data).to.equal('test value')
    expect(component.getProperty('outputComponentId').data).to.equal(componentId)
    expect(component.getProperty('outputPropertyId').data).to.equal(propertyId)
    done()

    component.execute();
  })

  it.skip('emits the properties passsed in as output', function(done) {
    const component = new Component();
    const componentId = uuid();
    const propertyId = uuid();
    component.getProperty('value').data = 'test value';
    component.getProperty('outputComponentId').data = componentId;
    component.getProperty('outputPropertyId').data = propertyId;

    component.getPort('Result').onEmit(function() {
      expect(component.getPort('Result').getProperty('outputResult').data.value = 'test value');

      done()
    })

    component.execute()
  })
  
})