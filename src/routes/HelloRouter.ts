import express, { Request, Response } from "express";
import { HelloController } from "@/controller/HelloController";
import { LogInfo } from "@/utils/logger";

// Router from express 
let helloRouter = express.Router();

helloRouter.route('/')
  // GET =>  http://localhost:8000/api/hello?name=Ariel/
  .get(async (req: Request, res: Response) => {
    //Obtain a Query Param
    let name: any = req?.query?.name;
    LogInfo(`Query Param: ${name}`);
    // controller instance to execute method
    const controller: HelloController = new HelloController();

    //obtain response
    const response = await controller.getMessage(name);

    //send to the client the response
    return res.send(response);
  })

export default helloRouter;