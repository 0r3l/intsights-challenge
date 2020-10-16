import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpleWidgetComponent } from './simple-widget/simple-widget.component';
import { DonutWidgetComponent } from './donut-widget/donut-widget.component';
import { ProgressWidgetComponent } from './progress-widget/progress-widget.component';
import { WidgetService } from './widgets.service';
import { WidgetsWrapperComponent } from './widgets-wrapper/widgets-wrapper.component';
import { WidgetDirective } from './widget/widget.directive';
import { CamelToSpacePipe } from '../pipes/camel-to-space.pipe';
import { ReorderPipe } from '../pipes/reorder.pipe';

@NgModule({
  declarations: [
    SimpleWidgetComponent,
    DonutWidgetComponent,
    ProgressWidgetComponent,
    WidgetsWrapperComponent,
    WidgetDirective,
    CamelToSpacePipe,
    ReorderPipe
  ],
  providers: [
    WidgetService
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    WidgetsWrapperComponent,
    ProgressWidgetComponent
  ],
  entryComponents: [ SimpleWidgetComponent, DonutWidgetComponent, ProgressWidgetComponent ]
})
export class WidgetsModule { }
