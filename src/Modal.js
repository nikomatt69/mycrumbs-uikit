"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Modal = void 0;
var react_1 = require("@headlessui/react");
var outline_1 = require("@heroicons/react/24/outline");
var react_2 = require("react");
var cn_1 = require("../cn");
var Modal = function (_a) {
    var icon = _a.icon, title = _a.title, _b = _a.size, size = _b === void 0 ? 'sm' : _b, show = _a.show, children = _a.children, onClose = _a.onClose;
    return (React.createElement(react_1.Transition.Root, { show: show, as: react_2.Fragment },
        React.createElement(react_1.Dialog, { as: "div", className: "fixed inset-0 z-10 overflow-y-auto", onClose: function () { return onClose === null || onClose === void 0 ? void 0 : onClose(); } },
            React.createElement("div", { className: "flex min-h-screen items-center justify-center p-4 text-center sm:block sm:p-0" },
                React.createElement(react_1.Transition.Child, { as: react_2.Fragment, enter: "ease-out duration-100", enterFrom: "opacity-0", enterTo: "opacity-100", leave: "ease-in duration-100", leaveFrom: "opacity-100", leaveTo: "opacity-0" },
                    React.createElement(react_1.Dialog.Overlay, { className: "fixed inset-0 bg-gray-500/75 transition-opacity dark:bg-gray-900/80" })),
                React.createElement("span", { className: "hidden sm:inline-block sm:h-screen sm:align-middle", "aria-hidden": "true" }),
                React.createElement(react_1.Transition.Child, { as: react_2.Fragment, enter: "ease-out duration-100", enterFrom: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95", enterTo: "opacity-100 translate-y-0 sm:scale-100", leave: "ease-in duration-100", leaveFrom: "opacity-100 translate-y-0 sm:scale-100", leaveTo: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" },
                    React.createElement("div", { className: (0, cn_1.default)({ 'sm:max-w-5xl': size === 'lg' }, { 'sm:max-w-3xl': size === 'md' }, { 'sm:max-w-lg': size === 'sm' }, { 'sm:max-w-sm': size === 'xs' }, 'inline-block w-full scale-100 rounded-xl bg-white text-left align-bottom shadow-xl transition-all dark:bg-gray-800 sm:my-8 sm:align-middle') },
                        title ? (React.createElement("div", { className: "divider flex items-center justify-between px-5 py-3.5" },
                            React.createElement("div", { className: "flex items-center space-x-2 font-bold" },
                                icon,
                                React.createElement("div", null, title)),
                            onClose ? (React.createElement("button", { type: "button", className: "rounded-full p-1 text-gray-800 hover:bg-gray-200 dark:text-gray-100 dark:hover:bg-gray-700", onClick: onClose },
                                React.createElement(outline_1.XMarkIcon, { className: "h-5 w-5" }))) : null)) : null,
                        children))))));
};
exports.Modal = Modal;
