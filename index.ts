import express, { Express, Request, Response } from "express";
import dotenv from 'dotenv';

//Configuration the .env file
dotenv.config();

//Create express APP
const app: Express = express();
const port: string | number = process.env.PORT || 8080;

//Define the first route of app
app.get('/', (req: Request, res: Response) => {
  //Send HELLO WORLD!
  res.send('Welcome to my API Restfull: Express + TypeScript + Swagger + Mongoose');
});


//Execute APP ann Listen Request to PORT
app.listen(port, () => {
  console.log(`EXPRESS SERVER: Running at http://localhost:${port}`)
})