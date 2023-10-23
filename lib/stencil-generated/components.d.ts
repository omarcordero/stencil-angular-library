import { ChangeDetectorRef, ElementRef, NgZone } from '@angular/core';
import { Components } from 'stencil-library';
import * as i0 from "@angular/core";
export declare class ButtonComponent {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<ButtonComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ButtonComponent, "button-component", never, { "text": { "alias": "text"; "required": false; }; }, {}, never, ["*"], false, never>;
}
export declare interface ButtonComponent extends Components.ButtonComponent {
}
export declare class MyComponent {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<MyComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MyComponent, "my-component", never, { "first": { "alias": "first"; "required": false; }; "last": { "alias": "last"; "required": false; }; "middle": { "alias": "middle"; "required": false; }; }, {}, never, ["*"], false, never>;
}
export declare interface MyComponent extends Components.MyComponent {
}
