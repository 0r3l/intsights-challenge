
import { Alert } from './interfaces/alert.interface';
import { AggregatedAlerts } from './interfaces/aggregated-alerts';
import { service } from './service';
import { Severity } from './interfaces/severity.enum';
import { chain, values } from 'lodash';
import { AlertKey } from './interfaces/alert-key.enum';
import { StrengthCalculationOptions } from './interfaces/strength-calculation-options.interface';
import { Type } from './interfaces/type.enum';


class RiskMeterService {

  // Each "severity" gets a strength as follows: High - 100, Medium - 70, Low - 40
  severityStrengthFormula = [100, 40, 70];
  // Each "type" gets a strength as follows: VIP - 100, AttackIndication - 80, ExploitableData - 60, BrandSecurity - 40, DataLeakage - 20, Phishing - 10
  typeStrengthFormula = [80, 40, 20, 60, 10, 100];

  constructor() {
    console.log('Creating Risk Meter Service');
  }

  async getTopResult(n: number) {
    const json: Alert[] = await service.readJsonFile();
    const toMilli = (d: string) => new Date(d).getTime();
    json.sort((a, b) => toMilli(b.date) - toMilli(a.date));
    return json.slice(0, n);
  }

  async getRisk(count: number) {
    const topResults = await this.getTopResult(count);
    const aggregated: AggregatedAlerts = service.aggregate(topResults);

    const severityStrength = this.calculateStrength({
      aggregated,
      count,
      alertKey: AlertKey.severity,
      sectionSorted: values(Severity).sort(),
      formula: this.severityStrengthFormula
    });

    const typeStrength = this.calculateStrength({
      aggregated,
      count,
      alertKey: AlertKey.type,
      sectionSorted: values(Type).sort(),
      formula: this.typeStrengthFormula
    });

    return Math.round(
      Math.min(typeStrength, severityStrength) /
      Math.max(typeStrength, severityStrength) *
      100);
  }

  private calculateStrength(options: StrengthCalculationOptions) {
    return chain(options.sectionSorted)
      .map(s => {
        return options.aggregated.ClearWeb[options.alertKey][s] || 0 +
          options.aggregated.DarkWeb[options.alertKey][s] || 0
      })
      .reduce((acc, s, i) => s * options.formula[i] + acc, 0)
      .divide(options.count)
      .value();
  }

}

export const riskMeterService = new RiskMeterService();
