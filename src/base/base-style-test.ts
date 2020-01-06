import { BaseStyle } from './base-style-class';
import { IBaseStyle, IClasses } from './base-style-interface';

describe('tests for base-style-class', () => {
  let baseStyle: BaseStyle<string>;
  let testStyle: TestStyle;

  class TestStyle implements IBaseStyle<string> {
    private styles: string;
    private attached: boolean = false;

    public addStyles(styles: string) {
      this.styles = styles;
    }

    public createClasses(): IClasses {
      return {
        test: 'test'
      };
    }

    public attachToHtml(): void {
      this.attached = true;
    }

    public getStyles(): string {
      return this.styles;
    }

    public getAttached(): boolean {
      return this.attached;
    }
  }

  beforeAll(() => {
    testStyle = new TestStyle();
    baseStyle = new BaseStyle<string>(testStyle);
  });

  test('test #addStyles', () => {
    baseStyle.addStyles('test');
    expect(testStyle.getStyles()).toBe('test');
  });

  test('test #createClasses', () => {
    const classes: IClasses = baseStyle.createClasses();
    expect(classes.test).toBe('test');
  });

  test('test #attachToHtml', () => {
    baseStyle.attachToHtml();
    expect(testStyle.getAttached()).toBe(true);
  });
});
