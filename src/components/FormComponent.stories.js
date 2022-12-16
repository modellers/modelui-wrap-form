import React from 'react';
// storybook action handler
import { action } from '@storybook/addon-actions'
// test utils
import { util } from 'modelui-core-runtime'
import registerComponents from './Components';
// components
import FormComponent from './FormComponent';
import { triggers, events, config } from './FormComponent'
import { layout } from 'modelui-core-runtime'

/// Event addon
export default {
  title: 'Extras/Form',
  component: FormComponent,
  argTypes: util.StoryUtil.createStoryArgumentTypesFromSchema(config.options)
};

export const FormBasic = (args) => {

  const props = {
    id: 'FormBasic_id',
    type: 'form',
    data: {
      value: {
        'id': 'id1',
        'name': 'John Doe',
        'age': 23,
        'born': '1992-11-17T22:01:00Z'
      }
    },
    config: { options: args },
    schema: {
      type: 'object',
      properties: {
        id: { type: 'string' },
        name: { type: 'string' },
        age: { type: 'integer' },
        born: { type: 'string', format: 'date-time' },
      }
    }
  }

  return (
    <div>
      {util.StoryUtil.prepStoryComponent(
        layout.Manager.ComponentManager.getInstance(), action, registerComponents,
        props, triggers, events, {
        triggers: {
          populate: {
            value: {
              'id': 'id2',
              'name': 'Joe Doe',
              'age': 34,
              'born': '1994-11-17T22:01:00Z'
            }
          }
        }
      })}
      <FormComponent {...props} />
    </div>
  );
};
FormBasic.args = {
  variant: 'outlined',
  color: 'primary'
}

///////// TEXT-FIELD

export const FormTextfield = (args) => {

  const props = {
    id: 'FormTextfield_id',
    type: 'form',
    data: {
      value: { 'name': 'John Doe' }
    },
    config: { options: args },
    schema: {
      type: 'object',
      properties: {
        name: { type: 'string', description: "The user name" },
      }
    }
  }

  return (
    <div>
      {util.StoryUtil.prepStoryComponent(
        layout.Manager.ComponentManager.getInstance(), action, registerComponents,
        props, triggers, events, {
        triggers: {
          populate: {
            value: { 'name': 'Joe Doe' }
          }
        }
      })}
      <FormComponent {...props} />
    </div>
  );
};
FormTextfield.args = {
  variant: 'outlined',
  color: 'primary'
}

///////// DROPDOWN

export const FormDropdown = (args) => {

  const props = {
    id: 'FormDropdown_id',
    type: 'form',
    data: {
      value: { 'sexuality': 'heterosexual' }
    },
    config: { options: args },
    schema: {
      type: 'object',
      properties: {
        sexuality: {
          title: "Sexuality",
          type: "string",
          description: "List of sexualities",
          enum: ["heterosexual", "homosexual", "lesbian", "bisexual", "pansexual", "bicurious", "polysexual", "monosexual", "allosexual", "gynosexual", "questioning", "asexual", "demisexual", "grey asexual", "perioriented", "varioriented", "heteronormative", "erasure", "cishet", "polyamorous", "monoamorous", "queer", "ally"],
          edit: { "widget": "select", "enumDisabled": ["lesbian", "bisexual", "pansexual"], "enumNames": ["Heterosexual", "Homosexual", "Lesbian", "Bisexual", "Pansexual", "Bicurious", "Polysexual", "Monosexual", "Allosexual", "Gynosexual", "Questioning", "Asexual", "Demisexual", "Grey Asexual", "Perioriented", "Varioriented", "Heteronormative", "Erasure", "Cishet", "Polyamorous", "Monoamorous", "Queer", "Ally"] },
        }
      }
    }
  }

  return (
    <div>
      {util.StoryUtil.prepStoryComponent(
        layout.Manager.ComponentManager.getInstance(), action, registerComponents,
        props, triggers, events, {
        triggers: {
          populate: {
            value: { 'sexuality': 'lesbian' }
          }
        }
      })}
      <FormComponent {...props} />
    </div>
  );
};
FormDropdown.args = {
  variant: 'outlined',
  color: 'primary'
}

///////// DATE-TIME

