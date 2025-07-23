import { IEstadoDescuento } from "./enums/IEstadoDescuento";

export interface IDescuento {
  id?: number;
  nombre: string,
  fechaInicio: string;
  fechaFin: string;
  descuento: number;
  estado: boolean;
  estadoDescuento: IEstadoDescuento
}