import { Alert } from '../interfaces/alert.interface';
import { connection } from './connection';

class DalService {

  constructor() {
    console.log('Creating DalService');
  }

  async getAll() : Promise<Alert[]> {
    return this.pullData();
  }

  private async pullData(): Promise<Alert[]> {
    const db: any = await connection.connect();
    return new Promise((resolve, reject) => {
      db.collection('alerts').find({}, (err, cursor) => {
        if (err) {
          reject(err);
        }
        cursor.toArray((_, documents) =>
          resolve(documents)
        )
      })
    })
  }
}

export const dalService = new DalService();
