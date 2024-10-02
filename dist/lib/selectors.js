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
exports.getSelectorsByUserAgent = exports.isSamsungBrowser = exports.isMIUI = exports.isMacOs = exports.isWindows = exports.isLegacyEdge = exports.isEdgeChromium = exports.isElectron = exports.isIPod13 = exports.isIPhone13 = exports.isIPad13 = exports.isIOS13 = exports.deviceType = exports.isYandex = exports.isEdge = exports.getUA = exports.engineVersion = exports.engineName = exports.mobileModel = exports.mobileVendor = exports.browserName = exports.browserVersion = exports.fullBrowserVersion = exports.osName = exports.osVersion = exports.isIE = exports.isOpera = exports.isSafari = exports.isFirefox = exports.isChrome = exports.isIOS = exports.isWinPhone = exports.isAndroid = exports.isDesktop = exports.isBrowser = exports.isTablet = exports.isMobileOnly = exports.isMobile = exports.isChromium = exports.isMobileSafari = exports.isEmbedded = exports.isWearable = exports.isConsole = exports.isSmartTV = void 0;
var UAHelpers = __importStar(require("..//lib/parse"));
var types = __importStar(require("..//lib/types"));
var buildSelectors_1 = require("..//lib/buildSelectors");
exports.isSmartTV = types.isSmartTVType(UAHelpers.device);
exports.isConsole = types.isConsoleType(UAHelpers.device);
exports.isWearable = types.isWearableType(UAHelpers.device);
exports.isEmbedded = types.isEmbeddedType(UAHelpers.device);
exports.isMobileSafari = types.isMobileSafariType(UAHelpers.browser) || types.getIPad13();
exports.isChromium = types.isChromiumType(UAHelpers.browser);
exports.isMobile = types.isMobileAndTabletType(UAHelpers.device) || types.getIPad13();
exports.isMobileOnly = types.isMobileType(UAHelpers.device);
exports.isTablet = types.isTabletType(UAHelpers.device) || types.getIPad13();
exports.isBrowser = types.isBrowserType(UAHelpers.device);
exports.isDesktop = types.isBrowserType(UAHelpers.device);
exports.isAndroid = types.isAndroidType(UAHelpers.os);
exports.isWinPhone = types.isWinPhoneType(UAHelpers.os);
exports.isIOS = types.isIOSType(UAHelpers.os) || types.getIPad13();
exports.isChrome = types.isChromeType(UAHelpers.browser);
exports.isFirefox = types.isFirefoxType(UAHelpers.browser);
exports.isSafari = types.isSafariType(UAHelpers.browser);
exports.isOpera = types.isOperaType(UAHelpers.browser);
exports.isIE = types.isIEType(UAHelpers.browser);
exports.osVersion = types.getOsVersion(UAHelpers.os);
exports.osName = types.getOsName(UAHelpers.os);
exports.fullBrowserVersion = types.getBrowserFullVersion(UAHelpers.browser);
exports.browserVersion = types.getBrowserVersion(UAHelpers.browser);
exports.browserName = types.getBrowserName(UAHelpers.browser);
exports.mobileVendor = types.getMobileVendor(UAHelpers.device);
exports.mobileModel = types.getMobileModel(UAHelpers.device);
exports.engineName = types.getEngineName(UAHelpers.engine);
exports.engineVersion = types.getEngineVersion(UAHelpers.engine);
exports.getUA = types.getUserAgent(UAHelpers.ua);
exports.isEdge = types.isEdgeType(UAHelpers.browser) || types.isEdgeChromiumType(UAHelpers.ua);
exports.isYandex = types.isYandexType(UAHelpers.browser);
exports.deviceType = types.getDeviceType(UAHelpers.device);
exports.isIOS13 = types.getIOS13();
exports.isIPad13 = types.getIPad13();
exports.isIPhone13 = types.getIphone13();
exports.isIPod13 = types.getIPod13();
exports.isElectron = types.isElectronType();
exports.isEdgeChromium = types.isEdgeChromiumType(UAHelpers.ua);
exports.isLegacyEdge = types.isEdgeType(UAHelpers.browser) &&
    !types.isEdgeChromiumType(UAHelpers.ua);
exports.isWindows = types.isWindowsType(UAHelpers.os);
exports.isMacOs = types.isMacOsType(UAHelpers.os);
exports.isMIUI = types.isMIUIType(UAHelpers.browser);
exports.isSamsungBrowser = types.isSamsungBrowserType(UAHelpers.browser);
var getSelectorsByUserAgent = function (uastring) {
    if (!uastring || typeof uastring !== "string") {
        console.error("No valid user agent string was provided");
        return;
    }
    var uaOptions = UAHelpers.parseUserAgent(uastring);
    if (!uaOptions) {
        console.error("No valid user agent string was provided");
        return;
    }
    return (0, buildSelectors_1.buildSelectorsObject)(uaOptions);
};
exports.getSelectorsByUserAgent = getSelectorsByUserAgent;
