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
var WidgetThree = (function () {
    function WidgetThree(renderer) {
        this.renderer = renderer;
        this.message = 'default value!';
    }
    WidgetThree.prototype.ngAfterViewInit = function () {
        this.renderer.invokeElementMethod(this.input.nativeElement, 'focus', [] // optional args, no necessary to pass
        );
    };
    return WidgetThree;
}());
__decorate([
    core_1.ViewChild('input'),
    __metadata("design:type", Object)
], WidgetThree.prototype, "input", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], WidgetThree.prototype, "message", void 0);
WidgetThree = __decorate([
    core_1.Component({
        selector: 'widget-three',
        template: "\n        <div>Widget three</div>\n        <input #input type=\"text\" [value]=\"message\">\n    "
    }),
    __metadata("design:paramtypes", [core_1.Renderer])
], WidgetThree);
exports.WidgetThree = WidgetThree;
