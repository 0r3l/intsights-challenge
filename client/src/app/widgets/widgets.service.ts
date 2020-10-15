import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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

  getRisk() {
    return this.http.get(`${environment.baseUrl}/risk`).pipe(
      map(data => ({ SystemRiskMeter: data, gradientRange: ['#BBB158', '#4DAFD0'], hideTitle: true }))
    );
  }

  getAlerts() {

    return this.http.get(`${environment.baseUrl}/alerts`).pipe(
      map(data => {
        const mapped = chain(data).keys().map((_, ntIndex) => {
          const networkType = Constants.NetworkOrder[ntIndex];
          const ntObject = data[networkType.field];
          const totalSourceType = chain(ntObject.sourceType).values().sum().value();
          return keys(ntObject).map((_, tIndex) => {
            return {
              widgets: this.mapToComponentData(
                ntObject[Constants.WidgetOrder[tIndex].field],
                 Constants.WidgetOrder[tIndex],
                 totalSourceType),
              title: `${networkType.title} ${Constants.WidgetOrder[tIndex].title}`,
              layout: Constants.WidgetLayout.get(Constants.WidgetOrder[tIndex].field)
            };
          });
        }).flatten().value();
        console.log(mapped);
        return mapped;
      })
    );

  }

  private mapToComponentData(data: {}, options: WidgetOrder, total: number) {
    if (options.breakdownData) {
      return keys(data).map(d => new WidgetItem(options.component, { [d]: data[d], total }));
    }
    return [new WidgetItem(options.component, data)];
  }
}
