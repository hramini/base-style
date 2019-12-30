"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jss_1 = require("jss");
var jss_plugin_camel_case_1 = tslib_1.__importDefault(require("jss-plugin-camel-case"));
var jss_plugin_global_1 = tslib_1.__importDefault(require("jss-plugin-global"));
var jss_plugin_nested_1 = tslib_1.__importDefault(require("jss-plugin-nested"));
var jss_preset_default_1 = tslib_1.__importDefault(require("jss-preset-default"));
var BaseStyle = /** @class */ (function () {
    function BaseStyle(generalStyles) {
        this.classes = {};
        this.jss = jss_1.create();
        this.jss.setup(jss_preset_default_1.default());
        this.jss.use(jss_plugin_camel_case_1.default(), jss_plugin_global_1.default(), jss_plugin_nested_1.default());
        this.classes = this.createAndAttachStyleSheet(generalStyles);
    }
    BaseStyle.getInstance = function (generalStyles) {
        this.instance = new BaseStyle(generalStyles);
        return this.instance;
    };
    BaseStyle.prototype.getGeneralClasses = function () {
        return this.classes;
    };
    BaseStyle.prototype.createAndAttachStyleSheet = function (styles) {
        if (styles) {
            this.styleSheet = this.jss.createStyleSheet(styles);
            this.styleSheet.attach();
            return this.styleSheet.classes;
        }
        return {};
    };
    BaseStyle.prototype.create = function (styles) {
        var componentClasses = this.createAndAttachStyleSheet(styles);
        var generalClasses = this.getGeneralClasses();
        return tslib_1.__assign(tslib_1.__assign({}, componentClasses), generalClasses);
    };
    return BaseStyle;
}());
exports.BaseStyle = BaseStyle;
//# sourceMappingURL=base-style-class.js.map