import { useAdmin } from "@/src/hooks/useAdmin";
import { usePage } from "@/src/hooks/usePage";
import React from "react";
import { ButtonsPage } from "../ButtonsPage";
import { CardAdmins } from "./CardAdmins";

export const AdminAdmins = () => {
  const { usuarios, isLoadingAdmins } = useAdmin();
  const {
    datosPaginados,
    paginaActual,
    paginasTotales,
    handleAvanzarPagina,
    handleRetrocederPagina,
  } = usePage(6, usuarios);

  return (
    <div className="bg-[color:var(--color-gray-10)] shadow-[inset_20px_0px_10px_-15px_rgba(0,0,0,0.1)] h-13/24 overflow-x-hidden flex flex-col items-center overflow-y-scroll justify-between py-3 scrollbar-custom">
      <div className="flex flex-col w-full items-center justify-start gap-3">
        {datosPaginados.map((admin) => (
          <CardAdmins
            key={admin.id}
            admin={admin}
            isLoadingAdmins={isLoadingAdmins}
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
