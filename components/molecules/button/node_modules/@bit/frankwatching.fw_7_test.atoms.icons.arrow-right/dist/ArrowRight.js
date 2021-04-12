"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./styles.scss");

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ArrowRight(props) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
    className: props.classes,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "12",
      height: "12",
      fill: "none",
      viewBox: "0 0 12 12",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
        fill: "#333",
        d: "M6 .656L11.344 6 6 11.344l-.938-.938 3.72-3.75H.655V5.344h8.125l-3.719-3.75L6 .656z"
      })
    })
  });
}

var _default = ArrowRight;
exports.default = _default;

//# sourceMappingURL=ArrowRight.js.map