"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeyPopover = void 0;
var outline_1 = require("@heroicons/react/24/outline");
var Popover = require("@radix-ui/react-popover");
var react_1 = require("react");
var HeyPopover = function (_a) {
    var arrow = _a.arrow, children = _a.children, close = _a.close, content = _a.content;
    return (react_1.default.createElement(Popover.Root, null,
        react_1.default.createElement(Popover.Trigger, { asChild: true }, content),
        react_1.default.createElement(Popover.Portal, null,
            react_1.default.createElement(Popover.Content, { className: "PopoverContent", sideOffset: 5 },
                children,
                close && (react_1.default.createElement(Popover.Close, { "aria-label": "Close", className: "PopoverClose" },
                    react_1.default.createElement(outline_1.XMarkIcon, null))),
                arrow && react_1.default.createElement(Popover.Arrow, { className: "PopoverArrow" })))));
};
exports.HeyPopover = HeyPopover;
