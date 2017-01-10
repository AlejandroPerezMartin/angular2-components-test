import { Component, Input } from '@angular/core'

@Component({
    selector: 'widget-one',
    template: `<div *ngIf="selected">Widget one message: {{message}}</div>`,
    styles: [`
        :host {
            color: red;
        }
    `]
})

export class WidgetOne {

    @Input() message = "";

    selected: boolean = true;
}
