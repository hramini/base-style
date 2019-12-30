"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var base_style_class_1 = require("./base-style-class");
describe('testing the BaseStyle class', function () {
    var baseStyle;
    var style;
    var classes;
    beforeAll(function () {
        baseStyle = base_style_class_1.BaseStyle.getInstance({});
        style = {
            testClass: {
                backgroundColor: 'red'
            }
        };
        classes = baseStyle.create(style);
    });
    test('classes should have a key named "testClass"', function () {
        var classKeys = Object.keys(classes);
        expect(classKeys.findIndex(function (ck) { return ck === 'testClass'; })).toBeGreaterThanOrEqual(0);
    });
    test('testClass of classes should contain "testClass"', function () {
        expect(classes.testClass).toContain('testClass');
    });
});
//# sourceMappingURL=base-style-test.js.map