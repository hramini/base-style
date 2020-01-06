import { IBaseStyle, IClasses } from './base-style-interface';
export declare class BaseStyle<T> {
    private styleClass;
    constructor(styleClass: IBaseStyle<T>);
    addStyles(styles: T): void;
    createClasses(): IClasses;
    attachToHtml(): void;
}
