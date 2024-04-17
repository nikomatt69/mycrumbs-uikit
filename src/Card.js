"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Card = void 0;
var cn_1 = require("../cn");
var Card = function (_a) {
    var children = _a.children, _b = _a.as, Tag = _b === void 0 ? 'div' : _b, _c = _a.className, className = _c === void 0 ? '' : _c, _d = _a.forceRounded, forceRounded = _d === void 0 ? false : _d, onClick = _a.onClick;
    return (React.createElement(Tag, { className: (0, cn_1.default)(forceRounded ? 'rounded-xl' : 'rounded-xl sm:rounded-xl', 'rounded-xl border bg-white dark:border-gray-700 dark:bg-gray-900/90 ', className), onClick: onClick }, children));
};
exports.Card = Card;
