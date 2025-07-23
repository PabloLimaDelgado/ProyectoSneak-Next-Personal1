import { IAuth } from "../lib/types/IAuth";
import { IUsuarioUp } from "../lib/types/IUsuario";

export const getUsuario = async (
  data: IUsuarioUp
): Promise<IAuth | { error: string }> => {
  try {
    const responseGetUsuario = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/usuario/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    const getUsuario: IAuth = await responseGetUsuario.json();
    return getUsuario;
  } catch (error) {
    return { error: "Error al iniciar sesión" };
  }
};
