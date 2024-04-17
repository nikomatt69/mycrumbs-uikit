"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorMessage = void 0;
var ErrorMessage = function (_a) {
    var title = _a.title, error = _a.error, _b = _a.className, className = _b === void 0 ? '' : _b;
    if (!error) {
        return null;
    }
    return (React.createElement("div", { className: "space-y-1 rounded-xl border-2 border-red-500/50 bg-red-50 p-4 dark:bg-red-900/10 ".concat(className) },
        title ? (React.createElement("h3", { className: "text-sm font-medium text-red-800 dark:text-red-200" }, title)) : null,
        React.createElement("div", { className: "text-sm text-red-700 dark:text-red-200" }, error === null || error === void 0 ? void 0 : error.message)));
};
exports.ErrorMessage = ErrorMessage;
