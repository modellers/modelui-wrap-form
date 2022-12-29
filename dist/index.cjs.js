'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var modeluiCoreRuntime = require('modelui-core-runtime');
var React = require('react');
var materialUi = require('@rjsf/material-ui');
var styles = require('@mui/styles');
var styles$1 = require('@mui/material/styles');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return _assertThisInitialized(self);
}
function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
      result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}

var events = modeluiCoreRuntime.structs.InputBase.events;
var triggers = modeluiCoreRuntime.structs.InputBase.triggers;
var options = {
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
};
var config = {
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
  state: modeluiCoreRuntime.structs.InputBase.StateInput
};

/* NOT USED */
var style = function style(theme) {
  return {};
};
/* */
var FormComponent = /*#__PURE__*/function (_structs$InputBase$In) {
  _inherits(FormComponent, _structs$InputBase$In);
  var _super = _createSuper(FormComponent);
  /**
   * Used to manage internal state of avatars
   */
  function FormComponent(props) {
    var _this;
    _classCallCheck(this, FormComponent);
    props.config.options = _objectSpread2(_objectSpread2({}, props.config.options), {
      label: 'Dropdown',
      variant: 'outlined'
    });
    _this = _super.call(this, props);
    _this.updateView = function (action, val, updated, data) {
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
    _this.getUISchema = function (schema) {
      // enumerates schema and extracts uiSchema from ui-schema keywords
      // TODO: make this recursive for sub propertis
      var propAttributes = ["enumNames", "minLength", "maxLength"];
      var uiSchema = {};
      if (!schema) {
        schema = {};
      }
      if (!schema.properties) {
        schema.properties = {};
      }
      for (var prop in schema.properties) {
        for (var attr in schema.properties[prop]) {
          if (attr === "edit") {
            // rename this attribute to ui:options
            uiSchema[prop] = {};
            for (var p in schema.properties[prop][attr]) {
              uiSchema[prop]["ui:" + p] = schema.properties[prop][attr][p];
            }
            for (var i in propAttributes) {
              var move_attr = propAttributes[i];
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
      };
      return uiSchema;
    };
    _this.OnInvalid = function (errorProps) {
      var errors = errorProps.errors;
      // FIXME: define a new schema or format these errors to a friendly schema
      // schema: formatData + any errors
      _this.triggerEvent("invalidated", errorProps, errors);
      return /*#__PURE__*/React__default["default"].createElement("div", null);
    };
    _this.OnChanged = function (evt) {
      // schema: formatData (only if valid)
      if (evt.errors.length === 0) {
        _this.triggerEvent("validated", _objectSpread2(_objectSpread2({}, _this.state.data), {}, {
          value: evt.formData,
          schema: _this.state.data.schema || _this.state.schema
        }), evt);
      }
      _this.triggerEvent("changed", _objectSpread2(_objectSpread2({}, _this.state.data), {}, {
        value: evt.formData,
        schema: _this.state.data.schema || _this.state.schema
      }), evt);
    };
    _this.OnSubmited = function (evt) {
      // schema: formData (will clear form)
      _this.triggerEvent("submitted", _objectSpread2(_objectSpread2({}, _this.state.data), {}, {
        value: evt.formData,
        schema: _this.state.data.schema || _this.state.schema
      }), evt);
    };
    _this.getMUITheme = function () {
      // TODO: only create if changed
      var muiTheme = styles$1.createTheme({
        props: {
          MuiTextField: {
            variant: _this.props.config.options.variant,
            size: 'medium',
            // does not work on color picker to use large
            color: _this.props.config.options.color
          },
          MuiSelect: {
            variant: _this.props.config.options.variant,
            color: _this.props.config.options.color,
            size: 'large'
          },
          MuiCheckbox: {
            variant: _this.props.config.options.variant,
            color: _this.props.config.options.color,
            size: 'medium'
          },
          MuiRadio: {
            variant: _this.props.config.options.variant,
            color: _this.props.config.options.color,
            size: 'medium'
          },
          MuiRadioGroup: {
            variant: _this.props.config.options.variant,
            color: _this.props.config.options.color,
            size: 'large'
          }
        }
      });
      return muiTheme;
    };
    _this.form_instance = null;
    return _this;
  }
  _createClass(FormComponent, [{
    key: "getActionState",
    value: function getActionState(action, callback) {
      if (this.form_instance) {
        if (action === 'submit') {
          // will initiate OnSubmited
          this.form_instance.submit();
        } else {
          callback();
        }
      } else {
        callback();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      // additional configuration options
      var configProps = {};
      {
        configProps.children = /*#__PURE__*/React__default["default"].createElement("div", null);
      }

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
      return /*#__PURE__*/React__default["default"].createElement("div", null, /*#__PURE__*/React__default["default"].createElement(styles.ThemeProvider, {
        theme: this.getMUITheme()
      }, /*#__PURE__*/React__default["default"].createElement(materialUi.MuiForm5, _extends({
        showErrorList: true,
        liveValidate: true,
        onChange: this.OnChanged,
        onSubmit: this.OnSubmited
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
        */,
        disabled: this.state.disabled,
        schema: this.state.data.schema || this.props.schema,
        formData: this.state.data.value
      }, configProps, {
        ref: function ref(form) {
          _this2.form_instance = form;
        }
      }))));
    }
  }]);
  return FormComponent;
}(modeluiCoreRuntime.structs.InputBase.InputBase);
var FormComponent$1 = styles.withStyles(style, {
  withTheme: true
})(FormComponent);
// export default FormComponent;

function Form(props) {
  // lets enumerate schema to extract uiSchema and validation
  return /*#__PURE__*/React__default["default"].createElement(FormComponent$1, props);
}
function registerForm(component_manager) {
  // self register component to layout manager
  component_manager.registerComponent({
    component: Form,
    type: config.type,
    events: events,
    triggers: triggers,
    config: config
  });
}

// Managers and factories
function registerComponents(component_manager) {
  if (!component_manager) {
    component_manager = modeluiCoreRuntime.layout.Manager.ComponentManager.getInstance();
  }
  /*
  if (component_manager.constructor.name !== 'ComponentManager') {
      throw `Constructor must be component manager. Got type ${component_manager.constructor.name}`;
  }
  */
  registerForm(component_manager);
}

exports.registerComponents = registerComponents;
//# sourceMappingURL=index.cjs.js.map
