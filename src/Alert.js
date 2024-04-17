"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Alert = void 0;
var react_1 = require("@headlessui/react");
var react_2 = require("react");
var Button_1 = require("./Button");
var Alert = function (_a) {
    var title = _a.title, description = _a.description, show = _a.show, _b = _a.isDestructive, isDestructive = _b === void 0 ? false : _b, _c = _a.isPerformingAction, isPerformingAction = _c === void 0 ? false : _c, confirmText = _a.confirmText, children = _a.children, onConfirm = _a.onConfirm, onClose = _a.onClose;
    return (React.createElement(react_1.Transition.Root, { show: show, as: react_2.Fragment },
        React.createElement(react_1.Dialog, { as: "div", className: "fixed inset-0 z-10 overflow-y-auto", onClose: function () { return onClose === null || onClose === void 0 ? void 0 : onClose(); } },
            React.createElement("div", { className: "flex min-h-screen items-center justify-center p-4 text-center sm:block sm:p-0" },
                React.createElement(react_1.Transition.Child, { as: react_2.Fragment, enter: "ease-out duration-100", enterFrom: "opacity-0", enterTo: "opacity-100", leave: "ease-in duration-100", leaveFrom: "opacity-100", leaveTo: "opacity-0" },
                    React.createElement(react_1.Dialog.Overlay, { className: "fixed inset-0 bg-gray-500/75 transition-opacity dark:bg-gray-900/80" })),
                React.createElement("span", { className: "hidden sm:inline-block sm:h-screen sm:align-middle", "aria-hidden": "true" }),
                React.createElement(react_1.Transition.Child, { as: react_2.Fragment, enter: "ease-out duration-100", enterFrom: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95", enterTo: "opacity-100 translate-y-0 sm:scale-100", leave: "ease-in duration-100", leaveFrom: "opacity-100 translate-y-0 sm:scale-100", leaveTo: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" },
                    React.createElement("div", { className: "inline-block w-full scale-100 space-y-6 rounded-xl bg-white p-5 text-left align-bottom shadow-xl transition-all dark:bg-gray-800 sm:max-w-sm sm:align-middle" },
                        React.createElement("div", { className: "space-y-2" },
                            React.createElement("b", { className: "text-xl" }, title),
                            React.createElement("p", null, description)),
                        React.createElement("div", null, children),
                        React.createElement("div", { className: "space-y-3" },
                            onConfirm ? (React.createElement(Button_1.Button, { className: "w-full", size: "lg", variant: isDestructive ? 'danger' : 'primary', disabled: isPerformingAction, onClick: function () { return onConfirm(); } }, confirmText)) : null,
                            React.createElement(Button_1.Button, { className: "w-full", size: "lg", variant: "secondary", outline: true, onClick: onClose }, "Cancel"))))))));
};
exports.Alert = Alert;
