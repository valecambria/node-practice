import { BasicDateResponse } from "./types";
import { IHelloController } from "./interfaces";
import { logSucces } from "../utils/logger";

export class GoodbyeController implements IHelloController {
    public async getMessage(name?: string | undefined): Promise<BasicDateResponse> {
        logSucces('[/api/goodbye] Get Request ');
        return {
            message: `Goodbye ${name}`,
            Date: new Date()
        }
    }
    
}