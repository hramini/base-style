"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BaseStyle = /** @class */ (function () {
    function BaseStyle(styleClass) {
        this.styleClass = styleClass;
    }
    BaseStyle.prototype.addStyles = function (styles) {
        this.styleClass.addStyles(styles);
    };
    BaseStyle.prototype.createClasses = function () {
        return this.styleClass.createClasses();
    };
    BaseStyle.prototype.attachToHtml = function () {
        this.styleClass.attachToHtml();
    };
    return BaseStyle;
}());
exports.BaseStyle = BaseStyle;
//# sourceMappingURL=base-style-class.js.map