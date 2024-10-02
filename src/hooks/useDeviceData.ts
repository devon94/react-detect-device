import { parseUserAgent } from "../lib/parse"

export function useDeviceData(uastring?: string | null) {
  const hookUserAgent = uastring ? uastring : window.navigator.userAgent
  return parseUserAgent(hookUserAgent)
}
