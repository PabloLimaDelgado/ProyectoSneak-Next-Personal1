import {
  Calendar,
  DeployedCode,
  Eye,
  Plus,
  ShoppingCart,
  SquarePen,
  Trash,
  UserIcon,
  Users,
} from "@/public/icons/Icons";
import { IEstadoPedido } from "@/src/lib/types/enums/IEstadoPedido";
import { IOrdenCompra } from "@/src/lib/types/IOrdenCompra";
import React, { FC } from "react";

interface ICardOrder {
  ordenCompra: IOrdenCompra;
  isLoadingOrdenCompra: boolean;
}

export const CardOrder: FC<ICardOrder> = ({
  ordenCompra,
  isLoadingOrdenCompra,
}) => {
  const infoOrden = [
    {
      texto: ordenCompra.usuario.nombre,
      icon: (
        <UserIcon
          strokeWidth={2}
          className="size-5 text-[color:var(--color-gray-40)]"
        />
      ),
    },
    {
      texto: ordenCompra.fecha,
      icon: (
        <Calendar
          strokeWidth={2}
          className="size-5 text-[color:var(--color-gray-40)]"
        />
      ),
    },
    {
      texto: ordenCompra.ordenCompraDetalles?.length,
      icon: (
        <DeployedCode
          strokeWidth={2}
          className="size-5 text-[color:var(--color-gray-40)]"
        />
      ),
    },
  ];

  const getStateColor = (estadoPedido: IEstadoPedido): string => {
    return estadoPedido === IEstadoPedido.CANCELADO
      ? "bg-red-100 hover:bg-red-200 text-red-800 px-1 rounded-md"
      : estadoPedido === IEstadoPedido.PROCESANDO
      ? "bg-[#bfdbfe] text-blue-900 hover:bg-blue-300 px-1 rounded-md"
      : estadoPedido === IEstadoPedido.PENDIENTE
      ? "bg-yellow-100 hover:bg-yellow-200 text-yellow-800 px-1 rounded-md"
      : "bg-green-100 hover:bg-green-200 text-green-800 px-1 rounded-md";
  };

  if (isLoadingOrdenCompra) {
    return <div className="custom-div-skeleton " />;
  }

  return (
    <div className="flex flex-row items-center justify-start px-4 bg-white w-23/24 rounded-md border-1 border-[color:var(--color-gray-30)] hover:shadow-md transition ease-in-out 0.2">
      <div className="flex flex-row w-8/24 items-center gap-2 py-1 m-2 border-r-2 border-[color:var(--color-gray-30)] ">
        <ShoppingCart
          className="bg-blue-200 text-blue-900 size-12 rounded-md p-2"
          strokeWidth={2}
        />
        <div className="flex flex-col justify-center gap-1 py-1">
          <div className="flex flex-row items-center gap-2">
            <h1 className="font-['Bebas_Neue'] text-2xl">
              Pedido #{ordenCompra.id}
            </h1>
            <h2
              className={`${getStateColor(
                ordenCompra.estadoPedido
              )} text-sm font-['Afacad-SemiBold']`}
            >
              {ordenCompra.estadoPedido}
            </h2>
          </div>
          <div className="flex flex-row">
            {infoOrden.map((info) => (
              <div
                key={info.texto}
                className="flex flex-row items-center justify-center pr-2.5"
              >
                {info.icon}
                <h3 className="text-[color:var(--color-gray-40)] font-['Afacad-Regular'] text-lg">
                  {String(info.texto)}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-row w-16/24 items-center justify-between">
        <div>
          <h1 className="font-['Bebas_Neue'] text-2xl text-[color:var(--color-gray-40)]">
            Total:{" "}
          </h1>
          <h2 className="text-3xl font-['Afacad-Bold'] text-green-600">
            ${ordenCompra.total}
          </h2>
        </div>
        <div className="flex flex-row gap-2 items-center">
          <Eye className="custom-icon-button text-black" strokeWidth={2} />
          <SquarePen
            className="custom-icon-button text-black"
            strokeWidth={2}
          />
          <Trash className="custom-icon-button text-red-600" strokeWidth={2} />
        </div>
      </div>
    </div>
  );
};
