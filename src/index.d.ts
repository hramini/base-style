import { Classes, Styles } from 'jss';
export declare class BaseStyle {
    private jss;
    private classes;
    private static instance;
    private styleSheet;
    constructor(generalStyles: Styles);
    static getInstance(generalStyles: Styles): BaseStyle;
    private getGeneralClasses;
    private createAndAttachStyleSheet;
    create(styles: Styles): Classes;
}
