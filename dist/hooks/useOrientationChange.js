"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useMobileOrientation = useMobileOrientation;
var selectors_1 = require("@devon94/react-detect-device/lib/selectors");
var react_1 = require("react");
function useMobileOrientation() {
    var _a = (0, react_1.useState)(function () {
        var orientation = window.innerWidth > window.innerHeight ? 90 : 0;
        return {
            isPortrait: orientation === 0,
            isLandscape: orientation === 90,
            orientation: orientation === 0 ? "portrait" : "landscape",
        };
    }), state = _a[0], setState = _a[1];
    var handleOrientationChange = (0, react_1.useCallback)(function () {
        var orientation = window.innerWidth > window.innerHeight ? 90 : 0;
        var next = {
            isPortrait: orientation === 0,
            isLandscape: orientation === 90,
            orientation: orientation === 0 ? "portrait" : "landscape",
        };
        state.orientation !== next.orientation && setState(next);
    }, [state.orientation]);
    (0, react_1.useEffect)(function () {
        if (typeof window !== undefined && selectors_1.isMobile) {
            handleOrientationChange();
            window.addEventListener("load", handleOrientationChange, false);
            window.addEventListener("resize", handleOrientationChange, false);
        }
        return function () {
            window.removeEventListener("resize", handleOrientationChange, false);
            window.removeEventListener("load", handleOrientationChange, false);
        };
    }, [handleOrientationChange]);
    return state;
}
