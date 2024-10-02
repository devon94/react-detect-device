import { useDeviceData } from "@devon94/react-detect-device/hooks/useDeviceData"
import { buildSelectorsObject } from "@devon94/react-detect-device/lib/buildSelectors"

export function useDeviceSelectors(uastring?: string | null) {
  const hookUserAgent = uastring ? uastring : window.navigator.userAgent
  const deviceData = useDeviceData(hookUserAgent)
  const selectors = buildSelectorsObject(deviceData)

  return [selectors, deviceData]
}
