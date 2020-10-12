import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpleWidgetComponent } from './simple-widget/simple-widget.component';
import { DonutWidgetComponent } from './donut-widget/donut-widget.component';
import { ProgressWidgetComponent } from './progress-widget/progress-widget.component';
import { WidgetService } from './widget/widget.service';
import { WidgetsWrapperComponent } from './widgets-wrapper/widgets-wrapper.component';
import { WidgetDirective } from './widget/widget.directive';

@NgModule({
  declarations: [
    SimpleWidgetComponent,
    DonutWidgetComponent,
    ProgressWidgetComponent,
    WidgetsWrapperComponent,
    WidgetDirective
  ],
  providers: [
    WidgetService
  ],
  imports: [
    CommonModule
  ],
  exports: [
    WidgetsWrapperComponent
  ],
  entryComponents: [ SimpleWidgetComponent, DonutWidgetComponent, ProgressWidgetComponent ]
})
export class WidgetsModule { }
