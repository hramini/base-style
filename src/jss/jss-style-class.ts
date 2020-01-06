import { create, Jss, Styles, StyleSheet } from 'jss';
import jssPluginSyntaxCamelCase from 'jss-plugin-camel-case';
import jssPluginSyntaxGlobal from 'jss-plugin-global';
import jssPluginSyntaxNested from 'jss-plugin-nested';
import jssPresetDefault from 'jss-preset-default';
import { IBaseStyle, IClasses } from '../base/base-style-interface';

export class JssStyle implements IBaseStyle<Styles> {
  private static instance: JssStyle;
  private styles: Styles;
  private jss: Jss;
  private styleSheet: StyleSheet;
  private classes: IClasses;

  constructor() {
    this.jss = create();
    this.jss.setup(jssPresetDefault());
    this.jss.use(jssPluginSyntaxCamelCase(), jssPluginSyntaxGlobal(), jssPluginSyntaxNested());
  }

  public static getInstance(): JssStyle {
    if (!this.instance) {
      this.instance = new JssStyle();
    }
    return this.instance;
  }

  public addStyles(style: Styles): void {
    this.styles = style;
  }

  public createClassesByStyles(): IClasses {
    if (this.styles) {
      this.styleSheet = this.jss.createStyleSheet(this.styles);
      return this.styleSheet.classes;
    }
    return {};
  }

  public attachToHtml(): void {
    this.styleSheet.attach();
  }

  public getStyles(): Styles {
    return this.styles;
  }

  public getGeneralClasses(): Styles {
    return this.classes;
  }

  public setGeneralStyles(generalStyles: Styles): void {
    this.addStyles(generalStyles);
    this.classes = this.createClassesByStyles();
    this.attachToHtml();
  }

  public createClasses(): IClasses {
    const generalClasses: IClasses = this.getGeneralClasses();
    const componentClasses: IClasses = this.createClassesByStyles();
    return { ...componentClasses, ...generalClasses };
  }
}
