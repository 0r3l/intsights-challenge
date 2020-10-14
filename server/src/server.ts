import express from 'express';
import cors from 'cors';
import { controller } from './controller';

const app = express();
app.use(cors());
const port = 1337; // default port to listen

// define a route handler for the default home page
app.get( "/alerts", controller.alerts);

// start the express server
app.listen( port, () => {
    console.log( `server started at http://localhost:${ port }` );
} );
