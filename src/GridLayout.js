"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GridItemEight = exports.GridItemFour = exports.GridLayout = void 0;
var cn_1 = require("../cn");
var GridLayout = function (_a) {
    var children = _a.children, _b = _a.className, className = _b === void 0 ? '' : _b, _c = _a.classNameChild, classNameChild = _c === void 0 ? '' : _c;
    return (React.createElement("div", { className: (0, cn_1.default)('container mx-auto mt-10 max-w-screen-xl grow px-0 pb-2 pt-8 sm:px-5', className) },
        React.createElement("div", { className: (0, cn_1.default)('grid grid-cols-12 lg:gap-8', classNameChild) }, children)));
};
exports.GridLayout = GridLayout;
var GridItemFour = function (_a) {
    var children = _a.children, _b = _a.className, className = _b === void 0 ? '' : _b;
    return (React.createElement("div", { className: (0, cn_1.default)('col-span-12 md:col-span-12 lg:col-span-4', className) }, children));
};
exports.GridItemFour = GridItemFour;
var GridItemEight = function (_a) {
    var children = _a.children, _b = _a.className, className = _b === void 0 ? '' : _b;
    return (React.createElement("div", { className: (0, cn_1.default)('col-span-12 mb-5 md:col-span-12 lg:col-span-8', className) }, children));
};
exports.GridItemEight = GridItemEight;
