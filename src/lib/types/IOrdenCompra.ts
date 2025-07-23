import { IEstadoPedido } from "./enums/IEstadoPedido";
import { IDireccionDTO } from "./IDirecciones";
import { IOrdenCompraDetalle } from "./IOrdenCompraDetalle";
import { IUsuario } from "./IUsuario";

export interface IOrdenCompra {
  id?: number;
  usuario: IUsuario;
  total: number;
  fecha: string;
  direccion: IDireccionDTO;
  direccionUsuario: boolean;
  estado: boolean;
  ordenCompraDetalles?: IOrdenCompraDetalle[];
  estadoPedido: IEstadoPedido;
}
