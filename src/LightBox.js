"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LightBox = void 0;
var constants_1 = require("@lensshare/data/constants");
var Modal_1 = require("./Modal");
var LightBox = function (_a) {
    var onClose = _a.onClose, show = _a.show, url = _a.url;
    return (React.createElement(Modal_1.Modal, { onClose: onClose, show: show },
        React.createElement("img", { alt: url || '', className: "max-h-screen rounded-xl", height: 1000, onClick: onClose, src: url || constants_1.PLACEHOLDER_IMAGE, width: 1000 })));
};
exports.LightBox = LightBox;
