'use client';
"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useMouseEnter = exports.CardItem = exports.CardBody = exports.CardContainer = void 0;
var cn_1 = require("../cn");
var react_1 = require("react");
var MouseEnterContext = (0, react_1.createContext)(undefined);
var CardContainer = function (_a) {
    var children = _a.children, className = _a.className, containerClassName = _a.containerClassName;
    var containerRef = (0, react_1.useRef)(null);
    var _b = (0, react_1.useState)(false), isMouseEntered = _b[0], setIsMouseEntered = _b[1];
    var handleMouseMove = function (e) {
        if (!containerRef.current) {
            return;
        }
        var _a = containerRef.current.getBoundingClientRect(), left = _a.left, top = _a.top, width = _a.width, height = _a.height;
        var x = (e.clientX - left - width / 2) / 25;
        var y = (e.clientY - top - height / 2) / 25;
        containerRef.current.style.transform = "rotateY(".concat(x, "deg) rotateX(").concat(y, "deg)");
    };
    var handleMouseEnter = function (e) {
        setIsMouseEntered(true);
        if (!containerRef.current) {
            return;
        }
    };
    var handleMouseLeave = function (e) {
        if (!containerRef.current) {
            return;
        }
        setIsMouseEntered(false);
        containerRef.current.style.transform = "rotateY(0deg) rotateX(0deg)";
    };
    return (react_1.default.createElement(MouseEnterContext.Provider, { value: [isMouseEntered, setIsMouseEntered] },
        react_1.default.createElement("div", { className: (0, cn_1.default)('items-center justify-center', containerClassName), style: {
                perspective: '1000px'
            } },
            react_1.default.createElement("div", { ref: containerRef, onMouseEnter: handleMouseEnter, onMouseMove: handleMouseMove, onMouseLeave: handleMouseLeave, className: (0, cn_1.default)('relative items-center justify-center transition-all duration-200 ease-linear', className), style: {
                    transformStyle: 'preserve-3d'
                } }, children))));
};
exports.CardContainer = CardContainer;
var CardBody = function (_a) {
    var children = _a.children, className = _a.className;
    return (react_1.default.createElement("div", { className: (0, cn_1.default)('[transform-style:preserve-3d]  [&>*]:[transform-style:preserve-3d]', className) }, children));
};
exports.CardBody = CardBody;
var CardItem = function (_a) {
    var _b = _a.as, Tag = _b === void 0 ? 'div' : _b, children = _a.children, className = _a.className, _c = _a.translateX, translateX = _c === void 0 ? 0 : _c, _d = _a.translateY, translateY = _d === void 0 ? 0 : _d, _e = _a.translateZ, translateZ = _e === void 0 ? 0 : _e, _f = _a.rotateX, rotateX = _f === void 0 ? 0 : _f, _g = _a.rotateY, rotateY = _g === void 0 ? 0 : _g, _h = _a.rotateZ, rotateZ = _h === void 0 ? 0 : _h, rest = __rest(_a, ["as", "children", "className", "translateX", "translateY", "translateZ", "rotateX", "rotateY", "rotateZ"]);
    var ref = (0, react_1.useRef)(null);
    var isMouseEntered = (0, exports.useMouseEnter)()[0];
    (0, react_1.useEffect)(function () {
        handleAnimations();
    }, [isMouseEntered]);
    var handleAnimations = function () {
        if (!ref.current) {
            return;
        }
        if (isMouseEntered) {
            ref.current.style.transform = "translateX(".concat(translateX, "px) translateY(").concat(translateY, "px) translateZ(").concat(translateZ, "px) rotateX(").concat(rotateX, "deg) rotateY(").concat(rotateY, "deg) rotateZ(").concat(rotateZ, "deg)");
        }
        else {
            ref.current.style.transform = "translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)";
        }
    };
    return (react_1.default.createElement(Tag, __assign({ ref: ref, className: (0, cn_1.default)('w-max-fit transition duration-200', className) }, rest), children));
};
exports.CardItem = CardItem;
// Create a hook to use the context
var useMouseEnter = function () {
    var context = (0, react_1.useContext)(MouseEnterContext);
    if (context === undefined) {
        throw new Error('useMouseEnter must be used within a MouseEnterProvider');
    }
    return context;
};
exports.useMouseEnter = useMouseEnter;
