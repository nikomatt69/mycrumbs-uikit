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
exports.Select = void 0;
var react_1 = require("react");
var cn_1 = require("../cn");
exports.Select = (0, react_1.forwardRef)(function Select(_a, ref) {
    var _b = _a.className, className = _b === void 0 ? '' : _b, label = _a.label, options = _a.options, rest = __rest(_a, ["className", "label", "options"]);
    var id = (0, react_1.useId)();
    return (React.createElement("label", { htmlFor: id },
        label ? React.createElement("div", { className: "label" }, label) : null,
        React.createElement("select", __assign({ className: (0, cn_1.default)('focus:border-brand-500 focus:ring-brand-400 w-full rounded-xl border border-gray-300 bg-white outline-none dark:border-gray-700 dark:bg-gray-800', className), id: id, ref: ref }, rest), options === null || options === void 0 ? void 0 : options.map(function (_a) {
            var disabled = _a.disabled, label = _a.label, selected = _a.selected, value = _a.value;
            return (React.createElement("option", { disabled: disabled, selected: selected, value: value }, label));
        }))));
});
