export interface IBaseStyle<T> {
  addStyles(styles: T): void;
  createClasses(): IClasses;
  attachToHtml(): void;
}

export interface IClasses {
  [extraProps: string]: any;
}
