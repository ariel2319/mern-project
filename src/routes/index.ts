/**
 * Root Router
 * Redirections to Routers
 */

// llegan las peticiones de /api y aquí decide quien las va a ejecutar..

import express, { Request, Response, Router } from "express";
import helloRouter from "./HelloRouter";
import { LogInfo } from "@/utils/logger";

// instanciar el server
// server instance
let app = express();

// router instance
let rootRouter = express.Router();


//Activate for request http://localhost:8000/api
rootRouter.get('/', (req: Request, res: Response) => {
  LogInfo('GET: http://localhost:8000/api/');
  res.send('Welcome to my API Restful from rootRouter');
})

//redirections to Routers & Controllers
app.use('/', rootRouter); // => http://localhost:8000/api
app.use('/hello', helloRouter); // => http://localhost:8000/api/hello
//add more routes to the app

export default app;