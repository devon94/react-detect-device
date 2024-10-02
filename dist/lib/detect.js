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
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deviceDetect = deviceDetect;
var UAHelper = __importStar(require("@devon94/react-detect-device/lib/parse"));
var create = __importStar(require("@devon94/react-detect-device/utils/payloads"));
var utils_1 = require("@devon94/react-detect-device/utils/utils");
function deviceDetect(uastring) {
    var uaOptions = uastring ? UAHelper.parseUserAgent(uastring) : UAHelper;
    if (!uaOptions) {
        console.error("No userAgent string was provided");
        return null;
    }
    var device = uaOptions.device, browser = uaOptions.browser, engine = uaOptions.engine, os = uaOptions.os, ua = uaOptions.ua;
    var type = (0, utils_1.checkDeviceType)(device.type);
    var isBrowser = type.isBrowser, isMobile = type.isMobile, isTablet = type.isTablet, isSmartTV = type.isSmartTV, isConsole = type.isConsole, isWearable = type.isWearable, isEmbedded = type.isEmbedded;
    if (isBrowser) {
        return create.browserPayload(isBrowser, browser, engine, os, ua);
    }
    if (isSmartTV) {
        return create.smartTvPayload(isSmartTV, engine, os, ua);
    }
    if (isConsole) {
        return create.consolePayload(isConsole, engine, os, ua);
    }
    if (isMobile) {
        return create.mobilePayload(type, device, os, ua);
    }
    if (isTablet) {
        return create.mobilePayload(type, device, os, ua);
    }
    if (isWearable) {
        return create.wearablePayload(isWearable, engine, os, ua);
    }
    if (isEmbedded) {
        return create.embeddedPayload(isEmbedded, device, engine, os, ua);
    }
}
