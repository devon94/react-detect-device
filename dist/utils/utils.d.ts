import { BrowserType } from "../constants/constants";
export declare const checkDeviceType: (type?: string) => Record<string, boolean>;
export declare const getCurrentBrowser: (name: BrowserType) => boolean;
export declare const setUserAgent: (uastring: string) => import("ua-parser-js").UAParserInstance;
export declare function setDefaults<T>(p: T, d?: string): string | NonNullable<T>;
export declare const getNavigatorInstance: () => false | Navigator;
export declare const isIOS13Check: (type: string) => boolean | "";
