"use client";

import { useEffect, useState } from "react";
import { IUsuario } from "../lib/types/IUsuario";
import { setUsuarioActivo, setUsuarios } from "../redux/slices/UsuarioReducer";
import { getUsuario } from "../service/usuario";
import { useAppDispatch, useAppSelector } from "./useRedux";
import { useQuery } from "@tanstack/react-query";

export const useAdmin = () => {
  const dispatch = useAppDispatch();
  const [usuarioActivoLocal, setUsuarioActivoLocal] = useState<IUsuario | null>(
    null
  );

  const { data: adminsData, isLoading: isLoadingAdmins } = useQuery<IUsuario[]>(
    {
      queryKey: ["usuarios"],
      queryFn: getUsuario,
    }
  );

  useEffect(() => {
    if (adminsData) dispatch(setUsuarios(adminsData));
  }, [adminsData, dispatch]);

  const usuarios: IUsuario[] = useAppSelector(
    (state) => state.usuarioReducer.usuario
  );

  useEffect(() => {
    const usuarioGuardado = localStorage.getItem("usuario");
    const usuarioActivoParsed: IUsuario | null = usuarioGuardado
      ? JSON.parse(usuarioGuardado)
      : usuarios[1] || null;

    if (usuarioActivoParsed) {
      dispatch(setUsuarioActivo(usuarioActivoParsed));
      setUsuarioActivoLocal(usuarioActivoParsed);
    }
  }, [usuarios]);

  const usuariosActivos = usuarios.reduce(
    (acc, usuario) => (usuario.estado ? acc + 1 : acc),
    0
  );

  return {
    usuarios,
    isLoadingAdmins,
    usuarioActivoLocal,
    usuariosActivos,
  };
};
