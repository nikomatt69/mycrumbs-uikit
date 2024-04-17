"use strict";
/*
We're constantly improving the code you see.
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.AirpodsProRight = void 0;
var prop_types_1 = require("prop-types");
var react_1 = require("react");
var AirpodsProRight = function (_a) {
    var className = _a.className, overlapGroupClassName = _a.overlapGroupClassName, ellipseClassName = _a.ellipseClassName, _b = _a.ellipse, ellipse = _b === void 0 ? "/img/ellipse-5-4.svg" : _b;
    return (react_1.default.createElement("div", { className: "w-[22px] h-[22px] ".concat(className) },
        react_1.default.createElement("div", { className: "relative w-[18px] h-[18px] top-[2px] left-[2px]" },
            react_1.default.createElement("div", { className: "relative w-[20px] h-[20px] -top-px -left-px bg-[url(/static/img/ellipse-6-4.svg)] bg-[100%_100%] ".concat(overlapGroupClassName) },
                react_1.default.createElement("img", { className: "absolute w-[20px] h-[20px] top-0 left-0 ".concat(ellipseClassName), alt: "Ellipse", src: ellipse })))));
};
exports.AirpodsProRight = AirpodsProRight;
exports.AirpodsProRight.propTypes = {
    ellipse: prop_types_1.default.string,
};
