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
exports.buildSelectorsObject = buildSelectorsObject;
var UAHelper = __importStar(require("./parse"));
var types = __importStar(require("./types"));
function buildSelectorsObject(options) {
    var _a = options ? options : UAHelper, device = _a.device, browser = _a.browser, os = _a.os, engine = _a.engine, ua = _a.ua;
    return {
        isSmartTV: types.isSmartTVType(device),
        isConsole: types.isConsoleType(device),
        isWearable: types.isWearableType(device),
        isEmbedded: types.isEmbeddedType(device),
        isMobileSafari: types.isMobileSafariType(browser) || types.getIPad13(),
        isChromium: types.isChromiumType(browser),
        isMobile: types.isMobileAndTabletType(device) || types.getIPad13(),
        isMobileOnly: types.isMobileType(device),
        isTablet: types.isTabletType(device) || types.getIPad13(),
        isBrowser: types.isBrowserType(device),
        isDesktop: types.isBrowserType(device),
        isAndroid: types.isAndroidType(os),
        isWinPhone: types.isWinPhoneType(os),
        isIOS: types.isIOSType(os) || types.getIPad13(),
        isChrome: types.isChromeType(browser),
        isFirefox: types.isFirefoxType(browser),
        isSafari: types.isSafariType(browser),
        isOpera: types.isOperaType(browser),
        isIE: types.isIEType(browser),
        osVersion: types.getOsVersion(os),
        osName: types.getOsName(os),
        fullBrowserVersion: types.getBrowserFullVersion(browser),
        browserVersion: types.getBrowserVersion(browser),
        browserName: types.getBrowserName(browser),
        mobileVendor: types.getMobileVendor(device),
        mobileModel: types.getMobileModel(device),
        engineName: types.getEngineName(engine),
        engineVersion: types.getEngineVersion(engine),
        getUA: types.getUserAgent(ua),
        isEdge: types.isEdgeType(browser) || types.isEdgeChromiumType(ua),
        isYandex: types.isYandexType(browser),
        deviceType: types.getDeviceType(device),
        isIOS13: types.getIOS13(),
        isIPad13: types.getIPad13(),
        isIPhone13: types.getIphone13(),
        isIPod13: types.getIPod13(),
        isElectron: types.isElectronType(),
        isEdgeChromium: types.isEdgeChromiumType(ua),
        isLegacyEdge: types.isEdgeType(browser) && !types.isEdgeChromiumType(ua),
        isWindows: types.isWindowsType(os),
        isMacOs: types.isMacOsType(os),
        isMIUI: types.isMIUIType(browser),
        isSamsungBrowser: types.isSamsungBrowserType(browser),
    };
}
