import { Injectable } from '@angular/core';
import { DonutWidgetComponent } from '../donut-widget/donut-widget.component';
import { ProgressWidgetComponent } from '../progress-widget/progress-widget.component';
import { SimpleWidgetComponent } from '../simple-widget/simple-widget.component';
import { WidgetItem } from './widget-item';
import { WidgetWrapper } from './widget-wrapper';

@Injectable()
export class WidgetService {
  getWidgets() {
    return [
      new WidgetWrapper(
        [new WidgetItem(SimpleWidgetComponent, { title: 'test', value: 10 })],
        'title 1'),

      new WidgetWrapper(
        [new WidgetItem(DonutWidgetComponent, {
          Low: 3,
          Medium: 6,
          High: 10
        })],
        'title 2'),
      new WidgetWrapper(
        [new WidgetItem(ProgressWidgetComponent, { title: 'test2', value: 20 })],
        'title 3')
    ];
  }
}
