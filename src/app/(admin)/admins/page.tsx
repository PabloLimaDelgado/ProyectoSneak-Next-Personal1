"use client";

import { Clock, UserCheck, UserIcon, Users } from "@/public/icons/Icons";
import { AdminAdmins } from "@/src/components/admins/AdminAdmins";
import { ButtonsAdmin } from "@/src/components/ButtonsAdmin";
import { HeaderAdmin } from "@/src/components/HeaderAdmin";
import { Modal } from "@/src/components/Modal";
import { OrderInfo } from "@/src/components/orders/OrderInfo";
import { Search } from "@/src/components/ui/Search";
import { useAdmin } from "@/src/hooks/useAdmin";
import { getUsuario } from "@/src/service/usuario";
import { icons } from "lucide-react";
import { useState } from "react";

export default function Admins() {
  const { usuarios, usuarioActivoLocal, usuariosActivos } = useAdmin();

  const [modalAbierto, setModalAbierto] = useState<null | "admin">(null);

  const abrirModal = (tipo: "admin") => {
    setModalAbierto(tipo);
  };

  const cerrarModal = () => {
    setModalAbierto(null);
  };

  const buttons = [
    { titulo: "Agregar admin", modal: () => abrirModal("admin") },
  ];

  const adminInfo = [
    {
      title: "Total admins",
      info: usuarios.length,
      icon: (
        <Users
          className="bg-blue-200 text-blue-900 size-10 rounded-md p-2"
          strokeWidth={2}
        />
      ),
    },
    {
      title: "Usuario actual",
      info: usuarioActivoLocal?.nombre ?? "admin",
      icon: (
        <UserCheck
          className="bg-green-100 text-green-600 size-10 rounded-md p-2"
          strokeWidth={2}
        />
      ),
    },
    {
      title: "Usuarios activos",
      info: usuariosActivos,
      icon: (
        <UserIcon
          className="bg-yellow-100 text-yellow-600 size-10 rounded-md p-2"
          strokeWidth={2}
        />
      ),
    },
  ];

  return (
    <>
      <HeaderAdmin
        title="Administradores"
        description="Gestiona los usuarios y permisos del sistema"
      />
      <OrderInfo orderInfo={adminInfo} />
      <ButtonsAdmin buttons={buttons}>
        <select
          name=""
          id=""
          className="font-['Roboto-Regular'] custon-info-admin"
        >
          <option
            value="ACTVIVO"
            className="font-['Roboto-Regular'] custon-info-admin"
          >
            ACVIVO
          </option>
          <option
            value="INACTIVO"
            className="font-['Roboto-Regular'] custon-info-admin"
          >
            INACTIVO
          </option>
        </select>
        <Search placeholder="Buscar administrador..." />
      </ButtonsAdmin>
      <AdminAdmins />
    </>
  );
}
