import { SourceType } from '../interfaces/source-type.enum';
import { AlertKey } from './alert-key.enum';
import { NetworkType } from './network-type.enum';
import { Severity } from './severity.enum';
import { Type } from './type.enum';

export interface AggregatedAlerts {
  [NetworkType.ClearWeb]: PartialAggregatedAlerts;
  [NetworkType.DarkWeb]: PartialAggregatedAlerts;
}

interface PartialAggregatedAlerts {
  [AlertKey.severity]: Map<Severity, number>,
  [AlertKey.type]: Map<Type, number>,
  [AlertKey.sourceType]: Map<SourceType, number>,
}
