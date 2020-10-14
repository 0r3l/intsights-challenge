import { WidgetComponent } from './widget-component.type';

export interface WidgetOrder {
  field: string;
  title: string;
  breakdownData: boolean;
  component: any // TODO: fix this;
}
