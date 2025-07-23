"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  IUsuarioPost,
  LoginSchema,
  LoginSchemaType,
} from "@/src/lib/types/IUsuario";
import { InputUser } from "../ui/InputUser";
import { Button } from "../ui/Button";
import { ArrowLeft } from "@/public/icons/Icons";
import React from "react";
import { useRouter } from "next/navigation";
import { createUsuario } from "@/src/service/registrarse";
import { IRol } from "@/src/lib/types/enums/IRol";
import { IAuth } from "@/src/lib/types/IAuth";
import { toast, ToastContainer } from "react-toastify";

export default function SignInForm() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchemaType>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      nombre: "",
      password: "",
      dni: undefined,
      email: "",
    },
  });

  const onSubmit = async (formData: LoginSchemaType) => {
    const usuarioCreado: IUsuarioPost = {
      nombre: formData.nombre,
      password: formData.password,
      dni: String(formData.dni),
      estado: true,
      rol: IRol.USER,
      mail: formData.email,
      direcciones: [],
    };

    const usuarioResponse = await createUsuario(usuarioCreado);

    if ("error" in usuarioResponse) {
      console.error(usuarioResponse.error);
    } else {
      const usuario: IAuth = usuarioResponse;
      const token = usuario.token;
      localStorage.setItem("token", JSON.stringify(token));
      localStorage.setItem("usuario", JSON.stringify(usuario));
      router.push("/landing");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full max-w-max"
    >
      <div className="flex flex-col gap-1 relative">
        <p
          className={`text-red-500 text-sm h-5 transition-opacity duration-300 ${
            errors.nombre ? "opacity-100" : "opacity-0"
          }`}
        >
          {errors.nombre?.message ?? ""}
        </p>
        <InputUser
          placeholder="Nombre y apellido"
          {...register("nombre")}
          type="text"
        />
      </div>

      <div className="flex flex-col gap-1 relative">
        <p
          className={`text-red-500 text-sm h-5 transition-opacity duration-300 ${
            errors.dni ? "opacity-100" : "opacity-0"
          }`}
        >
          {errors.dni?.message ?? ""}
        </p>
        <InputUser
          placeholder="DNI"
          {...register("dni", { valueAsNumber: true })}
          type="number"
        />
      </div>

      <div className="flex flex-col gap-1 relative">
        <p
          className={`text-red-500 text-sm h-5 transition-opacity duration-300 ${
            errors.password ? "opacity-100" : "opacity-0"
          }`}
        >
          {errors.password?.message ?? ""}
        </p>
        <InputUser
          placeholder="Contraseña"
          {...register("password")}
          type="password"
        />
      </div>

      <div className="flex flex-col gap-1 relative">
        <p
          className={`text-red-500 text-sm h-5 transition-opacity duration-300 ${
            errors.email ? "opacity-100" : "opacity-0"
          }`}
        >
          {errors.email?.message ?? ""}
        </p>
        <InputUser
          placeholder="example@gmail.com"
          {...register("email")}
          type="email"
        />
      </div>

      <div className="col-span-1 lg:col-span-2 flex justify-center gap-2 group">
        <Button
          type="button"
          onClick={() => router.push("/signup")}
          className="relative w-11 hover:w-2xs transition-[width] duration-300 overflow-hidden flex items-center justify-start gap-2 hover:justify-center"
        >
          <ArrowLeft
            className="size-8 border-2 rounded-full border-solid text-white flex-shrink-0"
            strokeWidth={2}
          />
          <span
            className="whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            aria-hidden={!true}
          >
            Volver a Inicio Sesión
          </span>
        </Button>
        <Button type="submit" className="w-2xs">
          Crear Usuario
        </Button>
      </div>
    </form>
  );
}
