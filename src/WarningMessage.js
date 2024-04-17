"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WarningMessage = void 0;
var cn_1 = require("../cn");
var WarningMessage = function (_a) {
    var title = _a.title, message = _a.message, _b = _a.className, className = _b === void 0 ? '' : _b;
    if (!message) {
        return null;
    }
    return (React.createElement("div", { className: (0, cn_1.default)('space-y-1 rounded-xl border-2 border-yellow-500/50 bg-yellow-50 p-4 dark:bg-yellow-900/10', className) },
        title ? (React.createElement("h3", { className: "text-sm font-medium text-yellow-800 dark:text-yellow-200" }, title)) : null,
        React.createElement("div", { className: "text-sm text-yellow-700 dark:text-yellow-200" }, message)));
};
exports.WarningMessage = WarningMessage;
