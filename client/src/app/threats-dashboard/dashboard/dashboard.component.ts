import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
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
export class DashboardComponent implements OnInit {
  pans$: Observable<IPan[]>;
  rmData = { SystemRiskMeter: 60, gradientRange: ['#BBB158', '#4DAFD0'], hideTitle: true };

  constructor(private widgetService: WidgetService) { }

  ngOnInit() {
    this.pans$ = this.widgetService.getAlerts();
  }

}
