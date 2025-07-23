import { useDiscounts } from "@/src/hooks/useDiscounts";
import { usePage } from "@/src/hooks/usePage";
import { CardDiscount } from "./CardDiscount";
import { ButtonsPage } from "../ButtonsPage";

export const AdminDiscount = () => {
  const { descuentos, isLoadingDescuento } = useDiscounts();
  const {
    datosPaginados,
    paginaActual,
    paginasTotales,
    handleAvanzarPagina,
    handleRetrocederPagina,
  } = usePage(6, descuentos);

  return (
    <div className="bg-[color:var(--color-gray-10)] shadow-[inset_20px_0px_10px_-15px_rgba(0,0,0,0.1)] h-13/24 overflow-x-hidden flex flex-col items-center overflow-y-scroll justify-between py-3 scrollbar-custom">
      <div className="flex flex-col w-full items-center justify-start gap-3">
        {datosPaginados.map((descuento) => (
          <CardDiscount
            key={descuento.id}
            descuento={descuento}
            isLoadingDescuento={isLoadingDescuento}
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
