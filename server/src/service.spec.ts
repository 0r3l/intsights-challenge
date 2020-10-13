import { join } from 'path';
import { Alert } from './interfaces/alert.interface';
import { service } from './service';
describe('service', () => {
  test('should aggregate data by groups', async () => {
    const json: Alert[] = await service.readJsonFile(join(process.cwd(), 'assets/data.json'));
    const aggregated = service.aggregate(json);
    console.log(aggregated);
    expect(aggregated).toBe(
      {
        ClearWeb: {
          severity: { High: 173, Medium: 136, Low: 116 },
          type: {
            DataLeakage: 117,
            AttackIndication: 48,
            BrandSecurity: 94,
            Phishing: 100,
            vip: 58,
            ExploitableData: 8
          },
          sourceType: {
            ApplicationStores: 60,
            BlackMarkets: 68,
            HackingForums: 61,
            Others: 46,
            PasteSites: 58,
            SocialMedia: 132
          }
        },
        DarkWeb: {
          severity: { Medium: 143, High: 168, Low: 118 },
          type: {
            DataLeakage: 118,
            AttackIndication: 58,
            BrandSecurity: 93,
            Phishing: 88,
            vip: 49,
            ExploitableData: 23
          },
          sourceType: {
            ApplicationStores: 70,
            BlackMarkets: 77,
            Others: 49,
            PasteSites: 56,
            SocialMedia: 132,
            HackingForums: 45
          }
        }
      }
    );
  })
});
