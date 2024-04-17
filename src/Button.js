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
exports.Button = void 0;
var react_1 = require("react");
var cn_1 = require("../cn");
exports.Button = (0, react_1.forwardRef)(function Button(_a, ref) {
    var _b = _a.className, className = _b === void 0 ? '' : _b, _c = _a.size, size = _c === void 0 ? 'md' : _c, _d = _a.variant, variant = _d === void 0 ? 'primary' : _d, outline = _a.outline, icon = _a.icon, children = _a.children, rest = __rest(_a, ["className", "size", "variant", "outline", "icon", "children"]);
    var commonStyles = {
        'border-brand-600 focus:ring-brand-400/50 border': variant === 'primary',
        'border border-gray-600 focus:ring-gray-400/50': variant === 'secondary',
        'border border-yellow-600 focus:ring-yellow-400/50': variant === 'warning',
        'border border-black focus:ring-black': variant === 'black',
        'border border-red-600 focus:ring-red-400/50': variant === 'danger'
    };
    var nonOutlineStyles = {
        'bg-brand-500 hover:bg-brand-600 active:bg-brand-700 text-white': !outline && variant === 'primary',
        'bg-gray-500 text-white hover:bg-gray-600 active:bg-gray-700': !outline && variant === 'secondary',
        'bg-yellow-500 text-white hover:bg-yellow-400 active:bg-yellow-700': !outline && variant === 'warning',
        'bg-black text-white hover:bg-gray-900 active:bg-black': !outline && variant === 'black',
        'bg-red-500 text-white hover:bg-red-400 active:bg-red-700': !outline && variant === 'danger'
    };
    var outlineStyles = {
        'text-brand hover:bg-brand-50 active:bg-brand-100': outline && variant === 'primary',
        'text-gray-500 hover:bg-gray-50 active:bg-gray-100': outline && variant === 'secondary',
        'text-yellow-500 hover:bg-yellow-50 active:bg-yellow-100': outline && variant === 'warning',
        'text-black hover:bg-gray-50 active:bg-black': outline && variant === 'black',
        'text-red-500 hover:bg-red-50 active:bg-red-100': outline && variant === 'danger'
    };
    var sizeStyles = {
        'px-3 py-0.5 text-sm': size === 'sm',
        'px-3 py-1': size === 'md',
        'px-4 py-1.5': size === 'lg'
    };
    return (React.createElement("button", __assign({ ref: ref, className: (0, cn_1.default)(__assign(__assign(__assign(__assign(__assign({}, commonStyles), nonOutlineStyles), outlineStyles), sizeStyles), { 'inline-flex items-center space-x-1.5': icon && children }), 'rounded-lg font-bold shadow-sm outline-none focus:ring-2 focus:ring-offset-1 disabled:opacity-50', className), type: rest.type }, rest),
        icon ? icon : null,
        React.createElement("div", null, children)));
});
