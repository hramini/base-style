import { Styles } from 'jss';
import { IBaseStyle, IClasses } from '../base/base-style-interface';
export declare class JssStyle implements IBaseStyle<Styles> {
    private static instance;
    private styles;
    private jss;
    private styleSheet;
    private classes;
    constructor();
    static getInstance(): JssStyle;
    addStyles(style: Styles): void;
    createClassesByStyles(): IClasses;
    attachToHtml(): void;
    getStyles(): Styles;
    getGeneralClasses(): Styles;
    setGeneralStyles(generalStyles: Styles): void;
    createClasses(): IClasses;
}
