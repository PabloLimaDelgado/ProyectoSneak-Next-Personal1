import { Download } from "@/public/icons/Icons";
import { IEstadoPedido } from "@/src/lib/types/enums/IEstadoPedido";
import { div } from "framer-motion/client";
import React from "react";
import { Search } from "../ui/Search";

export const OrderSearch = () => {
  const estados = Object.values(IEstadoPedido);
  return (
    <div className="flex flex-row justify-between gap-1 p-5 border-b-2 border-b-[color:var(--color-gray-30)] h-4/24 items-center">
      <div className="flex flex-row items-center justify-center gap-3">
        <div className="flex flex-row items-center font-['Roboto-Regular'] justify-center gap-1.5">
          Desde:
          <input type="date" className="custon-info-admin" />
        </div>
        <div className="flex flex-row items-center font-['Roboto-Regular'] justify-center gap-1.5">
          Hasta:
          <input type="date" className="custon-info-admin" />
        </div>
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
      </div>
      <div className="flex flex-row items-center justify-center gap-3">
        <button className="flex flex-row custon-info-admin hover:bg-[color:var(--color-gray-30)] transition ease-in 0.3">
          <Download className="size-6 font-['Roboto-Regular'] text-black" strokeWidth={2} />
          Exportar
        </button>
        <Search placeholder="Buscar por ID o usuario..." />
      </div>
    </div>
  );
};
