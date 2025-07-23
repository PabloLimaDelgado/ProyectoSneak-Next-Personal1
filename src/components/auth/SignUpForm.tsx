"use client";

import {
  IUsuarioUp,
  LogupSchema,
  LogupSchemaType,
} from "@/src/lib/types/IUsuario";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "../ui/Button";
import { ArrowRight } from "@/public/icons/Icons";
import { InputUser } from "../ui/InputUser";
import { useRouter } from "next/navigation";
import { getUsuario } from "@/src/service/iniciarSesion";
import { IAuth } from "@/src/lib/types/IAuth";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { IRol } from "@/src/lib/types/enums/IRol";

export default function SignUpForm() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LogupSchemaType>({
    resolver: zodResolver(LogupSchema),
    defaultValues: {
      password: "",
      email: "",
    },
  });

  const onSubmit = async (formData: LogupSchemaType) => {
    const usuarioTraido: IUsuarioUp = {
      mail: formData.email,
      password: formData.password,
    };

    const usuarioResponse = await getUsuario(usuarioTraido);

    if ("error" in usuarioResponse) {
      console.error(usuarioResponse.error);
      toast.error(usuarioResponse.error);
    } else {
      const usuario: IAuth = usuarioResponse;
      const token = usuario.token;
      localStorage.setItem("token", JSON.stringify(token));
      localStorage.setItem("usuario", JSON.stringify(usuario));
      usuario.rol === IRol.ADMIN
        ? router.push("/products")
        : router.push("/landing");
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full max-w-max"
      >
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

        <div className="col-span-1 lg:col-span-2 flex justify-center gap-2 group">
          <Button type="submit" className="w-2xs">
            Iniciar Sesión
          </Button>
          <Button
            type="button"
            onClick={() => router.push("/signin")}
            className="relative w-11 hover:w-2xs transition-[width] duration-300 overflow-hidden flex flex-row-reverse items-center justify-start gap-2 hover:justify-center"
          >
            <ArrowRight
              className="size-8 border-2 rounded-full border-solid text-white flex-shrink-0"
              strokeWidth={2}
            />
            <span
              className="whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              aria-hidden={!true}
            >
              Crear Usuario
            </span>
          </Button>
        </div>
      </form>

      <ToastContainer theme="dark" />
    </>
  );
}
