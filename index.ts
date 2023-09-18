//Environment Variables
import dotenv from 'dotenv';
import server1 from './src/server';
import { LogError, LogSuccess } from './src/utils/logger';
import { error } from 'console';

// Configuration the .env file
dotenv.config();

const port = process.env.PORT || 8000

//* Execute SERVER

server1.listen(port, () => {
  LogSuccess(`[SERVER ON]: Running in http://localhost:${port}/api`);
});

//* Control SERVER ERROR
server1.on('error', (error: any) => {
  LogError(`[SERVER ERROR]: ${error} `)
});
