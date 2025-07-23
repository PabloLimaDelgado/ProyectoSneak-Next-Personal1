import { IRol } from "./enums/IRol";
import { IDireccionDTO } from "./IDirecciones";

export interface IAuth {
  id: number;
  nombre: string;
  passwrod: string;
  dni: string;
  estado: boolean;
  rol: IRol;
  mail: string;
  direcciones: IDireccionDTO[];
  token: string;
}
