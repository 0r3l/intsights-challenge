import { Request, Response } from 'express';
import { join } from 'path';
import { service } from './service'

class Controller {

  constructor() {
    console.log('Creating Controller');
  }

  async alerts(req: Request, res: Response) {
    const json = await service.readJsonFile(join(process.cwd(), 'assets/data.json'));
    const aggregated = service.aggregate(json);
    res.json(aggregated);
  }
}

export const controller = new Controller()
