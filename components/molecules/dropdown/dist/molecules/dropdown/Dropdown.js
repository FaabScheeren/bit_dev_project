"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./style.scss");

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Dropdown(props) {
  console.log(props);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("select", {
      onChange: function onChange(e) {
        return props.onChange(e);
      },
      value: props.value,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("option", {
        children: "Wie is de leukste?"
      }), props.options.map(function (option) {
        return /*#__PURE__*/(0, _jsxRuntime.jsx)("option", {
          children: option
        });
      })]
    })
  });
}

var _default = Dropdown;
exports.default = _default;

//# sourceMappingURL=Dropdown.js.map