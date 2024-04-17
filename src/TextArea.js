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
exports.TextArea = void 0;
var react_1 = require("react");
var Form_1 = require("./Form");
exports.TextArea = (0, react_1.forwardRef)(function TextArea(_a, ref) {
    var label = _a.label, props = __rest(_a, ["label"]);
    var id = (0, react_1.useId)();
    return (React.createElement("label", { htmlFor: id },
        label ? React.createElement("div", { className: "label" }, label) : null,
        React.createElement("textarea", __assign({ id: id, className: "focus:border-brand-500 focus:ring-brand-400 w-full rounded-xl border border-gray-300 bg-white px-4 py-2 shadow-sm disabled:bg-gray-500/20 disabled:opacity-60 dark:border-gray-700 dark:bg-gray-900", ref: ref }, props)),
        props.name ? React.createElement(Form_1.FieldError, { name: props.name }) : null));
});
