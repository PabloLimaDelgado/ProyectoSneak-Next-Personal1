import { useEffect, useState } from "react";

export function usePage<T extends { estado?: boolean }>(
  itemsPorPagina: number,
  data: T[]
) {
  const [paginaActual, setPaginaActual] = useState<number>(1);
  const [paginasTotales, setPaginasTotales] = useState<number>(1);

  const objetoFiltrado = data.filter((item) => item.estado === true);

  useEffect(() => {
    const total = Math.max(
      1,
      Math.ceil(objetoFiltrado.length / itemsPorPagina)
    );
    setPaginasTotales(total);

    if (paginaActual > total) {
      setPaginaActual(total);
    }
  }, [objetoFiltrado.length, paginaActual, itemsPorPagina]);

  const datosPaginados = objetoFiltrado.slice(
    (paginaActual - 1) * itemsPorPagina,
    paginaActual * itemsPorPagina
  );

  const handleAvanzarPagina = () => {
    setPaginaActual((prev) => Math.min(prev + 1, paginasTotales));
  };

  const handleRetrocederPagina = () => {
    setPaginaActual((prev) => Math.max(prev - 1, 1));
  };

  return {
    datosPaginados,
    paginaActual,
    paginasTotales,
    handleAvanzarPagina,
    handleRetrocederPagina,
  };
}
