import { Injectable } from '@angular/core';
import { DonutWidgetComponent } from '../donut-widget/donut-widget.component';
import { SimpleWidgetComponent } from '../simple-widget/simple-widget.component';
import { WidgetItem } from './widget-item';

@Injectable()
export class WidgetService {
  getWidgets() {
    return [
      new WidgetItem(SimpleWidgetComponent, [{title: 'Bombasto', count: 100}]),
      new WidgetItem(DonutWidgetComponent, [{title: 'Bombasto', count: 100}])
    ];
  }
}
