import { IDetalle } from "@/src/lib/types/IDetalle";
import { FC } from "react";
import { DetailProductDiv } from "../DetailProductDiv";
import { Images, SquarePen, Trash } from "@/public/icons/Icons";

interface ICardDetalle {
  detalle: IDetalle;
}

export const CardDetalle: FC<ICardDetalle> = ({ detalle }) => {
  const getStockStatus = (stock: number): string => {
    if (stock === 0)
      return "bg-red-100 hover:bg-red-200 text-red-800 px-2 rounded-md";
    if (stock < 10)
      return "bg-yellow-100 hover:bg-yellow-200 text-yellow-800 px-2 rounded-md";
    return "bg-green-100 hover:bg-green-200 text-green-800 px-2 rounded-md";
  };

  return (
    <div className="grid grid-cols-8 bg-white my-2 p-1 rounded-md border-1 border-[color:var(--color-gray-30)]">
      <DetailProductDiv titulo="Detalle Id" contenido={String(detalle.id)} />
      <DetailProductDiv titulo="Talle" contenido={detalle.talle.talle} />
      <DetailProductDiv
        titulo="P. Compra"
        contenido={String(detalle.precioDTO.precioCompra)}
      />
      <DetailProductDiv
        titulo="P. Venta"
        contenido={String(detalle.precioDTO.precioVenta)}
      />
      <div className="flex flex-row gap-1 items-center">
        <h2 className="font-['Afacad-Regular'] [color:var(--color-gray-50)]">
          Stock
        </h2>
        <h3
          className={`${getStockStatus(
            Number(detalle.stock)
          )} text-sm font-semibold`}
        >
          {detalle.stock}
        </h3>
      </div>
      <DetailProductDiv titulo="Color" contenido={detalle.color} />
      <DetailProductDiv
        titulo="Descuento"
        contenido={`${String(detalle.precioDTO.descuento?.descuento ?? 0)}%`}
      />
      <div className="flex flex-row gap-1 items-center">
        <SquarePen className="custom-icon-button text-black" strokeWidth={2} />
        <Trash className="custom-icon-button text-red-600" strokeWidth={2} />
        <Images className="custom-icon-button text-black" strokeWidth={2} />
      </div>
    </div>
  );
};
