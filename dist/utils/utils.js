"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isIOS13Check = exports.getNavigatorInstance = exports.setUserAgent = exports.getCurrentBrowser = exports.checkDeviceType = void 0;
exports.setDefaults = setDefaults;
var constants_1 = require("@devon94/react-detect-device/constants/constants");
var parse_1 = require("@devon94/react-detect-device/lib/parse");
var checkDeviceType = function (type) {
    switch (type) {
        case constants_1.Devices.Mobile:
            return { isMobile: true };
        case constants_1.Devices.Tablet:
            return { isTablet: true };
        case constants_1.Devices.SmartTv:
            return { isSmartTV: true };
        case constants_1.Devices.Console:
            return { isConsole: true };
        case constants_1.Devices.Wearable:
            return { isWearable: true };
        case constants_1.Devices.Browser:
            return { isBrowser: true };
        case constants_1.Devices.Embedded:
            return { isEmbedded: true };
        default:
            return constants_1.InitialDeviceTypes;
    }
};
exports.checkDeviceType = checkDeviceType;
var getCurrentBrowser = function (name) {
    switch (name) {
        case constants_1.BrowserTypes.Chrome:
        case constants_1.BrowserTypes.Opera:
        case constants_1.BrowserTypes.Firefox:
        case constants_1.BrowserTypes.Yandex:
        case constants_1.BrowserTypes.Safari:
        case constants_1.BrowserTypes.Ie:
        case constants_1.BrowserTypes.Edge:
        case constants_1.BrowserTypes.Chromium:
            return true;
        default:
            return false;
    }
};
exports.getCurrentBrowser = getCurrentBrowser;
var setUserAgent = function (uastring) { return (0, parse_1.setUa)(uastring); };
exports.setUserAgent = setUserAgent;
function setDefaults(p, d) {
    if (d === void 0) { d = "none"; }
    return p ? p : d;
}
var getNavigatorInstance = function () {
    if (typeof window !== "undefined") {
        if (window.navigator || navigator) {
            return window.navigator || navigator;
        }
    }
    return false;
};
exports.getNavigatorInstance = getNavigatorInstance;
var isIOS13Check = function (type) {
    var nav = (0, exports.getNavigatorInstance)();
    return (nav &&
        nav.platform &&
        (nav.platform.indexOf(type) !== -1 ||
            (nav.platform === "MacIntel" &&
                nav.maxTouchPoints > 1 &&
                // @ts-ignore
                !window.MSStream)));
};
exports.isIOS13Check = isIOS13Check;
