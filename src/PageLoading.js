"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PageLoading = void 0;
var Spinner_1 = require("../src/Spinner");
var PageLoading = function (_a) {
    var message = _a.message;
    return (React.createElement("div", { className: "flex h-full grow items-center justify-center" },
        React.createElement("div", { className: "space-y-3" },
            React.createElement(Spinner_1.Spinner, { className: "mx-auto" }),
            React.createElement("div", null, message))));
};
exports.PageLoading = PageLoading;
