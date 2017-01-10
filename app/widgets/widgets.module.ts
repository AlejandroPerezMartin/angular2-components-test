import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { WidgetOne } from './widget-one.component'
import { WidgetTwo } from './widget-two.component'

@NgModule({
    imports: [CommonModule],
    declarations: [WidgetOne, WidgetTwo],
    exports: [WidgetOne, WidgetTwo, CommonModule]
})

export class WidgetsModule {}
