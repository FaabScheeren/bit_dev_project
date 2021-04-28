"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./style.scss");

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Inputfield(props) {
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: "inputfield_wrapper",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
      className: "inputfield_label",
      children: props.label
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
      className: "inputfield_input",
      placeholder: props.placeholder,
      name: props.name
    })]
  });
}

var _default = Inputfield;
exports.default = _default;

//# sourceMappingURL=Inputfield.js.map