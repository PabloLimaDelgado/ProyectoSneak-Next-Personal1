"use client";

import { CardProduct } from "./ui/CardProduct";
import { useProducts } from "../hooks/useProducts";
import { usePage } from "../hooks/usePage";
import { ButtonsPage } from "./ButtonsPage";

export const AdminProducts = () => {
  const { detalles, productos, isLoadingProductos, isLoadingDetalles } =
    useProducts();

  const {
    paginaActual,
    paginasTotales,
    handleAvanzarPagina,
    handleRetrocederPagina,
    datosPaginados,
  } = usePage(6, productos);

  return (
    <div className="bg-[color:var(--color-gray-10)] shadow-[inset_20px_0px_10px_-15px_rgba(0,0,0,0.1)] h-17/24 overflow-x-hidden flex flex-col items-center overflow-y-scroll justify-between py-3 scrollbar-custom">
      <div className="flex flex-col w-full items-center justify-start gap-3">
        {datosPaginados.map((producto) => (
          <CardProduct
            key={producto.id}
            producto={producto}
            detalles={detalles}
            isLoadingProductos={isLoadingProductos}
            isLoadingDetalles={isLoadingDetalles}
          />
        ))}
      </div>

      <ButtonsPage
        paginaActual={paginaActual}
        paginasTotales={paginasTotales}
        handleAvanzarPagina={handleAvanzarPagina}
        handleRetrocederPagina={handleRetrocederPagina}
      />
    </div>
  );
};
