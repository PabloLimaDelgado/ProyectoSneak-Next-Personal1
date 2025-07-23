"use client";

import { AdminProducts } from "@/src/components/AdminProduct";
import { ButtonsAdmin } from "@/src/components/ButtonsAdmin";
import { HeaderAdmin } from "@/src/components/HeaderAdmin";
import { Modal } from "@/src/components/Modal";
import { Search } from "@/src/components/ui/Search";
import { TalleSchema, TalleSchemaType } from "@/src/lib/types/ITalle";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function Products() {
  const [modalAbierto, setModalAbierto] = useState<
    null | "producto" | "categoria" | "talle"
  >(null);

  const abrirModal = (tipo: "producto" | "categoria" | "talle") => {
    setModalAbierto(tipo);
  };

  const cerrarModal = () => {
    setModalAbierto(null);
  };

  const buttons = [
    { titulo: "Agregar producto", modal: () => abrirModal("producto") },
    { titulo: "Agregar categoria", modal: () => abrirModal("categoria") },
    { titulo: "Agregar talle", modal: () => abrirModal("talle") },
  ];

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TalleSchemaType>({
    resolver: zodResolver(TalleSchema),
    defaultValues: {
      talle: "",
    },
  });

  const onSubmitTalle = async (formData: TalleSchemaType) => {
    cerrarModal();
    console.log("Talle creado:", formData);
  };

  const talleInputs = [
    {
      input: () => (
        <input
          placeholder="Ingrese la medida..."
          className="border-1 rounded-md p-1 font-['Afacad-Regular'] mb-2"
          {...register("talle")}
          type="text"
        />
      ),
      placeholder: "Talle",
    },
  ];

  const categoriaInputs = [
    {
      input: () => (
        <input
          placeholder="Ingrese el nombre..."
          className="border-1 rounded-md p-1 font-['Afacad-Regular'] mb-2"
        />
      ),
      placeholder: "Categoria",
    },
  ];

  return (
    <>
      <HeaderAdmin
        title="Productos"
        description="Gestiona tu inventario de productos"
      />
      <ButtonsAdmin buttons={buttons}>
        <Search placeholder="Buscar producto..." />
      </ButtonsAdmin>
      <AdminProducts />
      {modalAbierto === "talle" && (
        <Modal
          titulo={"Crear Talle"}
          close={cerrarModal}
          inputs={talleInputs}
          descripcion={"Ingrese la información del nuevo talle"}
          modalAbierto={modalAbierto}
          onSubmit={handleSubmit(onSubmitTalle)}
        />
      )}
      {/*modalAbierto === "categoria" && (
        <Modal
          titulo={"Crear Categoria"}
          close={cerrarModal}
          inputs={categoriaInputs}
          descripcion={"Ingrese la información de la nueva categoria"}
          modalAbierto={modalAbierto}
        />
      )*/}
    </>
  );
}
