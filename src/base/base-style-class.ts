import { IBaseStyle, IClasses } from './base-style-interface';

export class BaseStyle<T> {
  constructor(private styleClass: IBaseStyle<T>) {}

  public addStyles(styles: T): void {
    this.styleClass.addStyles(styles);
  }

  public createClasses(): IClasses {
    return this.styleClass.createClasses();
  }

  public attachToHtml(): void {
    this.styleClass.attachToHtml();
  }
}
