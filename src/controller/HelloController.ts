import { BasicResponse } from "./types";
import { IHelloController } from "./interfaces";
import { LogSuccess } from "../utils/logger";
import { Get, Query } from "tsoa";
//el @ es xq lo configuramos en el tsconfig

//? creamos el controlador que implementa la interface IHelloController, por lo que debe tener su misma estructura interna con sus métodos
export class HelloController implements IHelloController {
  public async getMessage(name?: string | undefined): Promise<BasicResponse> {
    LogSuccess('[/api/hello] Get Request');

    return {
      message: `Hello, ${name || "Anonimus!! (controllers)"}`
    }

    //throw new Error("Method not implemented.");
  }

}
