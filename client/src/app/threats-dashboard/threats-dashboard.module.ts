import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PanComponent } from './pan/pan.component';
import { WidgetsModule } from '../widgets/widgets.module';
import { SystemRiskMeterComponent } from './system-risk-meter/system-risk-meter.component';




@NgModule({
  declarations: [
    DashboardComponent,
    PanComponent,
    SystemRiskMeterComponent,
  ],
  imports: [
    CommonModule,
    WidgetsModule
  ],
  providers: [],
  exports: [
    DashboardComponent
  ],

})
export class ThreatsDashboardModule { }
