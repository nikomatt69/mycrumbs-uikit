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
exports.Image = void 0;
var constants_1 = require("@lensshare/data/constants");
var react_1 = require("react");
exports.Image = (0, react_1.forwardRef)(function Image(_a, ref) {
    var onError = _a.onError, props = __rest(_a, ["onError"]);
    var _b = (0, react_1.useState)(false), imageLoadFailed = _b[0], setImageLoadFailed = _b[1];
    var handleError = (0, react_1.useCallback)(function (e) {
        if (imageLoadFailed) {
            return;
        }
        setImageLoadFailed(true);
        if (onError) {
            onError(e);
        }
    }, [imageLoadFailed, setImageLoadFailed, onError]);
    (0, react_1.useEffect)(function () {
        setImageLoadFailed(false);
    }, [props.src]);
    return (React.createElement("img", __assign({}, props, { src: imageLoadFailed ? constants_1.PLACEHOLDER_IMAGE : props.src, onError: handleError, alt: props.alt || '', ref: ref })));
});
