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
        <button (click)="moveComponent()">Move component</button>
        <button (click)="moveComponent()">Remove component</button>
        <div #container></div>
        <hr>
        <button (click)="createTemplate()">Create template</button>
        <template #template let-description="description">
            <h2>My {{description}} template</h2>
            <button>My {{description}} button</button>
        </template>
    `
})

export class HomeComponent {

    @ViewChild('container', {read: ViewContainerRef}) container;

    @ViewChild('template') template;

    widgetRef;

    constructor(
        private simpleService: SimpleService,
        private resolver: ComponentFactoryResolver
    ) {}

    ngAfterViewInit() {
        const widgetFactory = this.resolver.resolveComponentFactory(WidgetThree)
        this.container.createComponent(widgetFactory);
        this.container.createComponent(widgetFactory);
        this.container.createComponent(widgetFactory);

        this.widgetRef = this.container.createComponent(widgetFactory, 2); // number indicates order
        this.widgetRef.instance.message = "I'm third";
    }

    addComponent() {
        const widgetFactory = this.resolver.resolveComponentFactory(WidgetThree)
        this.container.createComponent(widgetFactory);

        this.widgetRef = this.container.createComponent(widgetFactory, 3); // number indicates order
        this.widgetRef.instance.message = "I'm fourth";
    }

    moveComponent() {
        const randomIndex = Math.floor(Math.random() * this.container.length);
        this.container.move(this.widgetRef.hostView, randomIndex);
    }

    removeComponent() {
        this.widgetRef.detach(2); // argument is the index
    }

    createTemplate() {
        this.container.createEmbeddedView(this.template, {
            description: 'amazing'
        });
    }

}
