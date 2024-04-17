"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmptyState = void 0;
var Card_1 = require("./Card");
var EmptyState = function (_a) {
    var message = _a.message, icon = _a.icon, _b = _a.hideCard, hideCard = _b === void 0 ? false : _b;
    return (React.createElement(Card_1.Card, { className: hideCard ? 'border-0 !bg-transparent !shadow-none' : '', forceRounded: true },
        React.createElement("div", { className: "grid justify-items-center space-y-2 p-5" },
            React.createElement("div", null, icon),
            React.createElement("div", null, message))));
};
exports.EmptyState = EmptyState;
