"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Toggle = void 0;
var react_1 = require("@headlessui/react");
var cn_1 = require("../cn");
var Toggle = function (_a) {
    var on = _a.on, setOn = _a.setOn;
    return (React.createElement(react_1.Switch, { checked: on, onChange: function () {
            setOn(!on);
        }, className: (0, cn_1.default)(on ? 'bg-brand-500' : 'bg-gray-200 dark:bg-gray-700', 'inline-flex h-[22px] w-[42.5px] min-w-[42.5px] cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none') },
        React.createElement("span", { "aria-hidden": "true", className: (0, cn_1.default)(on ? 'translate-x-5' : 'translate-x-0', 'pointer-events-none inline-block h-[18px] w-[18px] rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out') })));
};
exports.Toggle = Toggle;
