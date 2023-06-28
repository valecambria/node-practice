import express, { Request, Response } from "express";
import { GoodbyeController } from "../controller/GoodbyeController";
import { logInfo } from "../utils/logger";
import { BasicDateResponse } from "@/controller/types";

let goodbyeRouter = express.Router(); //accedo al sistema de enrutado

goodbyeRouter.route('/')
    .get(async (req: Request, res: Response) => {
        let name: any = req?.query?.name;
        logInfo(`Query Params: ${name}`);
        const controller: GoodbyeController = new GoodbyeController();
        let response: BasicDateResponse = await controller.getMessage(name);
        res.send(response);
    })

    export default goodbyeRouter;