import { Classes, create, Jss, Styles, StyleSheet } from 'jss';
import camelCase from 'jss-plugin-camel-case';
import global from 'jss-plugin-global';
import nested from 'jss-plugin-nested';
import preset from 'jss-preset-default';

export class BaseStyle {
  private jss: Jss;
  private classes: Classes = {};
  private static instance: BaseStyle;
  private styleSheet: StyleSheet;

  constructor(generalStyles: Styles) {
    this.jss = create();
    this.jss.setup(preset());
    this.jss.use(camelCase(), global(), nested());
    this.classes = this.createAndAttachStyleSheet(generalStyles);
  }

  public static getInstance(generalStyles: Styles): BaseStyle {
    this.instance = new BaseStyle(generalStyles);
    return this.instance;
  }

  private getGeneralClasses(): Classes {
    return this.classes;
  }

  private createAndAttachStyleSheet(styles: Styles): Classes {
    if (styles) {
      this.styleSheet = this.jss.createStyleSheet(styles);
      this.styleSheet.attach();
      return this.styleSheet.classes;
    }
    return {};
  }

  public create(styles: Styles): Classes {
    const componentClasses: Classes = this.createAndAttachStyleSheet(styles);
    const generalClasses: Classes = this.getGeneralClasses();
    return { ...componentClasses, ...generalClasses };
  }
}
