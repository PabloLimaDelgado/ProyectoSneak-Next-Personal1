"use client";

import {
  Banknote,
  Calendar,
  DeployedCode,
  ShoppingCart,
} from "@/public/icons/Icons";
import { HeaderAdmin } from "@/src/components/HeaderAdmin";
import { AdminOrders } from "@/src/components/orders/AdminOrders";
import { OrderInfo } from "@/src/components/orders/OrderInfo";
import { OrderSearch } from "@/src/components/orders/OrderSearch";
import { useOrders } from "@/src/hooks/useOrders";
import { useAppSelector } from "@/src/hooks/useRedux";
import { IOrdenCompra } from "@/src/lib/types/IOrdenCompra";
import { setOrdenesCompra } from "@/src/redux/slices/OrdenCompraReducer";
import { getOrdenCompra } from "@/src/service/ordenCompra";

export default function Orders() {
  const { ordenesCompra, precioTotal, pedidosCompletados, pedidosPendientes } =
    useOrders();

  const orderInfo = [
    {
      title: "Total pedidos",
      info: ordenesCompra.length,
      icon: (
        <ShoppingCart
          className="bg-blue-200 text-blue-900 size-10 rounded-md p-2"
          strokeWidth={2}
        />
      ),
    },
    {
      title: "Ingresos totales",
      info: `${precioTotal}`,
      icon: (
        <Banknote
          className="bg-green-100 text-green-600 size-10 rounded-md p-2"
          strokeWidth={2}
        />
      ),
    },
    {
      title: "Completados",
      info: pedidosCompletados,
      icon: (
        <DeployedCode
          className="bg-green-100 text-green-600 size-10 rounded-md p-2"
          strokeWidth={2}
        />
      ),
    },
    {
      title: "Pendientes",
      info: pedidosPendientes,
      icon: (
        <Calendar
          className="bg-yellow-100 text-yellow-600 size-10 rounded-md p-2"
          strokeWidth={2}
        />
      ),
    },
  ];

  return (
    <>
      <HeaderAdmin
        title="Pedidos"
        description="Gestiona todos los pedidos de tu tienda"
      />
      <OrderInfo orderInfo={orderInfo} />
      <OrderSearch />
      <AdminOrders />
    </>
  );
}
