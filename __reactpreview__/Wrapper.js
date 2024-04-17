"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Wrapper = void 0;
var react_1 = require("react");
// You can import global CSS files here.
// No-op wrapper.
var Wrapper = function (_a) {
    var children = _a.children;
    return react_1.default.createElement(react_1.default.Fragment, null, children);
};
exports.Wrapper = Wrapper;
