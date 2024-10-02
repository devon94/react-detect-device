"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useDeviceSelectors = exports.useDeviceData = exports.setUserAgent = exports.parseUserAgent = exports.BrowserTypes = exports.OsTypes = exports.deviceDetect = void 0;
var detect_1 = require("./lib/detect");
Object.defineProperty(exports, "deviceDetect", { enumerable: true, get: function () { return detect_1.deviceDetect; } });
var constants_1 = require("./constants/constants");
Object.defineProperty(exports, "OsTypes", { enumerable: true, get: function () { return constants_1.OsTypes; } });
Object.defineProperty(exports, "BrowserTypes", { enumerable: true, get: function () { return constants_1.BrowserTypes; } });
var parse_1 = require("./lib/parse");
Object.defineProperty(exports, "parseUserAgent", { enumerable: true, get: function () { return parse_1.parseUserAgent; } });
var utils_1 = require("./utils/utils");
Object.defineProperty(exports, "setUserAgent", { enumerable: true, get: function () { return utils_1.setUserAgent; } });
__exportStar(require("./components/views"), exports);
__exportStar(require("./hooks/useOrientationChange"), exports);
var useDeviceData_1 = require("./hooks/useDeviceData");
Object.defineProperty(exports, "useDeviceData", { enumerable: true, get: function () { return useDeviceData_1.useDeviceData; } });
var useDeviceSelectors_1 = require("./hooks/useDeviceSelectors");
Object.defineProperty(exports, "useDeviceSelectors", { enumerable: true, get: function () { return useDeviceSelectors_1.useDeviceSelectors; } });
__exportStar(require("./lib/selectors"), exports);
