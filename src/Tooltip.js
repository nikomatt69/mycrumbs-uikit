"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tooltip = void 0;
var RadixTooltip = require("@radix-ui/react-tooltip");
require("tippy.js/dist/tippy.css");
var Tooltip = function (_a) {
    var children = _a.children, _b = _a.className, className = _b === void 0 ? '' : _b, content = _a.content, _c = _a.placement, placement = _c === void 0 ? 'right' : _c, _d = _a.withDelay, withDelay = _d === void 0 ? false : _d;
    return (React.createElement(RadixTooltip.Provider, { delayDuration: withDelay ? 400 : 0 },
        React.createElement(RadixTooltip.Root, null,
            React.createElement(RadixTooltip.Trigger, { asChild: true },
                React.createElement("span", null, children)),
            React.createElement(RadixTooltip.Portal, null,
                React.createElement(RadixTooltip.Content, { className: "z-10 hidden !rounded-lg bg-gray-700 px-3 py-0.5 !text-xs !leading-6 tracking-wide text-white sm:block", side: placement, sideOffset: 5 },
                    React.createElement("span", { className: className }, content),
                    React.createElement(RadixTooltip.Arrow, { className: "fill-gray-700" }))))));
};
exports.Tooltip = Tooltip;
