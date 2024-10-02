"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserAgent = exports.getIPod13 = exports.getIphone13 = exports.getIPad13 = exports.getIOS13 = exports.isEdgeChromiumType = exports.isElectronType = exports.getEngineVersion = exports.getEngineName = exports.getBrowserName = exports.getBrowserVersion = exports.getBrowserFullVersion = exports.isSamsungBrowserType = exports.isMIUIType = exports.isIEType = exports.isOperaType = exports.isMobileSafariType = exports.isSafariType = exports.isYandexType = exports.isEdgeType = exports.isChromiumType = exports.isFirefoxType = exports.isChromeType = exports.getOsName = exports.getOsVersion = exports.isIOSType = exports.isWinPhoneType = exports.isMacOsType = exports.isWindowsType = exports.isAndroidType = exports.getDeviceType = exports.getMobileModel = exports.getMobileVendor = exports.isEmbeddedType = exports.isConsoleType = exports.isWearableType = exports.isBrowserType = exports.isSmartTVType = exports.isMobileAndTabletType = exports.isTabletType = exports.isMobileType = void 0;
var constants_1 = require("@devon94/react-detect-device/constants/constants");
var utils_1 = require("@devon94/react-detect-device/utils/utils");
// device types
var isMobileType = function (device) {
    return (device === null || device === void 0 ? void 0 : device.type) === constants_1.Devices.Mobile;
};
exports.isMobileType = isMobileType;
var isTabletType = function (device) {
    return (device === null || device === void 0 ? void 0 : device.type) === constants_1.Devices.Tablet;
};
exports.isTabletType = isTabletType;
var isMobileAndTabletType = function (device) {
    return (device === null || device === void 0 ? void 0 : device.type) === constants_1.Devices.Mobile || (device === null || device === void 0 ? void 0 : device.type) === constants_1.Devices.Tablet;
};
exports.isMobileAndTabletType = isMobileAndTabletType;
var isSmartTVType = function (device) {
    return (device === null || device === void 0 ? void 0 : device.type) === constants_1.Devices.SmartTv;
};
exports.isSmartTVType = isSmartTVType;
var isBrowserType = function (device) {
    return (device === null || device === void 0 ? void 0 : device.type) === constants_1.Devices.Browser;
};
exports.isBrowserType = isBrowserType;
var isWearableType = function (device) {
    return (device === null || device === void 0 ? void 0 : device.type) === constants_1.Devices.Wearable;
};
exports.isWearableType = isWearableType;
var isConsoleType = function (device) {
    return (device === null || device === void 0 ? void 0 : device.type) === constants_1.Devices.Console;
};
exports.isConsoleType = isConsoleType;
var isEmbeddedType = function (device) {
    return (device === null || device === void 0 ? void 0 : device.type) === constants_1.Devices.Embedded;
};
exports.isEmbeddedType = isEmbeddedType;
var getMobileVendor = function (device) {
    return (0, utils_1.setDefaults)(device === null || device === void 0 ? void 0 : device.vendor);
};
exports.getMobileVendor = getMobileVendor;
var getMobileModel = function (device) {
    return (0, utils_1.setDefaults)(device === null || device === void 0 ? void 0 : device.model);
};
exports.getMobileModel = getMobileModel;
var getDeviceType = function (device) {
    return (0, utils_1.setDefaults)(device === null || device === void 0 ? void 0 : device.type, "browser");
};
exports.getDeviceType = getDeviceType;
// os types
var isAndroidType = function (os) {
    return (os === null || os === void 0 ? void 0 : os.name) === constants_1.OsTypes.Android;
};
exports.isAndroidType = isAndroidType;
var isWindowsType = function (os) {
    return (os === null || os === void 0 ? void 0 : os.name) === constants_1.OsTypes.Windows;
};
exports.isWindowsType = isWindowsType;
var isMacOsType = function (os) { return (os === null || os === void 0 ? void 0 : os.name) === constants_1.OsTypes.MAC_OS; };
exports.isMacOsType = isMacOsType;
var isWinPhoneType = function (os) {
    return (os === null || os === void 0 ? void 0 : os.name) === constants_1.OsTypes.WindowsPhone;
};
exports.isWinPhoneType = isWinPhoneType;
var isIOSType = function (os) { return (os === null || os === void 0 ? void 0 : os.name) === constants_1.OsTypes.IOS; };
exports.isIOSType = isIOSType;
var getOsVersion = function (os) { return (0, utils_1.setDefaults)(os === null || os === void 0 ? void 0 : os.version); };
exports.getOsVersion = getOsVersion;
var getOsName = function (os) { return (0, utils_1.setDefaults)(os === null || os === void 0 ? void 0 : os.name); };
exports.getOsName = getOsName;
// browser types
var isChromeType = function (browser) {
    return (browser === null || browser === void 0 ? void 0 : browser.name) === constants_1.BrowserTypes.Chrome;
};
exports.isChromeType = isChromeType;
var isFirefoxType = function (browser) {
    return (browser === null || browser === void 0 ? void 0 : browser.name) === constants_1.BrowserTypes.Firefox;
};
exports.isFirefoxType = isFirefoxType;
var isChromiumType = function (browser) {
    return (browser === null || browser === void 0 ? void 0 : browser.name) === constants_1.BrowserTypes.Chromium;
};
exports.isChromiumType = isChromiumType;
var isEdgeType = function (browser) {
    return (browser === null || browser === void 0 ? void 0 : browser.name) === constants_1.BrowserTypes.Edge;
};
exports.isEdgeType = isEdgeType;
var isYandexType = function (browser) {
    return (browser === null || browser === void 0 ? void 0 : browser.name) === constants_1.BrowserTypes.Yandex;
};
exports.isYandexType = isYandexType;
var isSafariType = function (browser) {
    return (browser === null || browser === void 0 ? void 0 : browser.name) === constants_1.BrowserTypes.Safari ||
        (browser === null || browser === void 0 ? void 0 : browser.name) === constants_1.BrowserTypes.MobileSafari;
};
exports.isSafariType = isSafariType;
var isMobileSafariType = function (browser) {
    return (browser === null || browser === void 0 ? void 0 : browser.name) === constants_1.BrowserTypes.MobileSafari;
};
exports.isMobileSafariType = isMobileSafariType;
var isOperaType = function (browser) {
    return (browser === null || browser === void 0 ? void 0 : browser.name) === constants_1.BrowserTypes.Opera;
};
exports.isOperaType = isOperaType;
var isIEType = function (browser) {
    return (browser === null || browser === void 0 ? void 0 : browser.name) === constants_1.BrowserTypes.InternetExplorer ||
        (browser === null || browser === void 0 ? void 0 : browser.name) === constants_1.BrowserTypes.Ie;
};
exports.isIEType = isIEType;
var isMIUIType = function (browser) {
    return (browser === null || browser === void 0 ? void 0 : browser.name) === constants_1.BrowserTypes.MIUI;
};
exports.isMIUIType = isMIUIType;
var isSamsungBrowserType = function (browser) {
    return (browser === null || browser === void 0 ? void 0 : browser.name) === constants_1.BrowserTypes.SamsungBrowser;
};
exports.isSamsungBrowserType = isSamsungBrowserType;
var getBrowserFullVersion = function (browser) {
    return (0, utils_1.setDefaults)(browser === null || browser === void 0 ? void 0 : browser.version);
};
exports.getBrowserFullVersion = getBrowserFullVersion;
var getBrowserVersion = function (browser) {
    return (0, utils_1.setDefaults)(browser === null || browser === void 0 ? void 0 : browser.major);
};
exports.getBrowserVersion = getBrowserVersion;
var getBrowserName = function (browser) {
    return (0, utils_1.setDefaults)(browser === null || browser === void 0 ? void 0 : browser.name);
};
exports.getBrowserName = getBrowserName;
// engine types
var getEngineName = function (engine) {
    return (0, utils_1.setDefaults)(engine === null || engine === void 0 ? void 0 : engine.name);
};
exports.getEngineName = getEngineName;
var getEngineVersion = function (engine) {
    return (0, utils_1.setDefaults)(engine === null || engine === void 0 ? void 0 : engine.version);
};
exports.getEngineVersion = getEngineVersion;
var isElectronType = function () {
    var nav = (0, utils_1.getNavigatorInstance)();
    var ua = nav && nav.userAgent && nav.userAgent.toLowerCase();
    return typeof ua === "string" ? /electron/.test(ua) : false;
};
exports.isElectronType = isElectronType;
var isEdgeChromiumType = function (ua) {
    return !!ua && typeof ua === "string" && ua.indexOf("Edg/") !== -1;
};
exports.isEdgeChromiumType = isEdgeChromiumType;
var getIOS13 = function () {
    var nav = (0, utils_1.getNavigatorInstance)();
    return (nav &&
        (/iPad|iPhone|iPod/.test(nav.platform) ||
            (nav.platform === "MacIntel" && nav.maxTouchPoints > 1)) &&
        // @ts-ignore
        !window.MSStream);
};
exports.getIOS13 = getIOS13;
var getIPad13 = function () { return (0, utils_1.isIOS13Check)("iPad"); };
exports.getIPad13 = getIPad13;
var getIphone13 = function () { return (0, utils_1.isIOS13Check)("iPhone"); };
exports.getIphone13 = getIphone13;
var getIPod13 = function () { return (0, utils_1.isIOS13Check)("iPod"); };
exports.getIPod13 = getIPod13;
var getUserAgent = function (userAgent) { return (0, utils_1.setDefaults)(userAgent); };
exports.getUserAgent = getUserAgent;
