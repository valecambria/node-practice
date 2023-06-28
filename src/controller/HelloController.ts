import { Get, Query, Route, Tags } from "tsoa";
import { BasicResponse } from "./types";
import { IHelloController } from "./interfaces";
import { logSucces } from "../utils/logger";

@Route("/api/hello")
@Tags("HelloController")
export class HelloController implements IHelloController {
    /**
     * Endpoint to retrieve a message "Hello {name} in JSON"
     * @param { string | undefined } name //lo usa swagger para documentar y generar la informacion
     * @returns { BasicResponse }  
     */
    @Get("/")
    public async getMessage(@Query() name?: string | undefined): Promise<BasicResponse> {
        logSucces('[/api/hello] Get Request ');

        return {
            message: `Hola ${name || "mundo"}`
        }
    }
    
}