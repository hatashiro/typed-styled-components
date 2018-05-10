"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
exports.__esModule = true;
var styled_components_1 = require("styled-components");
exports.styled = styled_components_1["default"];
function tStyled() {
    return styled_components_1["default"];
}
exports["default"] = tStyled;
var Title = tStyled().h1(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  color: ", "\n"], ["\n  color: ", "\n"])), function (props) { return props.hello; });
__export(require("styled-components"));
var templateObject_1;
