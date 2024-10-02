import * as UAHelper from "@devon94/react-detect-device/lib/parse";
import * as create from "@devon94/react-detect-device/utils/payloads";
import { checkDeviceType } from "@devon94/react-detect-device/utils/utils";

export function deviceDetect(uastring: string | null) {
  const uaOptions = uastring ? UAHelper.parseUserAgent(uastring) : UAHelper;

  if (!uaOptions) {
    console.error("No userAgent string was provided");
    return null;
  }

  const { device, browser, engine, os, ua } = uaOptions;

  const type = checkDeviceType(device.type);
  const {
    isBrowser,
    isMobile,
    isTablet,
    isSmartTV,
    isConsole,
    isWearable,
    isEmbedded,
  } = type;

  if (isBrowser) {
    return create.browserPayload(isBrowser, browser, engine, os, ua);
  }

  if (isSmartTV) {
    return create.smartTvPayload(isSmartTV, engine, os, ua);
  }

  if (isConsole) {
    return create.consolePayload(isConsole, engine, os, ua);
  }

  if (isMobile) {
    return create.mobilePayload(type, device, os, ua);
  }

  if (isTablet) {
    return create.mobilePayload(type, device, os, ua);
  }

  if (isWearable) {
    return create.wearablePayload(isWearable, engine, os, ua);
  }

  if (isEmbedded) {
    return create.embeddedPayload(isEmbedded, device, engine, os, ua);
  }
}
