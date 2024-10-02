"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useDeviceData = useDeviceData;
var parse_1 = require("../lib/parse");
function useDeviceData(uastring) {
    var hookUserAgent = uastring ? uastring : window.navigator.userAgent;
    return (0, parse_1.parseUserAgent)(hookUserAgent);
}
