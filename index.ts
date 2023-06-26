import dotenv from 'dotenv';
import server from './src/server';
import { logSucces, logError } from './src/utils/logger';

//Configurating the .env file
dotenv.config();

const port = process.env.PORT || 8000;

//Execute server
server.listen(port, () => {
    logSucces(`[SERVER ON]: Running in http://localhost:${port}/api`)
});

//Control server error
server.on('error', (error) => {
    logError(`[SERVER ERROR]: ${error}`);
});
