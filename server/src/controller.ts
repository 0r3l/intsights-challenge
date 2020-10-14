import { Request, Response } from 'express';
import { service } from './service';
import { riskMeterService } from './risk-meter.service';

class Controller {

  constructor() {
    console.log('Creating Controller');
  }

  async alerts(_: Request, res: Response) {
    const json = await service.readJsonFile();
    const aggregated = service.aggregate(json);
    res.json(aggregated);
  }

  async risk(_, res: Response){
    const risk = await riskMeterService.getRisk(300);
    res.json(risk);
  }
}

export const controller = new Controller()
