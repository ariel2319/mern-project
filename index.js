const express = require('express')
const dotenv = require('dotenv')

//Configuration the .env file
dotenv.config();

//Create express APP
const app = express();
const port = process.env.PORT || 8080;

//Define the first route of app
app.get('/', (req, res) => {
  //Send HELLO WORLD!
  res.send('Welcome to my API Restfull: Express + TypeScript + Swagger + Mongoose');
});



//Execute APP ann Listen Request to PORT
app.listen(port, () => {
  console.log(`EXPRESS SERVER: Running at http://localhost:${port}`)
})