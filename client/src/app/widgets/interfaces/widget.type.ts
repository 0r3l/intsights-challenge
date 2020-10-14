import { IDonut } from './donut.interface';
import { IProgress } from './progress.interface';
import { ISimple } from './widget-data.interface';

export type DashboardWidget = IDonut | IProgress | ISimple;
