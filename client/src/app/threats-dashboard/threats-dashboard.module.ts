import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DonutWidgetComponent } from './donut-widget/donut-widget.component';
import { ProgressWidgetComponent } from './progress-widget/progress-widget.component';
import { SimpleWidgetComponent } from './simple-widget/simple-widget.component';
import { PanComponent } from './pan/pan.component';
import { PanDirective } from './pan/pan.directive';
import { WidgetService } from './widget/widget.service';



@NgModule({
  declarations: [
    DashboardComponent,
    DonutWidgetComponent,
    ProgressWidgetComponent,
    SimpleWidgetComponent,
    PanComponent,
    PanDirective
  ],
  imports: [
    CommonModule
  ],
  providers: [WidgetService],
  exports: [
    DashboardComponent
  ],
  entryComponents: [ SimpleWidgetComponent, DonutWidgetComponent, ProgressWidgetComponent ]

})
export class ThreatsDashboardModule { }
