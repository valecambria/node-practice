import express, { Express, Request, Response } from "express";

//Security
import cors from 'cors';
import helmet from 'helmet';

//TODO HTTPS

//Root Router
import rootRouter from '../routes';

//Create EXPRESS APP
const server: Express = express();

//Define server to use "/api" and use rootRouter from 'index.ts' in routes
//The API will be http://localhost:8000/api/... from now on
server.use(
    '/api',
    rootRouter
);

//Static Server
server.use(express.static('public'));

//TODO Mongoose connection

//Security configuration
server.use(helmet());
server.use(cors());

// Content Type Config
//* el extended sirve por si queremos añadir algunas propiedades mas,
//* con el limit limitamos los megas que puede enviar o recibir el servidor
server.use(express.urlencoded({extended: true, limit: '50mb'}));
server.use(express.json({limit: '50mb'}));

//Redirection Config
//http://localhost:8000 --> http://localhost:8000/api/
server.get('/', (req: Request, res: Response) => {
    res.redirect('/api');
});

export default server;