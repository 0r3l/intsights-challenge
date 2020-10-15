import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { LayoutType } from '../../widgets/interfaces/layout-type.enum';
import { ProgressWidgetComponent } from '../../widgets/progress-widget/progress-widget.component';
import { WidgetItem } from '../../widgets/widget/widget-item';
import { WidgetService } from '../../widgets/widgets.service';
import { IPan } from '../pan/interfaces/pan.interface';


@Component({
  selector: 'app-threats-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {
  pans$: Observable<IPan[]>;
  subscriber: Subscription;
  rmData;

  constructor(private widgetService: WidgetService) { }

  ngOnInit() {
    this.pans$ = this.widgetService.getAlerts();
    this.subscriber = this.widgetService.getRisk().subscribe(data => this.rmData = data);
  }
  ngOnDestroy() {
    this.subscriber.unsubscribe();
  }

}
