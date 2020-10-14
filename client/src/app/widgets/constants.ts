import { DonutWidgetComponent } from './donut-widget/donut-widget.component';
import { LayoutType } from './interfaces/layout-type.enum';
import { ProgressWidgetComponent } from './progress-widget/progress-widget.component';
import { SimpleWidgetComponent } from './simple-widget/simple-widget.component';

export const Constants = {

  WidgetOrder: [
    { field: 'type', title: 'types', breakdownData: true, component: SimpleWidgetComponent },
    { field: 'severity', title: 'severities', breakdownData: false, component: DonutWidgetComponent },
    { field: 'sourceType', title: 'sources %', breakdownData: true, component: ProgressWidgetComponent }
  ],

  NetworkOrder: [
    { field: 'ClearWeb', title: 'clear web' },
    { field: 'DarkWeb', title: 'dark web' }
  ],

  WidgetLayout: new Map<string, LayoutType>([
    ['type', LayoutType.TABLE],
    ['sourceType', LayoutType.ROW],
    ['severity', LayoutType.CHART]
  ])
};
