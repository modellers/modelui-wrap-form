import React from 'react';
// material-ui
import { MuiForm5 as Form } from "@rjsf/material-ui";
// styles
import { withStyles } from '@mui/styles';

import { createTheme } from '@mui/material/styles'; //  https://github.com/rjsf-team/react-jsonschema-form/issues/1987
import { ThemeProvider } from '@mui/styles';
// input base
import { structs } from 'modelui-core-runtime';

export const events = structs.InputBase.events;
export const triggers = structs.InputBase.triggers;

export const options = {
  "id": "form",
  "title": "Form",
  "$schema": "http://json-schema.org/draft-07/schema#",
  "description": "Form options",
  "x-layout": "component",
  "type": "object",
  "version": 0.1,
  "properties": {
    "variant": {
      "title": "variant",
      "description": "variant",
      "type": "string",
      "enum": ['filled', 'outlined', 'standard'],
      "default": "filled"
    },
    "color": {
      "title": "color",
      "description": "color",
      "type": "string",
      "enum": ['initial', 'inherit', 'primary', 'secondary', 'textPrimary', 'textSecondary', 'error'],
      "default": "primary"
    }
  },
  "required": ["variant", "color"]
}

export const config = {

  name: "Form",
  type: "form",
  author: "Kjartan Jónsson",
  description: "Form component",
  version: 0.1,
  relation: {
    contains: [],
    within: "component" // parent
  },
  options: options,
  state: structs.InputBase.StateInput
}

/* NOT USED */
const style = (theme) => ({
});
/* */

class FormComponent extends structs.InputBase.InputBase {
  /**
   * Used to manage internal state of avatars
   */
  constructor(props) {
    props.config.options = { ...props.config.options, ...{ label: 'Dropdown', variant: 'outlined' } }
    super(props);
    this.form_instance = null;
  }

  getActionState(action, callback) {
    if (this.form_instance) {
      if (action === 'submit') {
        // will initiate OnSubmited
        this.form_instance.submit();
      } else { callback(); }
    } else { callback(); }
  }

  updateView = function (action, val, updated, data) {
    // extend by parent
    if (this.form_instance) {
      if (action === 'enable') {
        this.form_instance.enable = true;
      }
      if (action === 'disable') {
        this.form_instance.enable = false;
      }
    }
    return true;
  };

  getUISchema = (schema) => {
    // enumerates schema and extracts uiSchema from ui-schema keywords
    // TODO: make this recursive for sub propertis
    const propAttributes = ["enumNames", "minLength", "maxLength"];
    let uiSchema = {}
    if (!schema) { schema = {}; }
    if (!schema.properties) { schema.properties = {}; }
    for (let prop in schema.properties) {
      for (let attr in schema.properties[prop]) {
        if (attr === "edit") { // rename this attribute to ui:options
          uiSchema[prop] = {};
          for (let p in schema.properties[prop][attr]) {
            uiSchema[prop]["ui:" + p] = schema.properties[prop][attr][p];
          }
          for (let i in propAttributes) {
            let move_attr = propAttributes[i];
            if (schema.properties[prop][attr][move_attr]) {
              schema.properties[prop][move_attr] = schema.properties[prop][attr][move_attr];
            }
          }

        }
      }
    }

    // https://react-jsonschema-form.readthedocs.io/en/latest/api-reference/themes/semantic-ui/uiSchema/#uischema-options-for-semantic-ui
    uiSchema["ui:options"] = {
      semantic: {
        icon: 'users',
        iconPosition: 'right'
      }
    }

    return uiSchema;
  }

  // override how we display errrors (disabled)
  OnInvalid = (errorProps) => {
    const { errors } = errorProps;
    // FIXME: define a new schema or format these errors to a friendly schema
    // schema: formatData + any errors
    this.triggerEvent("invalidated", errorProps, errors);
    return (<div></div>)
  }

  OnChanged = (evt) => {
    // schema: formatData (only if valid)
    if (evt.errors.length === 0) {
      this.triggerEvent("validated", { ...this.state.data, value: evt.formData, schema: this.state.data.schema || this.state.schema }, evt);
    }
    this.triggerEvent("changed", { ...this.state.data, value: evt.formData, schema: this.state.data.schema || this.state.schema }, evt);
  }

  OnSubmited = (evt) => {
    // schema: formData (will clear form)
    this.triggerEvent("submitted", { ...this.state.data, value: evt.formData, schema: this.state.data.schema || this.state.schema }, evt);
  }

  getMUITheme = () => {
    // TODO: only create if changed
    const muiTheme = createTheme({
      props: {
        MuiTextField: {
          variant: this.props.config.options.variant,
          size: 'medium', // does not work on color picker to use large
          color: this.props.config.options.color
        },
        MuiSelect: {
          variant: this.props.config.options.variant,
          color: this.props.config.options.color,
          size: 'large',
        },
        MuiCheckbox: {
          variant: this.props.config.options.variant,
          color: this.props.config.options.color,
          size: 'medium'
        },
        MuiRadio: {
          variant: this.props.config.options.variant,
          color: this.props.config.options.color,
          size: 'medium'
        },
        MuiRadioGroup: {
          variant: this.props.config.options.variant,
          color: this.props.config.options.color,
          size: 'large'
        }
      }
    });
    return muiTheme;
  }

  render() {
    // additional configuration options
    let configProps = {};

    // submit button 
    const hide_submit = true;
    if (hide_submit) { configProps.children = <div></div>; }

    // do not show error list
    configProps.howErrorList = false;
    configProps.ErrorList = this.OnInvalid;

    // forward custom uiSchema if defined
    if (this.props.uiSchema) {
      configProps.uiSchema = this.props.uiSchema;
    } else {
      configProps.uiSchema = this.getUISchema(this.state.data.schema || this.props.schema);
    }

    configProps.uiSchema = this.getUISchema(this.state.data.schema || this.props.schema);

    return (
      <div>
        <ThemeProvider theme={this.getMUITheme()}>
          <Form
            showErrorList={true}
            liveValidate
            onChange={this.OnChanged}
            onSubmit={this.OnSubmited}
            /*
            className={className ? className : "rjsf"}
            id={id}
            name={name}
            method={method}
            target={target}
            action={action}
            autoComplete={autoComplete}
            encType={enctype}
            acceptCharset={acceptcharset}
            noValidate={noHtml5Validate}
            uiSchema={uiSchema}
            errorSchema={errorSchema}
            idSchema={idSchema}
            idPrefix={idPrefix}
            formContext={formContext}
            onBlur={this.onBlur}
            onFocus={this.onFocus}
            registry={registry}
            */
            disabled={this.state.disabled}
            schema={this.state.data.schema || this.props.schema}
            formData={this.state.data.value}
            {...configProps}
            ref={(form) => { this.form_instance = form; }
            }
          />
        </ThemeProvider >
      </div >
    )
  }

}

export default withStyles(style, { withTheme: true })(FormComponent);
// export default FormComponent;