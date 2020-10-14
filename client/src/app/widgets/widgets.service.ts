import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPan } from '../threats-dashboard/pan/interfaces/pan.interface';
import { DonutWidgetComponent } from './donut-widget/donut-widget.component';
import { ProgressWidgetComponent } from './progress-widget/progress-widget.component';
import { SimpleWidgetComponent } from './simple-widget/simple-widget.component';
import { WidgetItem } from './widget/widget-item';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { chain, keys } from 'lodash';
import { WidgetComponent } from './interfaces/widget-component.type';
import { WidgetOrder } from './interfaces/widget-order.interface';

@Injectable()
export class WidgetService {

  constructor(
    private http: HttpClient,
  ) { }

  getAlerts() {
    const widgetOrder: WidgetOrder[] = [
      { field: 'type', title: 'types', breakdownData: true, component: SimpleWidgetComponent },
      { field: 'severity', title: 'severities', breakdownData: false, component: DonutWidgetComponent },
      { field: 'sourceType', title: 'sources %', breakdownData: true, component: ProgressWidgetComponent }];

    const networkOrder = [
      { field: 'ClearWeb', title: 'clear web' },
      { field: 'DarkWeb', title: 'dark web' }
    ];

    return this.http.get(environment.alertsUrl).pipe(
      map(data => {
        const mapped = chain(data).keys().map((_, ntIndex) => {
          const networkType = networkOrder[ntIndex];
          const ntObject = data[networkType.field];
          return keys(ntObject).map((_, tIndex) => {
            return {
              title: `${networkType.title} ${widgetOrder[tIndex].title}`,
              widgets: this.mapToComponentData(ntObject[widgetOrder[tIndex].field], widgetOrder[tIndex])
            };
          });
        }).flatten().value();
        console.log(mapped);
        return mapped;
      })
    );

  }

  private mapToComponentData(data: {}, options: WidgetOrder) {
    if (options.breakdownData) {
      return keys(data).map(d => new WidgetItem(options.component, { [d]: data[d] }));
    }
    return [new WidgetItem(options.component, data)];
  }
}
