"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Spinner = void 0;
var cn_1 = require("../cn");
var Spinner = function (_a) {
    var _b = _a.className, className = _b === void 0 ? '' : _b, _c = _a.variant, variant = _c === void 0 ? 'primary' : _c, _d = _a.size, size = _d === void 0 ? 'md' : _d;
    return (React.createElement("div", { className: (0, cn_1.default)({
            'border-brand-200 border-t-brand-600': variant === 'primary',
            'border-gray-200 border-t-gray-600': variant === 'secondary',
            'border-green-200 border-t-green-600': variant === 'success',
            'border-yellow-200 border-t-yellow-600': variant === 'warning',
            'border-red-200 border-t-red-600': variant === 'danger',
            'h-4 w-4 border-[2px]': size === 'xs',
            'h-5 w-5 border-2': size === 'sm',
            'h-8 w-8 border-[3px]': size === 'md',
            'h-10 w-10 border-4': size === 'lg'
        }, 'animate-spin rounded-full', className) }));
};
exports.Spinner = Spinner;
