import { UAParser } from "ua-parser-js";

export const ClientUAInstance = new UAParser();

export const browser = ClientUAInstance.getBrowser();
export const cpu = ClientUAInstance.getCPU();
export const device = ClientUAInstance.getDevice();
export const engine = ClientUAInstance.getEngine();
export const os = ClientUAInstance.getOS();
export const ua = ClientUAInstance.getUA();
export const setUa = (uastring: string) => ClientUAInstance.setUA(uastring);

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

export const parseUserAgent = (uastring: string): UserAgentOptions | null => {
  if (!uastring) {
    console.error("No userAgent string was provided");
    return null;
  }

  const UserAgentInstance = new UAParser(uastring);

  return {
    UA: UserAgentInstance,
    browser: UserAgentInstance.getBrowser(),
    cpu: UserAgentInstance.getCPU(),
    device: UserAgentInstance.getDevice(),
    engine: UserAgentInstance.getEngine(),
    os: UserAgentInstance.getOS(),
    ua: UserAgentInstance.getUA(),
    setUserAgent: (uastring: string) => UserAgentInstance.setUA(uastring),
  };
};
