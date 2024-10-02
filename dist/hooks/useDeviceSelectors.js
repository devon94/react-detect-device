"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useDeviceSelectors = useDeviceSelectors;
var useDeviceData_1 = require("@devon94/react-detect-device/hooks/useDeviceData");
var buildSelectors_1 = require("@devon94/react-detect-device/lib/buildSelectors");
function useDeviceSelectors(uastring) {
    var hookUserAgent = uastring ? uastring : window.navigator.userAgent;
    var deviceData = (0, useDeviceData_1.useDeviceData)(hookUserAgent);
    var selectors = (0, buildSelectors_1.buildSelectorsObject)(deviceData);
    return [selectors, deviceData];
}
