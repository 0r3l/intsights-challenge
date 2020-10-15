import { MongoClient } from 'mongodb';

class Connection {
  // Create a new MongoClient
  private client: any;

  constructor() {
    console.log('Creating Connection');
    const url = `mongodb://${process.env.mongodb || 'localhost'}:27017`;
    // Create a new MongoClient
    this.client = new MongoClient(url, { useUnifiedTopology: true });
  }
  // Use connect method to connect to the Server
  async connect() {
    return new Promise((resolve, reject) => {
      this.client.connect((err, client) => {
        if (err) {
          reject(err);
        }

        resolve(client.db('insights'));
      });
    })
  }

  disconnect() {
    this.client.close();
  }
}

export const connection = new Connection();
