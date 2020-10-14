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
import { WidgetOrder } from './interfaces/widget-order.interface';
import { Constants } from './constants';

@Injectable()
export class WidgetService {

  constructor(
    private http: HttpClient,
  ) { }

  getAlerts() {

    return this.http.get(environment.alertsUrl).pipe(
      map(data => {
        const mapped = chain(data).keys().map((_, ntIndex) => {
          const networkType = Constants.NetworkOrder[ntIndex];
          const ntObject = data[networkType.field];
          return keys(ntObject).map((_, tIndex) => {
            return {
              title: `${networkType.title} ${Constants.WidgetOrder[tIndex].title}`,
              widgets: this.mapToComponentData(ntObject[Constants.WidgetOrder[tIndex].field], Constants.WidgetOrder[tIndex]),
              layout: Constants.WidgetLayout.get(Constants.WidgetOrder[tIndex].field)
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
