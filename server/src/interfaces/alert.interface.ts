import { AlertKey } from './alert-key.enum';
import { NetworkType } from './network-type.enum';
import { Severity } from './severity.enum';
import { SourceType } from './source-type.enum';
import { Type } from './type.enum';

export interface Alert {
  [AlertKey.date]: string;
  [AlertKey.severity]: Severity,
  [AlertKey.type]: Type,
  [AlertKey.sourceType]: SourceType,
  [AlertKey.networkType]: NetworkType
}
