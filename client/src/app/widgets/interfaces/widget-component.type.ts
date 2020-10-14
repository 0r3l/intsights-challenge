import { DonutWidgetComponent } from '../donut-widget/donut-widget.component';
import { ProgressWidgetComponent } from '../progress-widget/progress-widget.component';
import { SimpleWidgetComponent } from '../simple-widget/simple-widget.component';

export type WidgetComponent = ProgressWidgetComponent | DonutWidgetComponent | SimpleWidgetComponent;
export interface IWidgetComponent {
  initChart(data);
}
