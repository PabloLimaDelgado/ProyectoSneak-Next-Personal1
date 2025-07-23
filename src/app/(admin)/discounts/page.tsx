"use client";

import { Clock, Label, TrendingUp } from "@/public/icons/Icons";
import { ButtonsAdmin } from "@/src/components/ButtonsAdmin";
import { AdminDiscount } from "@/src/components/discount/AdminDiscount";
import { HeaderAdmin } from "@/src/components/HeaderAdmin";
import { Modal } from "@/src/components/Modal";
import { OrderInfo } from "@/src/components/orders/OrderInfo";
import { Search } from "@/src/components/ui/Search";
import { useDiscounts } from "@/src/hooks/useDiscounts";
import { IEstadoDescuento } from "@/src/lib/types/enums/IEstadoDescuento";
import { useState } from "react";

export default function Discounts() {
  const { descuentos, usosTotalesDescuentos, porExpirar } = useDiscounts();

  const discountInfo = [
    {
      title: "Descuentos activos",
      info: descuentos.filter(
        (descuento) => descuento.estadoDescuento === IEstadoDescuento.ACTIVO
      ).length,
      icon: (
        <Label
          className="bg-green-100 text-green-600 size-10 rounded-md p-2"
          strokeWidth={2}
        />
      ),
    },
    {
      title: "Total usos",
      info: usosTotalesDescuentos,
      icon: (
        <TrendingUp
          className="bg-purple-100 text-purple-600 size-10 rounded-md p-2"
          strokeWidth={2}
        />
      ),
    },
    {
      title: "Por expirar",
      info: porExpirar,
      icon: (
        <Clock
          className="bg-yellow-100 text-yellow-600 size-10 rounded-md p-2"
          strokeWidth={2}
        />
      ),
    },
  ];

  const [modalAbierto, setModalAbierto] = useState<null | "descuento">(null);

  const abrirModal = (tipo: "descuento") => {
    setModalAbierto(tipo);
  };

  const cerrarModal = () => {
    setModalAbierto(null);
  };

  const buttons = [
    {
      titulo: "Agregar Descuento",
      modal: () => abrirModal("descuento"),
    },
  ];
  const estados = Object.values(IEstadoDescuento);

  return (
    <>
      <HeaderAdmin
        title="Descuentos"
        description="Gestiona las promociones y descuentos de tu tienda"
      />
      <OrderInfo orderInfo={discountInfo} />
      <ButtonsAdmin buttons={buttons}>
        <select
          name=""
          id=""
          className="font-['Roboto-Regular'] custon-info-admin"
        >
          {estados.map((estado) => (
            <option
              key={estado}
              value={estado}
              className="font-['Roboto-Regular'] hover:bg-[color:var(--color-gray-30)]"
            >
              {estado}
            </option>
          ))}
        </select>
        <Search placeholder="Buscar producto..." />
      </ButtonsAdmin>
      <AdminDiscount />
    </>
  );
}
