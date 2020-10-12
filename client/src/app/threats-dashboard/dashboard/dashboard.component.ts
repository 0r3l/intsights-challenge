import { Component, OnInit } from '@angular/core';
import { WidgetService } from '../../widgets/widget/widget.service';
import { IPan } from '../pan/types/pan.interface';


@Component({
  selector: 'app-threats-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  pans: IPan[];

  constructor(private widgetService: WidgetService) { }

  ngOnInit() {
    this.pans = this.widgetService.getGroupedAlerts();
  }

}
