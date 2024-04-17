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
exports.RangeSlider = void 0;
var SliderPrimitive = require("@radix-ui/react-slider");
var react_1 = require("react");
var cn_1 = require("../cn");
exports.RangeSlider = (0, react_1.forwardRef)(function RangeSlider(_a, ref) {
    var _b = _a.className, className = _b === void 0 ? '' : _b, displayValue = _a.displayValue, rest = __rest(_a, ["className", "displayValue"]);
    return (React.createElement(SliderPrimitive.Root, __assign({ className: (0, cn_1.default)('relative flex h-5 w-full touch-none select-none items-center', className), max: 100, ref: ref, step: 1 }, rest),
        React.createElement(SliderPrimitive.Track, { className: "dark:bg-brand-800 bg-brand-200 relative h-1.5 grow rounded-full" },
            React.createElement(SliderPrimitive.Range, { className: "bg-brand-600 absolute h-full rounded-full" })),
        React.createElement(SliderPrimitive.Thumb, { "aria-label": "Slider", className: "bg-brand-500 block rounded-lg px-2 py-1 text-xs font-bold text-white focus:outline-none active:scale-110" }, displayValue || rest.value)));
});
