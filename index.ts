import express, { type Express, type Request, type Response } from 'express'
import dotenv from 'dotenv'

// Configuration the .env file
dotenv.config()

// Create express APP
const app: Express = express()
const port: string | number = process.env.PORT ?? 8000

// Define the first route of app
app.get('/', (req: Request, res: Response) => {
  // Send HELLO WORLD!
  res.send('Welcome to my API Restfull: Express + Nodemon + Jest + TypeScript + Swagger + Mongoose!!')
})

app.get('/hello', (req: Request, res: Response) => {
  res.send('Welcome to GET ROUTE: Hello World! ')
})

// eslint-disable-next-line spaced-comment
//Execute APP ann Listen Request to PORT
app.listen(port, () => {
  console.log(`EXPRESS SERVER: Running at http://localhost:${port}`)
})
