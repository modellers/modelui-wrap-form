import React from 'react';

import FormComponent, { events, triggers, config } from './FormComponent'

export function Form(props) {
    // lets enumerate schema to extract uiSchema and validation
    return (<FormComponent {...props} />);
}

export function registerForm(component_manager) {
    // self register component to layout manager
    component_manager.registerComponent({
        component: Form,
        type: config.type,
        events: events,
        triggers: triggers,
        config: config
    });
}