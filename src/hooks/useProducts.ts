"use client";

import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "./useRedux";
import { IProducto } from "@/src/lib/types/IProducto";
import { IDetalle } from "@/src/lib/types/IDetalle";
import { getProducto } from "../service/producto";
import { getDetalle } from "../service/detalle";
import { setProductos } from "../redux/slices/ProductoReducer";
import { useQuery } from "@tanstack/react-query";
import { setDetalles } from "../redux/slices/DetalleReducer";

export const useProducts = () => {
  const dispatch = useAppDispatch();

  const { data: productosData, isLoading: isLoadingProductos } = useQuery<
    IProducto[]
  >({
    queryKey: ["productos"],
    queryFn: getProducto,
  });

  const { data: detallesData, isLoading: isLoadingDetalles } = useQuery<
    IDetalle[]
  >({
    queryKey: ["detalles"],
    queryFn: getDetalle,
  });

  useEffect(() => {
    if (productosData) dispatch(setProductos(productosData));
  }, [productosData, dispatch]);

  useEffect(() => {
    if (detallesData) dispatch(setDetalles(detallesData));
  }, [detallesData, dispatch]);

  const productos: IProducto[] = useAppSelector(
    (state) => state.productoReducer.producto
  );
  const detalles: IDetalle[] = useAppSelector(
    (state) => state.detalleReducer.detalle
  );

  return {
    productos,
    isLoadingProductos,
    detalles,
    isLoadingDetalles,
  };
};
