import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { WidgetOne } from './widget-one.component'
import { WidgetTwo } from './widget-two.component'
import { WidgetThree } from './widget-three.component'

@NgModule({
    imports: [CommonModule],
    declarations: [WidgetOne, WidgetTwo, WidgetThree],
    entryComponents: [WidgetThree], // make sure it's available even if not used
    exports: [WidgetOne, WidgetTwo, WidgetThree, CommonModule]
})

export class WidgetsModule {}
