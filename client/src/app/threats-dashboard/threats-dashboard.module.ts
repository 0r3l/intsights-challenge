import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
    WidgetsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  exports: [
    DashboardComponent
  ],

})
export class ThreatsDashboardModule { }
