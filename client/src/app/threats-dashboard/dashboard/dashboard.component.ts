import { Component, OnInit } from '@angular/core';
import { WidgetItem } from '../widget/widget-item';
import { WidgetService } from '../widget/widget.service';

@Component({
  selector: 'app-threats-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  widgets: WidgetItem[];

  constructor(private widgetService: WidgetService) { }
  ngOnInit() {
    this.widgets = this.widgetService.getWidgets();
  }

}
