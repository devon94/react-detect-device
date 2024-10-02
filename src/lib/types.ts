import {
  Devices,
  OsTypes,
  BrowserTypes,
} from "@devon94/react-detect-device/constants/constants";
import {
  setDefaults,
  getNavigatorInstance,
  isIOS13Check,
} from "@devon94/react-detect-device/utils/utils";

// device types
export const isMobileType = (device?: UAParser.IDevice) =>
  device?.type === Devices.Mobile;
export const isTabletType = (device?: UAParser.IDevice) =>
  device?.type === Devices.Tablet;
export const isMobileAndTabletType = (device?: UAParser.IDevice) =>
  device?.type === Devices.Mobile || device?.type === Devices.Tablet;
export const isSmartTVType = (device?: UAParser.IDevice) =>
  device?.type === Devices.SmartTv;
export const isBrowserType = (device?: UAParser.IDevice) =>
  device?.type === Devices.Browser;
export const isWearableType = (device?: UAParser.IDevice) =>
  device?.type === Devices.Wearable;
export const isConsoleType = (device?: UAParser.IDevice) =>
  device?.type === Devices.Console;
export const isEmbeddedType = (device?: UAParser.IDevice) =>
  device?.type === Devices.Embedded;
export const getMobileVendor = (device?: UAParser.IDevice) =>
  setDefaults(device?.vendor);
export const getMobileModel = (device?: UAParser.IDevice) =>
  setDefaults(device?.model);
export const getDeviceType = (device?: UAParser.IDevice) =>
  setDefaults(device?.type, "browser");

// os types
export const isAndroidType = (os?: UAParser.IOS) =>
  os?.name === OsTypes.Android;
export const isWindowsType = (os?: UAParser.IOS) =>
  os?.name === OsTypes.Windows;
export const isMacOsType = (os?: UAParser.IOS) => os?.name === OsTypes.MAC_OS;
export const isWinPhoneType = (os?: UAParser.IOS) =>
  os?.name === OsTypes.WindowsPhone;
export const isIOSType = (os?: UAParser.IOS) => os?.name === OsTypes.IOS;
export const getOsVersion = (os?: UAParser.IOS) => setDefaults(os?.version);
export const getOsName = (os?: UAParser.IOS) => setDefaults(os?.name);

// browser types
export const isChromeType = (browser?: UAParser.IBrowser) =>
  browser?.name === BrowserTypes.Chrome;
export const isFirefoxType = (browser?: UAParser.IBrowser) =>
  browser?.name === BrowserTypes.Firefox;
export const isChromiumType = (browser?: UAParser.IBrowser) =>
  browser?.name === BrowserTypes.Chromium;
export const isEdgeType = (browser?: UAParser.IBrowser) =>
  browser?.name === BrowserTypes.Edge;
export const isYandexType = (browser?: UAParser.IBrowser) =>
  browser?.name === BrowserTypes.Yandex;
export const isSafariType = (browser?: UAParser.IBrowser) =>
  browser?.name === BrowserTypes.Safari ||
  browser?.name === BrowserTypes.MobileSafari;
export const isMobileSafariType = (browser?: UAParser.IBrowser) =>
  browser?.name === BrowserTypes.MobileSafari;
export const isOperaType = (browser?: UAParser.IBrowser) =>
  browser?.name === BrowserTypes.Opera;
export const isIEType = (browser?: UAParser.IBrowser) =>
  browser?.name === BrowserTypes.InternetExplorer ||
  browser?.name === BrowserTypes.Ie;
export const isMIUIType = (browser?: UAParser.IBrowser) =>
  browser?.name === BrowserTypes.MIUI;
export const isSamsungBrowserType = (browser?: UAParser.IBrowser) =>
  browser?.name === BrowserTypes.SamsungBrowser;
export const getBrowserFullVersion = (browser?: UAParser.IBrowser) =>
  setDefaults(browser?.version);
export const getBrowserVersion = (browser?: UAParser.IBrowser) =>
  setDefaults(browser?.major);
export const getBrowserName = (browser?: UAParser.IBrowser) =>
  setDefaults(browser?.name);

// engine types
export const getEngineName = (engine?: UAParser.IEngine) =>
  setDefaults(engine?.name);
export const getEngineVersion = (engine?: UAParser.IEngine) =>
  setDefaults(engine?.version);

export const isElectronType = () => {
  const nav = getNavigatorInstance();
  const ua = nav && nav.userAgent && nav.userAgent.toLowerCase();

  return typeof ua === "string" ? /electron/.test(ua) : false;
};
export const isEdgeChromiumType = (ua?: string) =>
  !!ua && typeof ua === "string" && ua.indexOf("Edg/") !== -1;

export const getIOS13 = () => {
  const nav = getNavigatorInstance();
  return (
    nav &&
    (/iPad|iPhone|iPod/.test(nav.platform) ||
      (nav.platform === "MacIntel" && nav.maxTouchPoints > 1)) &&
    // @ts-ignore
    !window.MSStream
  );
};
export const getIPad13 = () => isIOS13Check("iPad");
export const getIphone13 = () => isIOS13Check("iPhone");
export const getIPod13 = () => isIOS13Check("iPod");
export const getUserAgent = (userAgent?: string) => setDefaults(userAgent);
