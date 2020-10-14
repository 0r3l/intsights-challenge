import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { WidgetService } from '../../widgets/widgets.service';
import { IPan } from '../pan/interfaces/pan.interface';


@Component({
  selector: 'app-threats-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  pans$: Observable<IPan[]>;

  constructor(private widgetService: WidgetService) { }

  ngOnInit() {
    this.pans$ = this.widgetService.getAlerts();
  }

}
