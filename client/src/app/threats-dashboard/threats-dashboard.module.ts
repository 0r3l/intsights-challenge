import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PanComponent } from './pan/pan.component';
import { WidgetsModule } from '../widgets/widgets.module';




@NgModule({
  declarations: [
    DashboardComponent,
    PanComponent,
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
