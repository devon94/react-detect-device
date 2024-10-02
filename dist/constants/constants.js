"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InitialDeviceTypes = exports.OsTypes = exports.BrowserTypes = exports.Devices = void 0;
exports.Devices = {
    Mobile: 'mobile',
    Tablet: 'tablet',
    SmartTv: 'smarttv',
    Console: 'console',
    Wearable: 'wearable',
    Embedded: 'embedded',
    Browser: undefined,
};
exports.BrowserTypes = {
    Chrome: 'Chrome',
    Firefox: 'Firefox',
    Opera: 'Opera',
    Yandex: 'Yandex',
    Safari: 'Safari',
    InternetExplorer: 'Internet Explorer',
    Edge: 'Edge',
    Chromium: 'Chromium',
    Ie: 'IE',
    MobileSafari: 'Mobile Safari',
    EdgeChromium: 'Edge Chromium',
    MIUI: 'MIUI Browser',
    SamsungBrowser: 'Samsung Browser',
};
exports.OsTypes = {
    IOS: 'iOS',
    Android: 'Android',
    WindowsPhone: 'Windows Phone',
    Windows: 'Windows',
    MAC_OS: 'Mac OS',
};
exports.InitialDeviceTypes = {
    isMobile: false,
    isTablet: false,
    isBrowser: false,
    isSmartTV: false,
    isConsole: false,
    isWearable: false,
};
