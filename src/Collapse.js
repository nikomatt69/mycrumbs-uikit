"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var Collapsible = require("@radix-ui/react-collapsible");
var react_icons_1 = require("@radix-ui/react-icons");
var CollapsibleDemo = function () {
    var _a = react_1.default.useState(false), open = _a[0], setOpen = _a[1];
    return (react_1.default.createElement(Collapsible.Root, { className: "w-[300px]", open: open, onOpenChange: setOpen },
        react_1.default.createElement("div", { style: {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
            } },
            react_1.default.createElement("span", { className: "text-violet11 text-[15px] leading-[25px]", style: { color: 'white' } }, "@peduarte starred 3 repositories"),
            react_1.default.createElement(Collapsible.Trigger, { asChild: true },
                react_1.default.createElement("button", { className: "text-violet11 shadow-blackA4 data-[state=open]:bg-violet3 hover:bg-violet3 inline-flex h-[25px] w-[25px] items-center justify-center rounded-full shadow-[0_2px_10px] outline-none focus:shadow-[0_0_0_2px] focus:shadow-black data-[state=closed]:bg-white" }, open ? react_1.default.createElement(react_icons_1.Cross2Icon, null) : react_1.default.createElement(react_icons_1.RowSpacingIcon, null)))),
        react_1.default.createElement("div", { className: "shadow-blackA4 my-[10px] rounded bg-white p-[10px] shadow-[0_2px_10px]" },
            react_1.default.createElement("span", { className: "text-violet11 text-[15px] leading-[25px]" }, "@radix-ui/primitives")),
        react_1.default.createElement(Collapsible.Content, null,
            react_1.default.createElement("div", { className: "shadow-blackA4 my-[10px] rounded bg-white p-[10px] shadow-[0_2px_10px]" },
                react_1.default.createElement("span", { className: "text-violet11 text-[15px] leading-[25px]" }, "@radix-ui/colors")),
            react_1.default.createElement("div", { className: "shadow-blackA4 my-[10px] rounded bg-white p-[10px] shadow-[0_2px_10px]" },
                react_1.default.createElement("span", { className: "text-violet11 text-[15px] leading-[25px]" }, "@stitches/react")))));
};
exports.default = CollapsibleDemo;
