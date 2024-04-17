"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Toggle2 = void 0;
var react_1 = require("@headlessui/react");
var cn_1 = require("../cn");
var Toggle2 = function (_a) {
    var _b = _a.disabled, disabled = _b === void 0 ? false : _b, on = _a.on, setOn = _a.setOn;
    return (React.createElement(react_1.Switch, { checked: on, className: (0, cn_1.default)(on ? 'bg-brand-500' : 'bg-gray-200 dark:bg-gray-700', disabled && 'cursor-not-allowed opacity-50', 'outline-brand-500 inline-flex h-[22px] w-[42.5px] min-w-[42.5px] rounded-full border-2 border-transparent outline-offset-4 transition-colors duration-200 ease-in-out'), disabled: disabled, onChange: function () {
            setOn(!on);
        } },
        React.createElement("span", { className: (0, cn_1.default)(on ? 'translate-x-5' : 'translate-x-0', 'pointer-events-none inline-block h-[18px] w-[18px] rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out') })));
};
exports.Toggle2 = Toggle2;
