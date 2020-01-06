import { Styles } from 'jss';
import { IClasses } from '../base/base-style-interface';
import { JssStyle } from './jss-style-class';

describe('testing the JssStyle class', () => {
  let jssStyle: JssStyle;
  let classes: IClasses;
  let style: Styles;

  beforeAll(() => {
    jssStyle = JssStyle.getInstance();

    style = {
      testClass: {
        backgroundColor: 'red'
      }
    };
  });

  test('#getInstance', () => {
    const jssStyleFirstInstance: JssStyle = JssStyle.getInstance();
    jssStyleFirstInstance.addStyles({
      testClass: {
        testStyle: 'testValue'
      }
    });
    const jssStyleSecondInstance: JssStyle = JssStyle.getInstance();
    const styles: Styles = jssStyleSecondInstance.getStyles();
    expect(styles.testClass.testStyle).toBe('testValue');
  });

  test('#addStyles', () => {
    jssStyle.addStyles(style);
    expect(jssStyle.getStyles().testClass.backgroundColor).toBe('red');
  });

  test('#createClasses', () => {
    jssStyle.addStyles(style);
    classes = jssStyle.createClasses();
    expect(classes.testClass).toBeDefined();
  });

  test('#setGeneralStyles - styles check', () => {
    jssStyle.setGeneralStyles({
      testGeneralClass: {
        testGeneralStyle: 'testGeneralValue'
      }
    });
    const styles: Styles = jssStyle.getStyles();
    expect(styles.testGeneralClass.testGeneralStyle).toBe('testGeneralValue');
  });

  test('#setGeneralStyles - classes check', () => {
    jssStyle.setGeneralStyles({
      testGeneralClass: {
        testGeneralStyle: 'testGeneralValue'
      }
    });
    const classes: IClasses = jssStyle.getGeneralClasses();
    expect(classes.testGeneralClass).toBeDefined();
  });

  test('#attachToHtml', () => {});
});
