import { BasicResponse } from "../types";

//! al definir routes en nuestra app de Node con Express debemos crear un controlador y en lo posible una interfaces paracontrolar la estructura
export interface IHelloController {
  getMessage(name?:string): Promise<BasicResponse>
  //podemos seguir agregando funciones aquí para este controlador
}

// name?:string sirve para decir que el tipo de la variable name es opcional
