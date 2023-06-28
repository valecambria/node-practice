import express, { Request, Response } from "express";
import { HelloController } from "../controller/HelloController";
import { logInfo } from "../utils/logger";
import { BasicResponse } from "@/controller/types";

let helloRouter = express.Router(); //accede al sistema de enrutado

helloRouter.route('/')
    .get(async (req: Request, res: Response) => {
        let name: any = req?.query?.name;
        logInfo(`Query param: ${name}`)
        //Instancia del controlador para ejecutar un método
        const controller: HelloController = new HelloController();
        //Obtener respuesta
        const response: BasicResponse = await controller.getMessage(name);
        //Enviar respuesta al cliente
        return res.send(response);
    })

    export default helloRouter;