export const FormDateTime = (args) => {

  const props = {
    id: 'FormDateTime_id',
    type: 'form',
    data: {
      value: { 'birthtime': '2010-11-17T22:34:12Z' }
    },
    config: { options: args },
    schema: {
      type: 'object',
      properties: {
        birthtime: {
          title: "Year of birth",
          type: "string",
          description: "When person was born",
          format: "date-time"
        }
      }
    }
  }

  return (
    <div>
      {util.StoryUtil.prepStoryComponent(
        layout.Manager.ComponentManager.getInstance(), action, registerComponents,
        props, triggers, events, {
        triggers: {
          populate: {
            value: { 'birthtime': '2011-12-17T12:34:12Z' }
          }
        }
      })}
      <FormComponent {...props} />
    </div>
  );
};
FormDateTime.args = {
  variant: 'outlined',
  color: 'primary'
}

///////// CHECKOX

export const FormCheckbox = (args) => {

  const props = {
    id: 'FormCheckbox_id',
    type: 'form',
    data: {
      value: { 'is_male': true }
    },
    config: { options: args },
    schema: {
      type: 'object',
      properties: {
        is_male: {
          title: "Is Male",
          description: "Born gender",
          type: "boolean",
          edit: { "help": "The gender male or not male" }
        }
      }
    }
  }

  return (
    <div>
      {util.StoryUtil.prepStoryComponent(
        layout.Manager.ComponentManager.getInstance(), action, registerComponents,
        props, triggers, events, {
        triggers: {
          populate: {
            value: { 'is_male': false }
          }
        }
      })}
      <FormComponent {...props} />
    </div>
  );
};
FormCheckbox.args = {
  variant: 'outlined',
  color: 'primary'
}

///////// INTEGER RANGE

export const FormNumericRange = (args) => {

  const props = {
    id: 'FormNumericRange_id',
    type: 'form',
    data: {
      value: { 'age': 33 }
    },
    config: { options: args },
    schema: {
      type: 'object',
      properties: {
        age: {
          type: "number",
          minimum: 1,
          maximum: 105,
          description: "Person age",
          edit: { "widget": "updown" }
        }
      }
    }
  }

  return (
    <div>
      {util.StoryUtil.prepStoryComponent(
        layout.Manager.ComponentManager.getInstance(), action, registerComponents,
        props, triggers, events, {
        triggers: {
          populate: {
            value: { 'age': 44 }
          }
        }
      })}
      <FormComponent {...props} />
    </div>
  );
};
FormNumericRange.args = {
  variant: 'outlined',
  color: 'primary'
}

///////// INTEGER RANGE

export const FormSlider = (args) => {

  const props = {
    id: 'FormSlider_id',
    type: 'form',
    data: {
      value: { 'age': 33 }
    },
    config: { options: args },
    schema: {
      type: 'object',
      properties: {
        age: {
          type: "number",
          minimum: 1,
          maximum: 105,
          description: "Person age",
          edit: { "widget": "range" }
        }
      }
    }
  }

  return (
    <div>
      {util.StoryUtil.prepStoryComponent(
        layout.Manager.ComponentManager.getInstance(), action, registerComponents,
        props, triggers, events, {
        triggers: {
          populate: {
            value: { 'age': 44 }
          }
        }
      })}
      <FormComponent {...props} />
    </div>
  );
};
FormSlider.args = {
  variant: 'outlined',
  color: 'primary'
}

///////// RADIO BUTTON

export const FormRadioButton = (args) => {

  const props = {
    id: 'FormRadioButton_id',
    type: 'form',
    data: {
      value: { 'gender': false }
    },
    config: { options: args },
    schema: {
      type: 'object',
      properties: {
        gender: {
          title: "Gender",
          type: "boolean",
          description: "Person gender",
          edit: { "widget": "radio", "help": "helpme !!", "enumNames": ["Male", "Female"] }
        },
      }
    }
  }

  return (
    <div>
      {util.StoryUtil.prepStoryComponent(
        layout.Manager.ComponentManager.getInstance(), action, registerComponents,
        props, triggers, events, {
        triggers: {
          populate: {
            value: { 'gender': true }
          }
        }
      })}
      <FormComponent  {...props} />
    </div>
  );
};
FormRadioButton.args = {
  variant: 'outlined',
  color: 'primary'
}

///////// COLOR SELECTION

