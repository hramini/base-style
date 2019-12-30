import { Classes, Styles } from 'jss';
import { BaseStyle } from './base-style-class';

describe('testing the BaseStyle class', () => {
  let baseStyle: BaseStyle;
  let style: Styles;
  let classes: Classes;

  beforeAll(() => {
    baseStyle = BaseStyle.getInstance({});
    style = {
      testClass: {
        backgroundColor: 'red'
      }
    };

    classes = baseStyle.create(style);
  });

  test('classes should have a key named "testClass"', () => {
    const classKeys: string[] = Object.keys(classes);
    expect(classKeys.findIndex(ck => ck === 'testClass')).toBeGreaterThanOrEqual(0);
  });

  test('testClass of classes should contain "testClass"', () => {
    expect(classes.testClass).toContain('testClass');
  });
});
