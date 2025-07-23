import React, { FC } from "react";

interface IButtonsPage {
  paginaActual: number;
  paginasTotales: number;
  handleAvanzarPagina: () => void;
  handleRetrocederPagina: () => void;
}

export const ButtonsPage: FC<IButtonsPage> = ({
  paginaActual,
  paginasTotales,
  handleAvanzarPagina,
  handleRetrocederPagina,
}) => {
  return (
    <div className="flex items-center justify-center gap-4 mt-4">
      <button
        onClick={handleRetrocederPagina}
        disabled={paginaActual === 1}
        className={`px-3 py-1 rounded-md border-1 text-sm font-['Afacad-Medium']
      ${
        paginaActual === 1
          ? "bg-[color:var(--color-gray-20)] text-gray-400"
          : "bg-white hover:bg-[color:var(--color-gray-20)] text-black border-[color:var(--color-gray-30)]"
      }`}
      >
        Anterior
      </button>

      <p className="text-sm text-[color:var(--color-gray-50)] font-['Roboto-Regular']">
        Página <span className="font-semibold text-black">{paginaActual}</span>{" "}
        de <span className="font-semibold text-black">{paginasTotales}</span>
      </p>

      <button
        onClick={handleAvanzarPagina}
        disabled={paginaActual === paginasTotales}
        className={`px-3 py-1 rounded-md border-1 text-sm font-['Afacad-Medium']
      ${
        paginaActual === paginasTotales
          ? "bg-[color:var(--color-gray-20)] text-gray-400"
          : "bg-white hover:bg-[color:var(--color-gray-20)] text-black border-[color:var(--color-gray-30)]"
      }`}
      >
        Siguiente
      </button>
    </div>
  );
};
