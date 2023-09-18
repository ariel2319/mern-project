import express, { Request, Response, Express } from "express";


//Security
import cors from 'cors';
import helmet from "helmet";

// TODO HTTPS

//Root Router
import rootRouter from '../routes';



// Create express APP(server)
const server1: Express = express()
//const port: string | number = process.env.PORT || 8000

// Define SERVER1 to use "/api" & use rootRouter from 'index.ts' in routes
// From this point onover: http://localhost:8000/api/...
server1.use(
  '/api',
  rootRouter
)

// TODO Mongoose Connection

// Security Config
server1.use(helmet());
server1.use(cors());

//COntent Type Config
server1.use(express.urlencoded({ extended: true, limit: '50mb' }));
server1.use(express.json({ limit: '50mb' }));

// * Redirection Config
// http://localhost:8000 => http://localhost:8000/api/

server1.get('/', (req: Request, res: Response) => {
  res.redirect('/api');
}) //! con esta petición redirecciono mi localhost:8000 directamente a la dirección de '/api/'

export default server1;