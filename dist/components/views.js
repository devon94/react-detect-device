"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomView = exports.WearableView = exports.ConsoleView = exports.SmartTVView = exports.MobileOnlyView = exports.WinPhoneView = exports.TabletView = exports.MobileView = exports.IOSView = exports.IEView = exports.BrowserView = exports.AndroidView = void 0;
var selectors_1 = require("@devon94/react-detect-device/lib/selectors");
var react_1 = __importStar(require("react"));
var AndroidView = function (_a) {
    var renderWithFragment = _a.renderWithFragment, children = _a.children, props = __rest(_a, ["renderWithFragment", "children"]);
    return selectors_1.isAndroid ? (renderWithFragment ? (react_1.default.createElement(react_1.Fragment, null, children)) : (react_1.default.createElement("div", __assign({}, props), children))) : null;
};
exports.AndroidView = AndroidView;
var BrowserView = function (_a) {
    var renderWithFragment = _a.renderWithFragment, children = _a.children, props = __rest(_a, ["renderWithFragment", "children"]);
    return selectors_1.isBrowser ? (renderWithFragment ? (react_1.default.createElement(react_1.Fragment, null, children)) : (react_1.default.createElement("div", __assign({}, props), children))) : null;
};
exports.BrowserView = BrowserView;
var IEView = function (_a) {
    var renderWithFragment = _a.renderWithFragment, children = _a.children, props = __rest(_a, ["renderWithFragment", "children"]);
    return selectors_1.isIE ? (renderWithFragment ? (react_1.default.createElement(react_1.Fragment, null, children)) : (react_1.default.createElement("div", __assign({}, props), children))) : null;
};
exports.IEView = IEView;
var IOSView = function (_a) {
    var renderWithFragment = _a.renderWithFragment, children = _a.children, props = __rest(_a, ["renderWithFragment", "children"]);
    return selectors_1.isIOS ? (renderWithFragment ? (react_1.default.createElement(react_1.Fragment, null, children)) : (react_1.default.createElement("div", __assign({}, props), children))) : null;
};
exports.IOSView = IOSView;
var MobileView = function (_a) {
    var renderWithFragment = _a.renderWithFragment, children = _a.children, props = __rest(_a, ["renderWithFragment", "children"]);
    return selectors_1.isMobile ? (renderWithFragment ? (react_1.default.createElement(react_1.Fragment, null, children)) : (react_1.default.createElement("div", __assign({}, props), children))) : null;
};
exports.MobileView = MobileView;
var TabletView = function (_a) {
    var renderWithFragment = _a.renderWithFragment, children = _a.children, props = __rest(_a, ["renderWithFragment", "children"]);
    return selectors_1.isTablet ? (renderWithFragment ? (react_1.default.createElement(react_1.Fragment, null, children)) : (react_1.default.createElement("div", __assign({}, props), children))) : null;
};
exports.TabletView = TabletView;
var WinPhoneView = function (_a) {
    var renderWithFragment = _a.renderWithFragment, children = _a.children, props = __rest(_a, ["renderWithFragment", "children"]);
    return selectors_1.isWinPhone ? (renderWithFragment ? (react_1.default.createElement(react_1.Fragment, null, children)) : (react_1.default.createElement("div", __assign({}, props), children))) : null;
};
exports.WinPhoneView = WinPhoneView;
var MobileOnlyView = function (_a) {
    var renderWithFragment = _a.renderWithFragment, children = _a.children, viewClassName = _a.viewClassName, style = _a.style, props = __rest(_a, ["renderWithFragment", "children", "viewClassName", "style"]);
    return selectors_1.isMobileOnly ? (renderWithFragment ? (react_1.default.createElement(react_1.Fragment, null, children)) : (react_1.default.createElement("div", __assign({}, props), children))) : null;
};
exports.MobileOnlyView = MobileOnlyView;
var SmartTVView = function (_a) {
    var renderWithFragment = _a.renderWithFragment, children = _a.children, props = __rest(_a, ["renderWithFragment", "children"]);
    return selectors_1.isSmartTV ? (renderWithFragment ? (react_1.default.createElement(react_1.Fragment, null, children)) : (react_1.default.createElement("div", __assign({}, props), children))) : null;
};
exports.SmartTVView = SmartTVView;
var ConsoleView = function (_a) {
    var renderWithFragment = _a.renderWithFragment, children = _a.children, props = __rest(_a, ["renderWithFragment", "children"]);
    return selectors_1.isConsole ? (renderWithFragment ? (react_1.default.createElement(react_1.Fragment, null, children)) : (react_1.default.createElement("div", __assign({}, props), children))) : null;
};
exports.ConsoleView = ConsoleView;
var WearableView = function (_a) {
    var renderWithFragment = _a.renderWithFragment, children = _a.children, props = __rest(_a, ["renderWithFragment", "children"]);
    return selectors_1.isWearable ? (renderWithFragment ? (react_1.default.createElement(react_1.Fragment, null, children)) : (react_1.default.createElement("div", __assign({}, props), children))) : null;
};
exports.WearableView = WearableView;
var CustomView = function (_a) {
    var renderWithFragment = _a.renderWithFragment, children = _a.children, viewClassName = _a.viewClassName, style = _a.style, condition = _a.condition, props = __rest(_a, ["renderWithFragment", "children", "viewClassName", "style", "condition"]);
    return condition ? (renderWithFragment ? (react_1.default.createElement(react_1.Fragment, null, children)) : (react_1.default.createElement("div", __assign({}, props), children))) : null;
};
exports.CustomView = CustomView;
