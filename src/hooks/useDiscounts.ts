"use client";

import { useQuery } from "@tanstack/react-query";
import { IDescuento } from "../lib/types/IDescuento";
import { IOrdenCompra } from "../lib/types/IOrdenCompra";
import { setDescuentos } from "../redux/slices/DescuentoReducer";
import { setOrdenesCompra } from "../redux/slices/OrdenCompraReducer";
import { getDescuento } from "../service/descuento";
import { getOrdenCompra } from "../service/ordenCompra";
import { useAppDispatch, useAppSelector } from "./useRedux";
import { useEffect } from "react";

export const useDiscounts = () => {
  const dispatch = useAppDispatch();

  const { data: ordenCompraData } = useQuery<IOrdenCompra[]>({
    queryKey: ["ordenesCompra"],
    queryFn: getOrdenCompra,
  });

  const { data: descuentoData, isLoading: isLoadingDescuento } = useQuery<
    IDescuento[]
  >({
    queryKey: ["descuentos"],
    queryFn: getDescuento,
  });

  useEffect(() => {
    if (ordenCompraData) dispatch(setOrdenesCompra(ordenCompraData));
  }, [ordenCompraData, dispatch]);

  useEffect(() => {
    if (descuentoData) dispatch(setDescuentos(descuentoData));
  }, [ordenCompraData, dispatch]);

  const descuentos: IDescuento[] = useAppSelector(
    (state) => state.descuentoReducer.descuento
  );

  const ordenCompra: IOrdenCompra[] = useAppSelector(
    (state) => state.ordenCompraReducer.ordenCompra
  );

  const usosTotalesDescuentos = ordenCompra.reduce((total, orden) => {
    const subtotal =
      orden.ordenCompraDetalles
        ?.filter((detalle) => detalle.detalle.precioDTO.descuento !== null)
        .reduce((acc, detalle) => acc + detalle.cantidad, 0) ?? 0;

    return total + subtotal;
  }, 0);

  const diaActual = new Date();
  const porExpirar = descuentos.reduce((acc, descuento) => {
    const fechaFin = new Date(descuento.fechaFin);
    const diffEnMilis = fechaFin.getTime() - diaActual.getTime();
    const diffEnDias = diffEnMilis / (1000 * 60 * 60 * 24); // milis a días

    return diffEnDias <= 10 && diffEnDias >= 0 ? acc + 1 : acc;
  }, 0);

  return {
    descuentos,
    isLoadingDescuento,
    usosTotalesDescuentos,
    porExpirar,
  };
};
