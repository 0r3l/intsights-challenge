import express from "express";
import { controller } from './controller';

const app = express();
const port = 1337; // default port to listen

// define a route handler for the default home page
app.get( "/alerts", controller.alerts);

// start the express server
app.listen( port, () => {
    console.log( `server started at http://localhost:${ port }` );
} );
