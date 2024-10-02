import {
  BrowserType,
  BrowserTypes,
  Devices,
  InitialDeviceTypes
} from "../constants/constants"
import { setUa } from "../lib/parse"

export const checkDeviceType = (type?: string) => {
  switch (type) {
    case Devices.Mobile:
      return { isMobile: true };
    case Devices.Tablet:
      return { isTablet: true };
    case Devices.SmartTv:
      return { isSmartTV: true };
    case Devices.Console:
      return { isConsole: true };
    case Devices.Wearable:
      return { isWearable: true };
    case Devices.Browser:
      return { isBrowser: true };
    case Devices.Embedded:
      return { isEmbedded: true };
    default:
      return InitialDeviceTypes;
  }
};

export const getCurrentBrowser = (name: BrowserType) => {
  switch (name) {
    case BrowserTypes.Chrome:
    case BrowserTypes.Opera:
    case BrowserTypes.Firefox:
    case BrowserTypes.Yandex:
    case BrowserTypes.Safari:
    case BrowserTypes.Ie:
    case BrowserTypes.Edge:
    case BrowserTypes.Chromium:
      return true;
    default:
      return false;
  }
};

export const setUserAgent = (uastring: string) => setUa(uastring);

export function setDefaults<T>(p: T, d = "none") {
  return p ? p : d;
}

export const getNavigatorInstance = () => {
  if (typeof window !== "undefined") {
    if (window.navigator || navigator) {
      return window.navigator || navigator;
    }
  }

  return false;
};

export const isIOS13Check = (type: string) => {
  const nav = getNavigatorInstance();
  return (
    nav &&
    nav.platform &&
    (nav.platform.indexOf(type) !== -1 ||
      (nav.platform === "MacIntel" &&
        nav.maxTouchPoints > 1 &&
        // @ts-ignore
        !window.MSStream))
  );
};
