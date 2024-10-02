export declare function deviceDetect(uastring: string | null): {
    isBrowser: boolean;
    browserMajorVersion: string;
    browserFullVersion: string;
    browserName: string;
    engineName: string;
    engineVersion: string;
    osName: string;
    osVersion: string;
    userAgent: string;
} | {
    vendor: string;
    model: string;
    os: string;
    osVersion: string;
    ua: string;
} | {
    isSmartTV: boolean;
    engineName: string;
    engineVersion: string;
    osName: string;
    osVersion: string;
    userAgent: string;
} | {
    isConsole: boolean;
    engineName: string;
    engineVersion: string;
    osName: string;
    osVersion: string;
    userAgent: string;
} | {
    isWearable: boolean;
    engineName: string;
    engineVersion: string;
    osName: string;
    osVersion: string;
    userAgent: string;
} | {
    isEmbedded: boolean;
    vendor: string;
    model: string;
    engineName: string;
    engineVersion: string;
    osName: string;
    osVersion: string;
    userAgent: string;
} | null | undefined;
