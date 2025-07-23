"use client";

import { IDetalle } from "@/src/lib/types/IDetalle";
import { IProducto } from "@/src/lib/types/IProducto";
import { FC, useEffect, useState } from "react";
import { CardDetalle } from "./CardDetalle";
import { ISexo } from "@/src/lib/types/enums/ISexo";
import {
  ChevronDown,
  House,
  Plus,
  SquarePen,
  Trash,
} from "@/public/icons/Icons";
import { AnimatePresence, motion } from "framer-motion";

interface ICardProduct {
  producto: IProducto;
  detalles: IDetalle[];
  isLoadingProductos: boolean;
  isLoadingDetalles: boolean;
}

export const CardProduct: FC<ICardProduct> = ({
  producto,
  detalles,
  isLoadingProductos,
  isLoadingDetalles,
}) => {
  const MotionChevronDown = motion(ChevronDown);

  const [openDetalle, setOpenDetalle] = useState<number | null>(null);
  const handleOpenDetalle = (productoId: number) => {
    setOpenDetalle((prevId) => (prevId === productoId ? null : productoId));
  };

  const getGenderColor = (sexo: ISexo): string => {
    return sexo === ISexo.MASCULINO
      ? "bg-cyan-100 text-cyan-800 hover:bg-cyan-200"
      : "bg-pink-100 text-pink-800 hover:bg-pink-200";
  };

  if (isLoadingDetalles || isLoadingProductos) {
    return (
      <div className="custom-div-skeleton " />
    );
  }

  return (
    <>
      <div className="bg-white w-23/24 rounded-md border-1 border-[color:var(--color-gray-30)]">
        <motion.div className="flex flex-col">
          <div className="flex flex-row gap-3 p-2 justify-between">
            <div className="flex flex-row items-center gap-3">
              <h1 className="font-['Roboto-Regular'] text-[color:var(--color-gray-40)] text-base border-r-1 pr-1.5 border-[color:var(--color-gray-30)]">
                ID: {producto.id}
              </h1>
              <h2 className="font-['Bebas_Neue'] text-3xl align-bottom text-black">
                {producto.nombre}
              </h2>
              <h2 className="font-['Afacad-Medium'] bg-[color:var(--color-gray-20)] p-0.5 px-2 rounded-full text-sm text-[color:var(--color-gray-50)]">
                {producto.tipoProducto}
              </h2>
              <h2
                className={`${getGenderColor(
                  producto.sexo
                )} font-['Afacad-Medium'] transition duration-100 ease-in p-0.5 px-2 rounded-full text-sm`}
              >
                {producto.sexo}
              </h2>
              <h2 className="bg-green-100 text-green-800 font-['Afacad-Medium'] transition duration-100 ease-in p-0.5 px-2 rounded-full text-sm">
                {producto.categoria.nombre}
              </h2>
            </div>

            <div className="flex flex-row gap-2">
              <SquarePen
                className="custom-icon-button text-black"
                strokeWidth={2}
              />
              <Trash
                className="custom-icon-button text-red-600"
                strokeWidth={2}
              />
              <Plus className="custom-icon-button text-black" strokeWidth={2} />
              <MotionChevronDown
                initial={false}
                animate={{
                  rotate: openDetalle === producto.id ? 180 : 0,
                }}
                onClick={() => {
                  handleOpenDetalle(producto.id ?? 0);
                }}
                className="text-black size-10 p-2.5 cursor-pointer hover:bg-[color:var(--color-gray-10)] rounded-sm transition duration-150 ease-in-out"
              />
            </div>
          </div>

          <AnimatePresence>
            {openDetalle === producto.id && (
              <motion.div
                key="detalles"
                initial={{ opacity: 0, height: 0, y: -10 }}
                animate={{ opacity: 1, height: "auto", y: 0 }}
                exit={{
                  opacity: 0,
                  y: -10,
                  transition: { duration: 0.25 },
                  transitionEnd: {
                    height: 0,
                  },
                }}
                transition={{ duration: 0.5, ease: [0.75, 0, 0.25, 1] }}
                className="m-2 p-4 bg-[color:var(--color-gray-10)] rounded-md"
              >
                <h2 className="text-lg font-['Roboto-Regular']">
                  Detalles del producto
                </h2>
                {detalles
                  .filter((detalle) => detalle.producto.id === producto.id)
                  .map((detalle) => (
                    <CardDetalle key={detalle.id} detalle={detalle} />
                  ))}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </>
  );
};
