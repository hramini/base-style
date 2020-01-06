import { Styles } from 'jss';
import { BaseStyle } from '../base/base-style-class';
import { IClasses } from '../base/base-style-interface';
import { JssStyle } from './jss-style-class';

describe('test JssStyle and BaseStyle together', () => {
  let baseStyle: BaseStyle<Styles>;
  let jssStyle: JssStyle;

  beforeAll(() => {
    jssStyle = JssStyle.getInstance();
    baseStyle = new BaseStyle<Styles>(jssStyle);
  });

  test('test #addStyles', () => {
    baseStyle.addStyles({
      testClass: {
        color: 'blue'
      }
    });
    expect(jssStyle.getStyles().testClass.color).toBe('blue');
  });

  test('test #createClasses', () => {
    const classes: IClasses = baseStyle.createClasses();
    expect(classes.testClass).toBeDefined();
  });

  test('test #createClasses with generalStyle', () => {
    jssStyle.setGeneralStyles({
      testGeneralClass: {
        backColor: 'green'
      }
    });
    baseStyle.addStyles({
      testClass: {
        color: 'blue'
      }
    });
    const classes: IClasses = baseStyle.createClasses();
    expect(classes.testGeneralClass).toBeDefined();
  });

  test('test #attachToHtml', () => {
    baseStyle.attachToHtml();
  });
});