export const FormColorSwatch = (args) => {

  const props = {
    id: 'FormColorSwatch_id',
    type: 'form',
    data: {
      value: { 'color': '#ffff00' }
    },
    config: { options: args },
    schema: {
      type: 'object',
      properties: {
        color: {
          title: "Favorite Color",
          type: "string",
          format: "color",
          description: "Person favorite color"
        },
      }
    }
  }

  return (
    <div>
      {util.StoryUtil.prepStoryComponent(
        layout.Manager.ComponentManager.getInstance(), action, registerComponents,
        props, triggers, events, {
        triggers: {
          populate: {
            value: { 'color': '#fff111' }
          }
        }
      })}
      <FormComponent {...props} />
    </div>
  );
};
FormColorSwatch.args = {
  variant: 'outlined',
  color: 'primary'
}


/// schema tests

export const SchemaChange = (args) => {
  const change_values = {
    value: {
      'id': 'id2',
      'firstName': 'Joe',
      'middleName': 'Super',
      'lastName': 'Doe',
      'age': 34,
      'born': '2018-11-13T20:20:39+00:00'
    },
    schema: {
      type: 'object',
      properties: {
        id: { type: 'string' },
        firstName: { type: 'string' },
        middleName: { type: 'string' },
        lastName: { type: 'string' },
        age: {
          type: "number",
          minimum: 1,
          maximum: 105,
          description: "Person age",
          edit: { "widget": "range" } // FIXME: does not show a slider
        },
        born: { type: 'string', format: 'date-time' },
      }
    }
  }

  const props = {
    id: 'SchemaChange_id',
    type: 'form',
    data: {
      value: {
        'id': 'id1',
        'name': 'John Doe',
        'age': 23,
        'born': '1992-11-17T22:01:00Z'
      }
    },
    config: { options: args },
    schema: {
      type: 'object',
      properties: {
        id: { type: 'string' },
        name: { type: 'string' },
        age: { type: 'integer' },
        born: { type: 'string', format: 'date-time' },
      }
    }
  }

  return (
    <div>
      {util.StoryUtil.prepStoryComponent(
        layout.Manager.ComponentManager.getInstance(), action, registerComponents,
        props, triggers, events, {
          triggers: {
            populate: change_values,
            replace: change_values,
          }
      })}
      <FormComponent {...props} />
    </div>
  );
};
SchemaChange.args = {
  variant: 'outlined',
  color: 'primary'
}

export const SchemaDropdown = (args) => {

  const props = {
    id: 'SchemaDropdown_id',
    type: 'form',
    data: {
      value: { 'sexuality': 'heterosexual' }
    },
    config: { options: args },
    schema: {
      type: 'object',
      properties: {
        sexuality: {
          title: "Sexuality",
          type: "string",
          description: "List of sexualities",
          enum: ["heterosexual", "homosexual", "lesbian", "bisexual"],
          edit: { "widget": "select", "enumDisabled": ["lesbian"], "enumNames": ["Heterosexual", "Homosexual", "Lesbian", "Bisexual"] },
        }
      }
    }
  }

  return (
    <div>
      {util.StoryUtil.prepStoryComponent(
        layout.Manager.ComponentManager.getInstance(), action, registerComponents,
        props, triggers, events, {
        triggers: {
          populate: {
            value: { 'sexuality': 'lesbian' },
            schema: {
              type: 'object',
              properties: {
                sexuality: {
                  title: "Sexuality",
                  type: "string",
                  description: "List of sexualities",
                  enum: ["heterosexual", "homosexual", "lesbian", "bisexual", "pansexual", "bicurious", "polysexual", "monosexual", "allosexual", "gynosexual", "questioning", "asexual", "demisexual", "grey asexual", "perioriented", "varioriented", "heteronormative", "erasure", "cishet", "polyamorous", "monoamorous", "queer", "ally"],
                  edit: { "widget": "select", "enumDisabled": ["lesbian", "bisexual", "pansexual"], "enumNames": ["Heterosexual", "Homosexual", "Lesbian", "Bisexual", "Pansexual", "Bicurious", "Polysexual", "Monosexual", "Allosexual", "Gynosexual", "Questioning", "Asexual", "Demisexual", "Grey Asexual", "Perioriented", "Varioriented", "Heteronormative", "Erasure", "Cishet", "Polyamorous", "Monoamorous", "Queer", "Ally"] },
                }
              }
            }
          }

        }
      })}
      <FormComponent {...props} />
    </div>
  );
};
SchemaDropdown.args = {
  variant: 'outlined',
  color: 'primary'
}