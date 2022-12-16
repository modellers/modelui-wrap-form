/**
 * ListComponent tests
 * Testing DD events and actions integrety
 */

import { events, triggers, config } from './FormComponent'
import { Form } from './Form'

import { util } from 'modelui-core-runtime';
import { layout } from 'modelui-core-runtime';
import registerComponents from './Components';
import renderer from 'react-test-renderer';

const input_form_schema = {
  id: "form example",
  "$schema": "http://json-schema.org/draft-07/schema#",
  title: "Form example",
  description: "Form input",
  "x-layout": "component",
  type: "object",
  version: 0.1,
  type: 'object',
  properties: {
    id: { type: 'string', title: 'identifier' },
    name: { type: 'string', title: 'name' },
    age: { type: 'integer', title: 'age' },
    born: { type: 'string', format: 'date-time', title: 'born' },
  }
}

describe('FormComponent protocol', () => {
  const tests = util.TestUtil.createComponentClassTests(
    layout.Manager.ComponentManager.getInstance(),
    registerComponents,
    renderer,
    config,
    [
      'submit',
      'enable',
      'disable',
      'clear',
      'populate',
      'replace'
    ], [
    'changed',
    'enabled',
    'disabled',
    'submitted',
    'cleared',
    'populated',
    'replaced',
    'invalidated',
    'validated'
  ], input_form_schema, {
    data: {
      value: {
        'id': 'id1',
        'name': 'John Doe',
        'age': 23,
        'born': '1992-11-17T22:01:00Z'
      }
    },
    schema: input_form_schema
  });
  tests.forEach((t) => { test(t.title, t.test); });
});

describe('Form register', () => {
  const tests = util.TestUtil.createComponentRegisterTests(
    layout.Manager.ComponentManager.getInstance(),
    registerComponents,
    'form',
    Form,
    triggers,
    events,
    config,
    {}
  );
  tests.forEach((t) => { test(t.title, t.test); });
});
