import { IAuth } from "../lib/types/IAuth";
import { IUsuarioPost } from "../lib/types/IUsuario";

export const createUsuario = async (
  data: IUsuarioPost
): Promise<IAuth | { error: string }> => {
  try {
    const responseCreateUsuario = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/usuario/registrarUsuario`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    const createUsuario: IAuth = await responseCreateUsuario.json();

    return createUsuario;
  } catch (error) {
    return { error: "Error al crear usuario" };
  }
};
