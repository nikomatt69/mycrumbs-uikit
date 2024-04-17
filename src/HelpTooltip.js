"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("tippy.js/dist/tippy.css");
var outline_1 = require("@heroicons/react/24/outline");
var react_1 = require("@tippyjs/react");
var HelpTooltip = function (_a) {
    var children = _a.children;
    if (!children) {
        return null;
    }
    return (React.createElement(react_1.default, { placement: "top", duration: 0, className: "!rounded-xl p-2.5 !leading-5 tracking-wide shadow-lg", content: React.createElement("span", null, children) },
        React.createElement("span", null,
            React.createElement(outline_1.InformationCircleIcon, { className: "lt-text-gray-500 h-[15px] w-[15px]" }))));
};
exports.default = HelpTooltip;
