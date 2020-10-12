import { Injectable } from '@angular/core';
import { IPan } from '../../threats-dashboard/pan/types/pan.interface';
import { DonutWidgetComponent } from '../donut-widget/donut-widget.component';
import { ProgressWidgetComponent } from '../progress-widget/progress-widget.component';
import { SimpleWidgetComponent } from '../simple-widget/simple-widget.component';
import { WidgetItem } from './widget-item';

@Injectable()
export class WidgetService {

  clearwebSources = {
    widgets: [
      new WidgetItem(ProgressWidgetComponent, { title: 'test2', value: 20 }),
      new WidgetItem(ProgressWidgetComponent, { title: 'test3', value: 40 }),
    ],
    title: 'test'
  };

    getGroupedAlerts(): IPan[] {
      return [this.clearwebSources];
    }
  }
