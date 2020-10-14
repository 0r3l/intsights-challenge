import { riskMeterService } from './risk-meter.service';
describe('risk meter service', () => {
  test('should get top 300 result', async () => {
    const result = await riskMeterService.getTopResult(300);
    expect(result.length).toEqual(300);
    expect(new Date(result[0].date).getTime() > new Date(result[299].date).getTime()).toBeTruthy();
  });
  test('should get risk', async() => {
    const risk = await riskMeterService.getRisk(300);
    expect(risk).toBe(35);
  })
});
