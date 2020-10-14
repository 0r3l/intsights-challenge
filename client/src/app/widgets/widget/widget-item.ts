import { Type } from '@angular/core';
import { DashboardWidget } from '../interfaces/widget.type';

export class WidgetItem {
  constructor(public component: Type<any>, public data: DashboardWidget) {}
}
