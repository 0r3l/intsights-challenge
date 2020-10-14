import { NetworkType } from './interfaces/network-type.enum';
import { chain, keys } from 'lodash';
import { Alert } from './interfaces/alert.interface';
import { AlertKey } from './interfaces/alert-key.enum';
import { join } from 'path';
import { readFile } from 'fs';
import { promisify } from 'util';
import { AggregatedAlerts } from './interfaces/aggregated-alerts';

class Service {

  read = promisify(readFile);

  constructor() {
    console.log('Creating Service');
  }

  async readJsonFile(path = join(process.cwd(), 'assets/data.json')) {
    const content = await this.read(path, 'utf-8');
    return JSON.parse(content);
  }

  aggregate(json: Alert[]): AggregatedAlerts {
    const filterByNetworkType = (networkType) => chain(json).filter(a => a.networkType === networkType);
    const selectedAlertKeys = [AlertKey.severity, AlertKey.type, AlertKey.sourceType];
    return keys(NetworkType).reduce((acc, key) => {
      const byNetworkType = filterByNetworkType(key);
      const grouped = selectedAlertKeys.reduce((acc, alertKey) => {
        acc[alertKey] = byNetworkType.groupBy(alertKey).mapValues(a => a.length).value()
        return acc;
      }, {})
      acc[key] = grouped;
      return acc;
    }, {}) as AggregatedAlerts;

  }





}

export const service = new Service();
