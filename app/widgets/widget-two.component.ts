import { Component } from '@angular/core'

@Component({
    selector: 'widget-two',
    template: `<div>Widget two<ng-content></ng-content></div>`,
    styles: [`
        :host {
            display: block;
            background: grey;
        }
    `]
})

export class WidgetTwo {}
