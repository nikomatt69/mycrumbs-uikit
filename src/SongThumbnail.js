"use strict";
/*
We're constantly improving the code you see.
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.SongThumbnail = void 0;
var react_1 = require("react");
var SongThumbnail = function (_a) {
    var className = _a.className;
    return (react_1.default.createElement("div", { className: "w-[65px] h-[65px] rounded-[16px] bg-[url(/static/img/song-thumbnail.png)] bg-cover bg-[50%_50%] ".concat(className) }));
};
exports.SongThumbnail = SongThumbnail;
