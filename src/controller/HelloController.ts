import { BasicResponse } from "./types";
import { IHelloController } from "./interfaces";
import { logSucces } from "../utils/logger";

export class HelloController implements IHelloController {

    public async getMessage(name?: string | undefined): Promise<BasicResponse> {
        logSucces('[/api/hello] Get Request ');

        return {
            message: `Hola ${name || "mundo"}`
        }
    }
    
}