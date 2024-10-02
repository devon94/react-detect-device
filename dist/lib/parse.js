"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseUserAgent = exports.setUa = exports.ua = exports.os = exports.engine = exports.device = exports.cpu = exports.browser = exports.ClientUAInstance = void 0;
var ua_parser_js_1 = require("ua-parser-js");
exports.ClientUAInstance = new ua_parser_js_1.UAParser();
exports.browser = exports.ClientUAInstance.getBrowser();
exports.cpu = exports.ClientUAInstance.getCPU();
exports.device = exports.ClientUAInstance.getDevice();
exports.engine = exports.ClientUAInstance.getEngine();
exports.os = exports.ClientUAInstance.getOS();
exports.ua = exports.ClientUAInstance.getUA();
var setUa = function (uastring) { return exports.ClientUAInstance.setUA(uastring); };
exports.setUa = setUa;
var parseUserAgent = function (uastring) {
    if (!uastring) {
        console.error("No userAgent string was provided");
        return null;
    }
    var UserAgentInstance = new ua_parser_js_1.UAParser(uastring);
    return {
        UA: UserAgentInstance,
        browser: UserAgentInstance.getBrowser(),
        cpu: UserAgentInstance.getCPU(),
        device: UserAgentInstance.getDevice(),
        engine: UserAgentInstance.getEngine(),
        os: UserAgentInstance.getOS(),
        ua: UserAgentInstance.getUA(),
        setUserAgent: function (uastring) { return UserAgentInstance.setUA(uastring); },
    };
};
exports.parseUserAgent = parseUserAgent;
