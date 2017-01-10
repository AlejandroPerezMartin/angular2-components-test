"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var services_module_1 = require("../services/services.module");
var widget_three_component_1 = require("../widgets/widget-three.component");
var HomeComponent = (function () {
    function HomeComponent(simpleService, resolver) {
        this.simpleService = simpleService;
        this.resolver = resolver;
    }
    HomeComponent.prototype.ngAfterViewInit = function () {
        var widgetFactory = this.resolver.resolveComponentFactory(widget_three_component_1.WidgetThree);
        this.container.createComponent(widgetFactory);
        this.container.createComponent(widgetFactory);
        this.container.createComponent(widgetFactory);
        var widgetRef = this.container.createComponent(widgetFactory, 2); // number indicates order
        widgetRef.instance.message = "I'm third";
    };
    HomeComponent.prototype.addComponent = function () {
        var widgetFactory = this.resolver.resolveComponentFactory(widget_three_component_1.WidgetThree);
        this.container.createComponent(widgetFactory);
        var widgetRef = this.container.createComponent(widgetFactory, 3); // number indicates order
        widgetRef.instance.message = "I'm fourth";
    };
    return HomeComponent;
}());
__decorate([
    core_1.ViewChild('container', { read: core_1.ViewContainerRef }),
    __metadata("design:type", Object)
], HomeComponent.prototype, "container", void 0);
HomeComponent = __decorate([
    core_1.Component({
        selector: 'home',
        template: "\n        <div>I'm a home component</div>\n        <widget-one [message]=\"simpleService.message\"></widget-one>\n        <widget-two>\n            <p>widget two content</p>\n        </widget-two>\n        <button (click)=\"addComponent()\">Add component</button>\n        <div #container></div>\n    "
    }),
    __metadata("design:paramtypes", [services_module_1.SimpleService,
        core_1.ComponentFactoryResolver])
], HomeComponent);
exports.HomeComponent = HomeComponent;
