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
Object.defineProperty(exports, "__esModule", { value: true });
exports.embeddedPayload = exports.wearablePayload = exports.consolePayload = exports.smartTvPayload = exports.mobilePayload = exports.browserPayload = void 0;
var utils_1 = require("./utils");
var browserPayload = function (isBrowser, browser, engine, os, ua) { return ({
    isBrowser: isBrowser,
    browserMajorVersion: (0, utils_1.setDefaults)(browser.major),
    browserFullVersion: (0, utils_1.setDefaults)(browser.version),
    browserName: (0, utils_1.setDefaults)(browser.name),
    engineName: (0, utils_1.setDefaults)(engine.name),
    engineVersion: (0, utils_1.setDefaults)(engine.version),
    osName: (0, utils_1.setDefaults)(os.name),
    osVersion: (0, utils_1.setDefaults)(os.version),
    userAgent: (0, utils_1.setDefaults)(ua),
}); };
exports.browserPayload = browserPayload;
var mobilePayload = function (type, device, os, ua) { return (__assign(__assign({}, type), { vendor: (0, utils_1.setDefaults)(device.vendor), model: (0, utils_1.setDefaults)(device.model), os: (0, utils_1.setDefaults)(os.name), osVersion: (0, utils_1.setDefaults)(os.version), ua: (0, utils_1.setDefaults)(ua) })); };
exports.mobilePayload = mobilePayload;
var smartTvPayload = function (isSmartTV, engine, os, ua) { return ({
    isSmartTV: isSmartTV,
    engineName: (0, utils_1.setDefaults)(engine.name),
    engineVersion: (0, utils_1.setDefaults)(engine.version),
    osName: (0, utils_1.setDefaults)(os.name),
    osVersion: (0, utils_1.setDefaults)(os.version),
    userAgent: (0, utils_1.setDefaults)(ua),
}); };
exports.smartTvPayload = smartTvPayload;
var consolePayload = function (isConsole, engine, os, ua) { return ({
    isConsole: isConsole,
    engineName: (0, utils_1.setDefaults)(engine.name),
    engineVersion: (0, utils_1.setDefaults)(engine.version),
    osName: (0, utils_1.setDefaults)(os.name),
    osVersion: (0, utils_1.setDefaults)(os.version),
    userAgent: (0, utils_1.setDefaults)(ua),
}); };
exports.consolePayload = consolePayload;
var wearablePayload = function (isWearable, engine, os, ua) { return ({
    isWearable: isWearable,
    engineName: (0, utils_1.setDefaults)(engine.name),
    engineVersion: (0, utils_1.setDefaults)(engine.version),
    osName: (0, utils_1.setDefaults)(os.name),
    osVersion: (0, utils_1.setDefaults)(os.version),
    userAgent: (0, utils_1.setDefaults)(ua),
}); };
exports.wearablePayload = wearablePayload;
var embeddedPayload = function (isEmbedded, device, engine, os, ua) { return ({
    isEmbedded: isEmbedded,
    vendor: (0, utils_1.setDefaults)(device.vendor),
    model: (0, utils_1.setDefaults)(device.model),
    engineName: (0, utils_1.setDefaults)(engine.name),
    engineVersion: (0, utils_1.setDefaults)(engine.version),
    osName: (0, utils_1.setDefaults)(os.name),
    osVersion: (0, utils_1.setDefaults)(os.version),
    userAgent: (0, utils_1.setDefaults)(ua),
}); };
exports.embeddedPayload = embeddedPayload;
