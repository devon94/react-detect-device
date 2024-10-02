import * as UAHelpers from "@devon94/react-detect-device/lib/parse";
import * as types from "@devon94/react-detect-device/lib/types";
import { buildSelectorsObject } from "@devon94/react-detect-device/lib/buildSelectors";

export const isSmartTV = types.isSmartTVType(UAHelpers.device);
export const isConsole = types.isConsoleType(UAHelpers.device);
export const isWearable = types.isWearableType(UAHelpers.device);
export const isEmbedded = types.isEmbeddedType(UAHelpers.device);
export const isMobileSafari =
  types.isMobileSafariType(UAHelpers.browser) || types.getIPad13();
export const isChromium = types.isChromiumType(UAHelpers.browser);
export const isMobile =
  types.isMobileAndTabletType(UAHelpers.device) || types.getIPad13();
export const isMobileOnly = types.isMobileType(UAHelpers.device);
export const isTablet =
  types.isTabletType(UAHelpers.device) || types.getIPad13();
export const isBrowser = types.isBrowserType(UAHelpers.device);
export const isDesktop = types.isBrowserType(UAHelpers.device);
export const isAndroid = types.isAndroidType(UAHelpers.os);
export const isWinPhone = types.isWinPhoneType(UAHelpers.os);
export const isIOS = types.isIOSType(UAHelpers.os) || types.getIPad13();
export const isChrome = types.isChromeType(UAHelpers.browser);
export const isFirefox = types.isFirefoxType(UAHelpers.browser);
export const isSafari = types.isSafariType(UAHelpers.browser);
export const isOpera = types.isOperaType(UAHelpers.browser);
export const isIE = types.isIEType(UAHelpers.browser);
export const osVersion = types.getOsVersion(UAHelpers.os);
export const osName = types.getOsName(UAHelpers.os);
export const fullBrowserVersion = types.getBrowserFullVersion(
  UAHelpers.browser
);
export const browserVersion = types.getBrowserVersion(UAHelpers.browser);
export const browserName = types.getBrowserName(UAHelpers.browser);
export const mobileVendor = types.getMobileVendor(UAHelpers.device);
export const mobileModel = types.getMobileModel(UAHelpers.device);
export const engineName = types.getEngineName(UAHelpers.engine);
export const engineVersion = types.getEngineVersion(UAHelpers.engine);
export const getUA = types.getUserAgent(UAHelpers.ua);
export const isEdge =
  types.isEdgeType(UAHelpers.browser) || types.isEdgeChromiumType(UAHelpers.ua);
export const isYandex = types.isYandexType(UAHelpers.browser);
export const deviceType = types.getDeviceType(UAHelpers.device);
export const isIOS13 = types.getIOS13();
export const isIPad13 = types.getIPad13();
export const isIPhone13 = types.getIphone13();
export const isIPod13 = types.getIPod13();
export const isElectron = types.isElectronType();
export const isEdgeChromium = types.isEdgeChromiumType(UAHelpers.ua);
export const isLegacyEdge =
  types.isEdgeType(UAHelpers.browser) &&
  !types.isEdgeChromiumType(UAHelpers.ua);
export const isWindows = types.isWindowsType(UAHelpers.os);
export const isMacOs = types.isMacOsType(UAHelpers.os);
export const isMIUI = types.isMIUIType(UAHelpers.browser);
export const isSamsungBrowser = types.isSamsungBrowserType(UAHelpers.browser);

export const getSelectorsByUserAgent = (uastring?: string | undefined) => {
  if (!uastring || typeof uastring !== "string") {
    console.error("No valid user agent string was provided");
    return;
  }

  const uaOptions = UAHelpers.parseUserAgent(uastring);

  if (!uaOptions) {
    console.error("No valid user agent string was provided");
    return;
  }

  return buildSelectorsObject(uaOptions);
};
