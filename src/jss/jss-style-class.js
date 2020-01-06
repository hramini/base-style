"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jss_1 = require("jss");
var jss_plugin_camel_case_1 = tslib_1.__importDefault(require("jss-plugin-camel-case"));
var jss_plugin_global_1 = tslib_1.__importDefault(require("jss-plugin-global"));
var jss_plugin_nested_1 = tslib_1.__importDefault(require("jss-plugin-nested"));
var jss_preset_default_1 = tslib_1.__importDefault(require("jss-preset-default"));
var JssStyle = /** @class */ (function () {
    function JssStyle() {
        this.jss = jss_1.create();
        this.jss.setup(jss_preset_default_1.default());
        this.jss.use(jss_plugin_camel_case_1.default(), jss_plugin_global_1.default(), jss_plugin_nested_1.default());
    }
    JssStyle.getInstance = function () {
        if (!this.instance) {
            this.instance = new JssStyle();
        }
        return this.instance;
    };
    JssStyle.prototype.addStyles = function (style) {
        this.styles = style;
    };
    JssStyle.prototype.createClassesByStyles = function () {
        if (this.styles) {
            this.styleSheet = this.jss.createStyleSheet(this.styles);
            return this.styleSheet.classes;
        }
        return {};
    };
    JssStyle.prototype.attachToHtml = function () {
        this.styleSheet.attach();
    };
    JssStyle.prototype.getStyles = function () {
        return this.styles;
    };
    JssStyle.prototype.getGeneralClasses = function () {
        return this.classes;
    };
    JssStyle.prototype.setGeneralStyles = function (generalStyles) {
        this.addStyles(generalStyles);
        this.classes = this.createClassesByStyles();
        this.attachToHtml();
    };
    JssStyle.prototype.createClasses = function () {
        var generalClasses = this.getGeneralClasses();
        var componentClasses = this.createClassesByStyles();
        return tslib_1.__assign(tslib_1.__assign({}, componentClasses), generalClasses);
    };
    return JssStyle;
}());
exports.JssStyle = JssStyle;
//# sourceMappingURL=jss-style-class.js.map