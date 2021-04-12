"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./style.scss");

var _ArrowRight = _interopRequireDefault(require("../../atoms/icons/ArrowRight"));

var _Home = _interopRequireDefault(require("../../atoms/icons/Home"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Button(props) {
  var icon = {
    home: _Home.default,
    'arrow-right': _ArrowRight.default
  };
  var ComponentIconRight, ComponentIconLeft;

  if (props.iconRight !== undefined) {
    console.log('this');
    ComponentIconRight = icon[props.iconRight];
  }

  if (props.iconLeft !== undefined) {
    ComponentIconLeft = icon[props.iconLeft];
  }

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("a", {
    className: "btn ".concat(props.classes),
    onClick: function onClick(e) {
      return alert("This is amazing");
    },
    children: [props.iconLeft && /*#__PURE__*/(0, _jsxRuntime.jsx)(ComponentIconLeft, {
      classes: "button-icon-left"
    }), props.text, props.iconRight && /*#__PURE__*/(0, _jsxRuntime.jsx)(ComponentIconRight, {
      classes: "button-icon-right"
    })]
  });
}

var _default = Button;
exports.default = _default;

//# sourceMappingURL=Button.js.map