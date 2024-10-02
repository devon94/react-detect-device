import { setDefaults } from "@devon94/react-detect-device/utils/utils"

export const browserPayload = (
  isBrowser: boolean,
  browser: UAParser.IBrowser,
  engine: UAParser.IEngine,
  os: UAParser.IOS,
  ua: string
) => ({
  isBrowser,
  browserMajorVersion: setDefaults(browser.major),
  browserFullVersion: setDefaults(browser.version),
  browserName: setDefaults(browser.name),
  engineName: setDefaults(engine.name),
  engineVersion: setDefaults(engine.version),
  osName: setDefaults(os.name),
  osVersion: setDefaults(os.version),
  userAgent: setDefaults(ua),
});

export const mobilePayload = (
  type: Record<string, boolean>,
  device: UAParser.IDevice,
  os: UAParser.IOS,
  ua: string
) => ({
  ...type,
  vendor: setDefaults(device.vendor),
  model: setDefaults(device.model),
  os: setDefaults(os.name),
  osVersion: setDefaults(os.version),
  ua: setDefaults(ua),
});

export const smartTvPayload = (
  isSmartTV: boolean,
  engine: UAParser.IEngine,
  os: UAParser.IOS,
  ua: string
) => ({
  isSmartTV,
  engineName: setDefaults(engine.name),
  engineVersion: setDefaults(engine.version),
  osName: setDefaults(os.name),
  osVersion: setDefaults(os.version),
  userAgent: setDefaults(ua),
});

export const consolePayload = (
  isConsole: boolean,
  engine: UAParser.IEngine,
  os: UAParser.IOS,
  ua: string
) => ({
  isConsole,
  engineName: setDefaults(engine.name),
  engineVersion: setDefaults(engine.version),
  osName: setDefaults(os.name),
  osVersion: setDefaults(os.version),
  userAgent: setDefaults(ua),
});

export const wearablePayload = (
  isWearable: boolean,
  engine: UAParser.IEngine,
  os: UAParser.IOS,
  ua: string
) => ({
  isWearable,
  engineName: setDefaults(engine.name),
  engineVersion: setDefaults(engine.version),
  osName: setDefaults(os.name),
  osVersion: setDefaults(os.version),
  userAgent: setDefaults(ua),
});

export const embeddedPayload = (
  isEmbedded: boolean,
  device: UAParser.IDevice,
  engine: UAParser.IEngine,
  os: UAParser.IOS,
  ua: string
) => ({
  isEmbedded,
  vendor: setDefaults(device.vendor),
  model: setDefaults(device.model),
  engineName: setDefaults(engine.name),
  engineVersion: setDefaults(engine.version),
  osName: setDefaults(os.name),
  osVersion: setDefaults(os.version),
  userAgent: setDefaults(ua),
});
