import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ThreatsDashboardModule } from './threats-dashboard/threats-dashboard.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ThreatsDashboardModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
