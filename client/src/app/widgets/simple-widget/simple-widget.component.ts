import { Component, Input, OnInit } from '@angular/core';
import { WidgetData } from '../interfaces/widget-data.interface';
import { chain } from 'lodash';

@Component({
  selector: 'app-simple-widget',
  templateUrl: './simple-widget.component.html',
  styleUrls: ['./simple-widget.component.scss']
})
export class SimpleWidgetComponent implements OnInit {
  @Input() data: WidgetData;
  count;

  constructor() { }

  ngOnInit() {
    this.initChart();
  }

  initChart() {
    this.count = chain(this.data).values().first().value();
  }

}
