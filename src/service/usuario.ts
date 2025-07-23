import { IUsuario } from "../lib/types/IUsuario";

export const getUsuario = async (): Promise<IUsuario[]> => {
  const token = localStorage.getItem("token")?.replace(/^"|"$/g, "");
  console.log(token);
  const responseGetUsuario: Response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/usuario/admin`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );

  if (!responseGetUsuario.ok) {
    throw new Error("Error al obtener el usuario");
  }

  const getUsuario: IUsuario[] = await responseGetUsuario.json();
  console.log(getUsuario);
  return getUsuario;
};
