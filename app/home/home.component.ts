import { Component } from '@angular/core'
import { SimpleService } from '../services/services.module'

@Component({
    selector: 'home',
    template: `
        <div>I'm a home component</div>
        <widget-one [message]="simpleService.message"></widget-one>
        <widget-two>
            <p>widget two content</p>
        </widget-two>
    `
})

export class HomeComponent {
    constructor(private simpleService: SimpleService) {}
}
