import { IdCard, Mail, SquarePen, Trash } from "@/public/icons/Icons";
import { IUsuario } from "@/src/lib/types/IUsuario";
import React, { FC } from "react";

interface ICardAdmins {
  admin: IUsuario;
  isLoadingAdmins: boolean;
}

export const CardAdmins: FC<ICardAdmins> = ({ admin, isLoadingAdmins }) => {
  const getStateActive = (estadoActivo: boolean) => {
    return estadoActivo === true
      ? "bg-green-100 hover:bg-green-200 text-green-800 px-1 rounded-md"
      : "bg-yellow-100 hover:bg-yellow-200 text-yellow-800 px-1 rounded-md";
  };

  if (isLoadingAdmins) {
    return <div className="custom-div-skeleton " />;
  }

  return (
    <div className="flex flex-row items-center justify-between px-4 bg-white w-23/24 rounded-md border-1 border-[color:var(--color-gray-30)] hover:shadow-md transition ease-in-out 0.2">
      <div className="flex flex-row gap-2 items-center justify-center p-2">
        <h1 className="font-['Bebas_Neue'] py-1.5 px-4.5 bg-green-200 text-green-900 rounded-full text-3xl">
          {admin.nombre[0]}
        </h1>
        <div className="flex flex-col">
          <div className="flex flex-row gap-2.5 items-center">
            <h2 className="font-['Roboto-SemiBold'] text-2xl">
              {admin.nombre}
            </h2>
            <h3 className="bg-red-100 hover:bg-red-200 text-red-800 px-1 rounded-md">
              {admin.rol}
            </h3>
            <h3 className={getStateActive(admin.estado)}>
              {admin.estado ? `ACTIVO` : `INACTIVO`}
            </h3>
          </div>
          <div className="flex flex-row gap-1 items-center">
            <Mail
              className="size-5 text-[color:var(--color-gray-40)]"
              strokeWidth={2}
            />
            <h2 className="pr-2 text-[color:var(--color-gray-40)] font-['Afacad-Regular'] text-lg">
              {admin.mail}
            </h2>
            <IdCard
              className="size-5 text-[color:var(--color-gray-40)]"
              strokeWidth={2}
            />
            <h2 className="pr-2 text-[color:var(--color-gray-40)] font-['Afacad-Regular'] text-lg">
              {admin.dni}
            </h2>
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-2">
        <SquarePen className="custom-icon-button text-black" strokeWidth={2} />
        <Trash className="custom-icon-button text-red-600" strokeWidth={2} />
      </div>
    </div>
  );
};
