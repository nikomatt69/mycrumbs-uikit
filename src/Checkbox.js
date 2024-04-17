"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Checkbox = void 0;
var react_1 = require("react");
var cn_1 = require("../cn");
exports.Checkbox = (0, react_1.forwardRef)(function CheckBox(_a, ref) {
    var label = _a.label, _b = _a.className, className = _b === void 0 ? '' : _b, props = __rest(_a, ["label", "className"]);
    var id = (0, react_1.useId)();
    return (React.createElement("div", { className: "flex items-center" },
        React.createElement("input", __assign({ ref: ref, className: (0, cn_1.default)('text-brand focus:ring-brand-500 mr-2 cursor-pointer rounded border-gray-300 transition duration-200', className), type: "checkbox", id: id }, props)),
        React.createElement("label", { className: "inline-block whitespace-nowrap text-sm text-gray-800 dark:text-gray-200", htmlFor: id }, label)));
});
