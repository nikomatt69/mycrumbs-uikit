"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DynamicIsland = void 0;
var React = require("react");
var next_themes_1 = require("next-themes");
var hooks_1 = require("@huddle01/react/hooks");
var react_1 = require("react");
var link_1 = require("next/link");
var DynamicIsland = function () {
    var _a = (0, react_1.useState)(''), meetingUrl = _a[0], setMeetingUrl = _a[1];
    var peers = (0, hooks_1.usePeers)().peers;
    var me = (0, hooks_1.useHuddle01)().me;
    var resolvedTheme = (0, next_themes_1.useTheme)().resolvedTheme;
    var _b = (0, hooks_1.useAudio)(), produceAudio = _b.produceAudio, stopProducingAudio = _b.stopProducingAudio, micStream = _b.stream, fetchAudioStream = _b.fetchAudioStream, stopAudioStream = _b.stopAudioStream;
    var currentUrl = window.location.href;
    React.useEffect(function () {
        setMeetingUrl(currentUrl);
    }, [meetingUrl]);
    return (React.createElement("div", { className: "h-max-15 max-w-100 relative top-3 left-auto z-[100] mx-auto flex items-stretch justify-center gap-5 overflow-auto rounded-3xl bg-black/80 p-4 shadow-2xl" },
        React.createElement("div", { className: "h-max-15 flex items-stretch  justify-between gap-2" },
            React.createElement("div", { className: "mt-1flex grow basis-[0%] flex-col items-stretch self-start" },
                React.createElement("div", { className: "text-sm leading-5 text-neutral-500" }, "CurrentCall"),
                React.createElement("div", { className: "mt-0.5 whitespace-nowrap text-xs leading-5 text-white" },
                    React.createElement(link_1.default, { href: meetingUrl }, meetingUrl))))));
};
exports.DynamicIsland = DynamicIsland;
