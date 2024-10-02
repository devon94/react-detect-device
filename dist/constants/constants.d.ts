export declare const Devices: {
    readonly Mobile: "mobile";
    readonly Tablet: "tablet";
    readonly SmartTv: "smarttv";
    readonly Console: "console";
    readonly Wearable: "wearable";
    readonly Embedded: "embedded";
    readonly Browser: undefined;
};
export type DeviceType = typeof Devices[keyof typeof Devices];
export declare const BrowserTypes: {
    readonly Chrome: "Chrome";
    readonly Firefox: "Firefox";
    readonly Opera: "Opera";
    readonly Yandex: "Yandex";
    readonly Safari: "Safari";
    readonly InternetExplorer: "Internet Explorer";
    readonly Edge: "Edge";
    readonly Chromium: "Chromium";
    readonly Ie: "IE";
    readonly MobileSafari: "Mobile Safari";
    readonly EdgeChromium: "Edge Chromium";
    readonly MIUI: "MIUI Browser";
    readonly SamsungBrowser: "Samsung Browser";
};
export type BrowserType = typeof BrowserTypes[keyof typeof BrowserTypes];
export declare const OsTypes: {
    readonly IOS: "iOS";
    readonly Android: "Android";
    readonly WindowsPhone: "Windows Phone";
    readonly Windows: "Windows";
    readonly MAC_OS: "Mac OS";
};
export type OsType = typeof OsTypes[keyof typeof OsTypes];
export declare const InitialDeviceTypes: Record<string, boolean>;
