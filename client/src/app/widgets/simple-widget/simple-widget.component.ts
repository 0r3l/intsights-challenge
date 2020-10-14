import { Component, Input, OnInit } from '@angular/core';
import { IWidgetComponent } from '../interfaces/widget-component.type';
import { WidgetData } from '../interfaces/widget-data.interface';
import { chain } from 'lodash';

@Component({
  selector: 'app-simple-widget',
  templateUrl: './simple-widget.component.html',
  styleUrls: ['./simple-widget.component.scss']
})
export class SimpleWidgetComponent implements OnInit, IWidgetComponent {
  @Input() data: WidgetData;
  count;

  constructor() { }

  ngOnInit() {
    this.initChart();
  }

  initChart() {
    const key = chain(this.data).keys().first().value();
    const keyGrouped = key.match(/[A-Z][a-z]+/g);
    this.count = chain(this.data).values().first().value();
  }

}
