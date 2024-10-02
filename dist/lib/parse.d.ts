export declare const ClientUAInstance: import("ua-parser-js").UAParserInstance;
export declare const browser: import("ua-parser-js").IBrowser;
export declare const cpu: import("ua-parser-js").ICPU;
export declare const device: import("ua-parser-js").IDevice;
export declare const engine: import("ua-parser-js").IEngine;
export declare const os: import("ua-parser-js").IOS;
export declare const ua: string;
export declare const setUa: (uastring: string) => import("ua-parser-js").UAParserInstance;
export interface UserAgentOptions {
    UA: UAParser;
    browser: UAParser.IBrowser;
    cpu: UAParser.ICPU;
    device: UAParser.IDevice;
    engine: UAParser.IEngine;
    os: UAParser.IOS;
    ua: string;
    setUserAgent: (uastring: string) => void;
}
export declare const parseUserAgent: (uastring: string) => UserAgentOptions | null;
