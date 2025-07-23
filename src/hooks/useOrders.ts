import { useQuery } from "@tanstack/react-query";
import { IEstadoPedido } from "../lib/types/enums/IEstadoPedido";
import { IOrdenCompra } from "../lib/types/IOrdenCompra";
import { setOrdenesCompra } from "../redux/slices/OrdenCompraReducer";
import { getOrdenCompra } from "../service/ordenCompra";
import { useAppDispatch, useAppSelector } from "./useRedux";
import { useEffect } from "react";

export const useOrders = () => {
  const dispatch = useAppDispatch();

  const { data: ordenCompraData, isLoading: isLoadingOrdenCompra } = useQuery<
    IOrdenCompra[]
  >({
    queryKey: ["ordenesCompra"],
    queryFn: getOrdenCompra,
  });

  useEffect(() => {
    if (ordenCompraData) dispatch(setOrdenesCompra(ordenCompraData));
  }, [ordenCompraData, dispatch]);

  const ordenesCompra: IOrdenCompra[] = useAppSelector(
    (state) => state.ordenCompraReducer.ordenCompra
  );

  const precioTotal = ordenesCompra.reduce(
    (acumulador, ordenCompra) => acumulador + ordenCompra.total,
    0
  );

  const pedidosCompletados = ordenesCompra.reduce(
    (acc, orden) =>
      orden.estadoPedido === IEstadoPedido.COMPLETADO ? acc + 1 : acc,
    0
  );

  const pedidosPendientes = ordenesCompra.reduce(
    (acc, orden) =>
      orden.estadoPedido === IEstadoPedido.PENDIENTE ? acc + 1 : acc,
    0
  );

  return {
    ordenesCompra,
    isLoadingOrdenCompra,
    precioTotal,
    pedidosCompletados,
    pedidosPendientes,
  };
};
