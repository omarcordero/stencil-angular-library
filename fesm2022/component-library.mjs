import * as i0 from '@angular/core';
import { Component, ChangeDetectionStrategy, NgModule } from '@angular/core';
import { __decorate } from 'tslib';
import { fromEvent } from 'rxjs';

/* eslint-disable */
/* tslint:disable */
const proxyInputs = (Cmp, inputs) => {
    const Prototype = Cmp.prototype;
    inputs.forEach((item) => {
        Object.defineProperty(Prototype, item, {
            get() {
                return this.el[item];
            },
            set(val) {
                this.z.runOutsideAngular(() => (this.el[item] = val));
            },
        });
    });
};
const proxyMethods = (Cmp, methods) => {
    const Prototype = Cmp.prototype;
    methods.forEach((methodName) => {
        Prototype[methodName] = function () {
            const args = arguments;
            return this.z.runOutsideAngular(() => this.el[methodName].apply(this.el, args));
        };
    });
};
const proxyOutputs = (instance, el, events) => {
    events.forEach((eventName) => (instance[eventName] = fromEvent(el, eventName)));
};
const defineCustomElement = (tagName, customElement) => {
    if (customElement !== undefined && typeof customElements !== 'undefined' && !customElements.get(tagName)) {
        customElements.define(tagName, customElement);
    }
};
// tslint:disable-next-line: only-arrow-functions
function ProxyCmp(opts) {
    const decorator = function (cls) {
        const { defineCustomElementFn, inputs, methods } = opts;
        if (defineCustomElementFn !== undefined) {
            defineCustomElementFn();
        }
        if (inputs) {
            proxyInputs(cls, inputs);
        }
        if (methods) {
            proxyMethods(cls, methods);
        }
        return cls;
    };
    return decorator;
}

let ButtonComponent = class ButtonComponent {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: ButtonComponent, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.10", type: ButtonComponent, selector: "button-component", inputs: { text: "text" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
ButtonComponent = __decorate([
    ProxyCmp({
        inputs: ['text']
    })
], ButtonComponent);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: ButtonComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'button-component',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['text'],
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; } });
let MyComponent = class MyComponent {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: MyComponent, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.10", type: MyComponent, selector: "my-component", inputs: { first: "first", last: "last", middle: "middle" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
MyComponent = __decorate([
    ProxyCmp({
        inputs: ['first', 'last', 'middle']
    })
], MyComponent);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: MyComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'my-component',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['first', 'last', 'middle'],
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; } });

const DIRECTIVES = [
    ButtonComponent,
    MyComponent
];

class ComponentLibraryModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: ComponentLibraryModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.10", ngImport: i0, type: ComponentLibraryModule, declarations: [ButtonComponent, MyComponent], exports: [ButtonComponent, MyComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: ComponentLibraryModule }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: ComponentLibraryModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        ...DIRECTIVES
                    ],
                    imports: [],
                    exports: [
                        ...DIRECTIVES
                    ]
                }]
        }] });

/*
 * Public API Surface of component-library
 */

/**
 * Generated bundle index. Do not edit.
 */

export { ButtonComponent, ComponentLibraryModule, DIRECTIVES, MyComponent };
//# sourceMappingURL=component-library.mjs.map
