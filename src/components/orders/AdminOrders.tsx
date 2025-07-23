"use client";

import { useOrders } from "@/src/hooks/useOrders";
import React from "react";
import { CardOrder } from "./CardOrder";
import { usePage } from "@/src/hooks/usePage";
import { ButtonsPage } from "../ButtonsPage";

export const AdminOrders = () => {
  const { ordenesCompra, isLoadingOrdenCompra } = useOrders();

  const {
    paginaActual,
    paginasTotales,
    handleAvanzarPagina,
    handleRetrocederPagina,
    datosPaginados,
  } = usePage(6, ordenesCompra);

  return (
    <div className="bg-[color:var(--color-gray-10)] shadow-[inset_20px_0px_10px_-15px_rgba(0,0,0,0.1)] h-12/24 overflow-x-hidden flex flex-col items-center overflow-y-scroll justify-between py-3 scrollbar-custom">
      <div className="flex flex-col w-full items-center justify-start gap-3">
        {datosPaginados.map((orden) => (
          <CardOrder
            key={orden.id}
            ordenCompra={orden}
            isLoadingOrdenCompra={isLoadingOrdenCompra}
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
