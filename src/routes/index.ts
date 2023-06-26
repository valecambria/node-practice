/* 
    Ruta raíz
    Redirecciona a los routers
*/
import express, { Request, Response } from "express";
import helloRouter from "./HelloRouter";
import { logInfo } from "../utils/logger";

// Instancia del Servidor
let server = express();

//Instancia del router
let rootRouter = express.Router();

//Para peticiones a http://localhost:8000/api
//GET : http://localhost:8000/api/  
rootRouter.get('/', (req: Request, res: Response) => {
    logInfo('GET: http://localhost:8000/api/')
    res.send('Hello')
})

//Redirecciones a rutas y controladores
server.use('/', rootRouter); //http://localhost:8000/api/ 
server.use('/hello', helloRouter); //http://localhost:8000/api/hello --> HelloRouter

export default server;