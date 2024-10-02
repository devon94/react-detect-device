import { parseUserAgent } from "@devon94/react-detect-device/lib/parse"

export function useDeviceData(uastring?: string | null) {
  const hookUserAgent = uastring ? uastring : window.navigator.userAgent
  return parseUserAgent(hookUserAgent)
}
