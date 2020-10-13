import { NetworkType } from './interfaces/network-type.enum';
import { chain, keys } from 'lodash';
import { Alert } from './interfaces/alert.interface';
import { AlertKey } from './interfaces/alert-key.enum';

class Service {

  constructor() {
    console.log('Creating Service');
  }

  async readJsonFile(path: string) {
    return import(path)
  }

  aggregate(json: Alert[]) {
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
    }, {})

  }





}

export const service = new Service();
