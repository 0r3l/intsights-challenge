import { Component, OnInit } from '@angular/core';
import { WidgetWrapper } from '../../widgets/widget/widget-wrapper';
import { WidgetService } from '../../widgets/widget/widget.service';


@Component({
  selector: 'app-threats-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  widgetWrappers: WidgetWrapper[];

  constructor(private widgetService: WidgetService) { }
  ngOnInit() {
    this.widgetWrappers = this.widgetService.getWidgets();
  }

}
