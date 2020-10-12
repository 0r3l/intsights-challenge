import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpleWidgetComponent } from './simple-widget/simple-widget.component';
import { DonutWidgetComponent } from './donut-widget/donut-widget.component';
import { ProgressWidgetComponent } from './progress-widget/progress-widget.component';
import { WidgetService } from './widget/widget.service';
import { WidgetWrapperComponent } from './widget-wrapper/widget-wrapper.component';
import { WidgetDirective } from './widget/widget.directive';

@NgModule({
  declarations: [
    SimpleWidgetComponent,
    DonutWidgetComponent,
    ProgressWidgetComponent,
    WidgetWrapperComponent,
    WidgetDirective
  ],
  providers: [
    WidgetService
  ],
  imports: [
    CommonModule
  ],
  exports: [
    WidgetWrapperComponent
  ],
  entryComponents: [ SimpleWidgetComponent, DonutWidgetComponent, ProgressWidgetComponent ]
})
export class WidgetsModule { }
