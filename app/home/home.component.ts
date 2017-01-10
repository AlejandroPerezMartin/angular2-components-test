import { Component, ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core'
import { SimpleService } from '../services/services.module'
import { WidgetThree } from '../widgets/widget-three.component'

@Component({
    selector: 'home',
    template: `
        <div>I'm a home component</div>
        <widget-one [message]="simpleService.message"></widget-one>
        <widget-two>
            <p>widget two content</p>
        </widget-two>
        <button (click)="addComponent()">Add component</button>
        <div #container></div>
    `
})

export class HomeComponent {

    @ViewChild('container', {read: ViewContainerRef}) container;

    constructor(
        private simpleService: SimpleService,
        private resolver: ComponentFactoryResolver
    ) {}

    ngAfterViewInit() {
        const widgetFactory = this.resolver.resolveComponentFactory(WidgetThree)
        this.container.createComponent(widgetFactory);
        this.container.createComponent(widgetFactory);
        this.container.createComponent(widgetFactory);

        const widgetRef = this.container.createComponent(widgetFactory, 2); // number indicates order
        widgetRef.instance.message = "I'm third";
    }

    addComponent() {
        const widgetFactory = this.resolver.resolveComponentFactory(WidgetThree)
        this.container.createComponent(widgetFactory);

        const widgetRef = this.container.createComponent(widgetFactory, 3); // number indicates order
        widgetRef.instance.message = "I'm fourth";
    }

}
