import { AlertKey } from './alert-key.enum';
import { AggregatedAlerts } from './aggregated-alerts';

export interface StrengthCalculationOptions{
  aggregated: AggregatedAlerts;
  sectionSorted: string[];
  alertKey: AlertKey;
  formula: number[];
  count: number;
}
