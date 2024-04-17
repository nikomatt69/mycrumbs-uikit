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
exports.Radio = void 0;
var react_1 = require("react");
var cn_1 = require("../cn");
exports.Radio = (0, react_1.forwardRef)(function Radio(_a) {
    var heading = _a.heading, description = _a.description, _b = _a.className, className = _b === void 0 ? '' : _b, rest = __rest(_a, ["heading", "description", "className"]);
    var id = (0, react_1.useId)();
    return (React.createElement("div", { className: (0, cn_1.default)('flex items-center space-x-3', className) },
        React.createElement("input", __assign({ id: id, type: "radio", className: "text-brand dark:text-brand h-4 w-4 border focus:ring-0 focus:ring-offset-0" }, rest)),
        React.createElement("label", { htmlFor: id },
            React.createElement("div", null, heading),
            description ? React.createElement("div", { className: "text-sm" }, description) : null)));
});
