import { useDeviceData } from "./useDeviceData"
import { buildSelectorsObject } from "../lib/buildSelectors"

export function useDeviceSelectors(uastring?: string | null) {
  const hookUserAgent = uastring ? uastring : window.navigator.userAgent
  const deviceData = useDeviceData(hookUserAgent)
  const selectors = buildSelectorsObject(deviceData)

  return [selectors, deviceData]
}
