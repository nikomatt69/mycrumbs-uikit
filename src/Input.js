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
exports.Input = void 0;
var dynamic_1 = require("next/dynamic");
var react_1 = require("react");
var cn_1 = require("../cn");
var Form_1 = require("./Form");
var HelpTooltip = (0, dynamic_1.default)(function () { return Promise.resolve().then(function () { return require('./HelpTooltip'); }); });
exports.Input = (0, react_1.forwardRef)(function Input(_a, ref) {
    var label = _a.label, prefix = _a.prefix, _b = _a.type, type = _b === void 0 ? 'text' : _b, iconLeft = _a.iconLeft, iconRight = _a.iconRight, error = _a.error, _c = _a.className, className = _c === void 0 ? '' : _c, helper = _a.helper, props = __rest(_a, ["label", "prefix", "type", "iconLeft", "iconRight", "error", "className", "helper"]);
    var id = (0, react_1.useId)();
    var iconStyles = [
        'text-zinc-500 [&>*]:peer-focus:text-brand [&>*]:h-5',
        { '!text-red-500 [&>*]:peer-focus:!text-red-500': error }
    ];
    return (React.createElement("label", { className: "w-full", htmlFor: id },
        label ? (React.createElement("div", { className: "mb-1 flex items-center space-x-1.5" },
            React.createElement("div", { className: "font-medium text-gray-800 dark:text-gray-200" }, label),
            React.createElement(HelpTooltip, null, helper))) : null,
        React.createElement("div", { className: "flex" },
            prefix ? (React.createElement("span", { className: "lt-text-gray-500 inline-flex items-center rounded-l-xl border border-r-0 border-gray-300 bg-gray-100 px-3 dark:border-gray-700 dark:bg-gray-900" }, prefix)) : null,
            React.createElement("div", { className: (0, cn_1.default)({ 'bg-gray-500/20 opacity-60': props.disabled }, error ? '!border-red-500' : 'focus-within:ring-1', prefix ? 'rounded-r-xl' : 'rounded-xl', 'focus-within:border-brand-500 focus-within:ring-brand-400 flex w-full items-center border border-gray-300 bg-white dark:border-gray-700 dark:bg-gray-900') },
                React.createElement("input", __assign({ id: id, className: (0, cn_1.default)({ 'placeholder:text-red-500': error }, prefix ? 'rounded-r-xl' : 'rounded-xl', 'peer w-full border-none bg-transparent outline-none focus:ring-0', className), type: type, ref: ref }, props)),
                React.createElement("span", { tabIndex: -1, className: (0, cn_1.default)({ 'order-first pl-3': iconLeft }, iconStyles) }, iconLeft),
                React.createElement("span", { tabIndex: -1, className: (0, cn_1.default)({ 'order-last pr-3': iconRight }, iconStyles) }, iconRight))),
        props.name ? React.createElement(Form_1.FieldError, { name: props.name }) : null));
});
