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
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("next/router");
var cn_1 = require("../cn");
var TabButton = function (_a) {
    var name = _a.name, icon = _a.icon, active = _a.active, type = _a.type, count = _a.count, _b = _a.showOnSm, showOnSm = _b === void 0 ? false : _b, _c = _a.className, className = _c === void 0 ? '' : _c, onClick = _a.onClick;
    var router = (0, router_1.useRouter)();
    return (React.createElement("button", { type: "button", onClick: function () {
            if (type) {
                router.replace({ query: __assign(__assign({}, router.query), { type: type }) }, undefined, {
                    shallow: true
                });
            }
            onClick();
        }, className: (0, cn_1.default)({
            '!text-brand-500 dark:!text-brand-400/80 bg-brand-100 dark:bg-brand-300/20': active
        }, 'flex items-center space-x-2 rounded-lg px-4 py-2 text-sm font-medium text-gray-500 sm:px-3 sm:py-1.5', 'hover:bg-brand-100/80 hover:text-brand-400 dark:hover:bg-brand-300/30 justify-center', className), "aria-label": name },
        icon,
        React.createElement("span", { className: (0, cn_1.default)({ 'hidden sm:block': !showOnSm }) }, name),
        count ? (React.createElement("span", { className: (0, cn_1.default)(active
                ? 'bg-brand-500 dark:bg-brand-500/80 text-white dark:text-white'
                : 'bg-gray-200 text-gray-500 dark:bg-gray-700 dark:text-gray-400', 'ml-2 rounded-2xl px-2 py-0.5 text-xs font-bold') }, count)) : null));
};
exports.default = TabButton;
