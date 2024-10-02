export declare const browserPayload: (isBrowser: boolean, browser: UAParser.IBrowser, engine: UAParser.IEngine, os: UAParser.IOS, ua: string) => {
    isBrowser: boolean;
    browserMajorVersion: string;
    browserFullVersion: string;
    browserName: string;
    engineName: string;
    engineVersion: string;
    osName: string;
    osVersion: string;
    userAgent: string;
};
export declare const mobilePayload: (type: Record<string, boolean>, device: UAParser.IDevice, os: UAParser.IOS, ua: string) => {
    vendor: string;
    model: string;
    os: string;
    osVersion: string;
    ua: string;
};
export declare const smartTvPayload: (isSmartTV: boolean, engine: UAParser.IEngine, os: UAParser.IOS, ua: string) => {
    isSmartTV: boolean;
    engineName: string;
    engineVersion: string;
    osName: string;
    osVersion: string;
    userAgent: string;
};
export declare const consolePayload: (isConsole: boolean, engine: UAParser.IEngine, os: UAParser.IOS, ua: string) => {
    isConsole: boolean;
    engineName: string;
    engineVersion: string;
    osName: string;
    osVersion: string;
    userAgent: string;
};
export declare const wearablePayload: (isWearable: boolean, engine: UAParser.IEngine, os: UAParser.IOS, ua: string) => {
    isWearable: boolean;
    engineName: string;
    engineVersion: string;
    osName: string;
    osVersion: string;
    userAgent: string;
};
export declare const embeddedPayload: (isEmbedded: boolean, device: UAParser.IDevice, engine: UAParser.IEngine, os: UAParser.IOS, ua: string) => {
    isEmbedded: boolean;
    vendor: string;
    model: string;
    engineName: string;
    engineVersion: string;
    osName: string;
    osVersion: string;
    userAgent: string;
};
