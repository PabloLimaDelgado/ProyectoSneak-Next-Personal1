import { Percent, SquarePen, Trash } from "@/public/icons/Icons";
import { IEstadoDescuento } from "@/src/lib/types/enums/IEstadoDescuento";
import { IDescuento } from "@/src/lib/types/IDescuento";
import { FC } from "react";
import { DetailProductDiv } from "../DetailProductDiv";

interface ICardDiscount {
  descuento: IDescuento;
  isLoadingDescuento: boolean;
}

export const CardDiscount: FC<ICardDiscount> = ({
  descuento,
  isLoadingDescuento,
}) => {
  const getStateColor = (estadoPedido: IEstadoDescuento): string => {
    return estadoPedido === IEstadoDescuento.EXPIRADO
      ? "bg-red-100 hover:bg-red-200 text-red-800 px-1 rounded-md"
      : estadoPedido === IEstadoDescuento.PROGRAMADO
      ? "bg-blue-200 text-blue-900 hover:bg-blue-300 px-1 rounded-md"
      : estadoPedido === IEstadoDescuento.PAUSADO
      ? "bg-yellow-100 hover:bg-yellow-200 text-yellow-800 px-1 rounded-md"
      : "bg-green-100 hover:bg-green-200 text-green-800 px-1 rounded-md";
  };

  const getPorcentajeColor = (porcentaje: number): string => {
    return porcentaje >= 20
      ? "bg-red-100 hover:bg-red-200 text-red-800 px-2 rounded-md"
      : porcentaje >= 15
      ? "bg-orange-100 hover:bg-orange-200 text-orange-800 px-2 rounded-md"
      : porcentaje >= 10
      ? "bg-yellow-100 hover:bg-yellow-200 text-yellow-800 px-2 rounded-md"
      : "bg-green-100 hover:bg-green-200 text-green-800 px-2 rounded-md";
  };

  if (isLoadingDescuento) {
    return <div className="custom-div-skeleton " />;
  }

  return (
    <div className="flex flex-row items-center justify-start px-4 bg-white w-23/24 rounded-md border-1 border-[color:var(--color-gray-30)] hover:shadow-md transition ease-in-out 0.2">
      <div className="flex flex-row w-6/24 items-center gap-2 py-1 m-2 border-r-2 border-[color:var(--color-gray-30)] ">
        <Percent
          strokeWidth={2}
          className="bg-purple-100 text-purple-600 size-12 rounded-md p-2"
        />
        <div className="flex flex-col justify-center gap-1">
          <div className="flex flex-row items-center gap-2">
            <h1 className="font-['Bebas_Neue'] text-2xl">
              Descuento #{descuento.id}
            </h1>
            <h2
              className={`${getStateColor(
                descuento.estadoDescuento
              )} text-sm font-['Afacad-SemiBold']`}
            >
              {descuento.estadoDescuento}
            </h2>
          </div>
          <div>
            <h3 className="text-[color:var(--color-gray-50)] font-['Afacad-Regular'] text-lg">
              {descuento.nombre}
            </h3>
          </div>
        </div>
      </div>
      <div className="flex flex-row w-18/24 items-center justify-between">
        <div className="flex flex-row items-center justify-start gap-1.5">
          <DetailProductDiv
            titulo="Fecha Inicio"
            contenido={descuento.fechaInicio}
          />
          <DetailProductDiv titulo="Fecha Fin" contenido={descuento.fechaFin} />
          <div className="flex flex-col gap-0.5 items-center">
            <h2 className="font-['Afacad-Regular'] [color:var(--color-gray-50)]">
              Porcentaje
            </h2>
            <h3
              className={`${getPorcentajeColor(
                descuento.descuento
              )} text-base font-semibold`}
            >
              {descuento.descuento}%
            </h3>
          </div>
        </div>
        <div className="flex flex-row gap-2 items-center">
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
