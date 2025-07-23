import { IOrdenCompra } from "../lib/types/IOrdenCompra";

export const getOrdenCompra = async (): Promise<IOrdenCompra[]> => {
  const token = localStorage.getItem("token")?.replace(/^"|"$/g, "");
  const responseGetOrdenCompra: Response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/ordenCompra/get`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );

  if (!responseGetOrdenCompra.ok) {
    throw new Error("Error al obtener orden compra");
  }

  const getOrdenCompra: IOrdenCompra[] = await responseGetOrdenCompra.json();
  return getOrdenCompra;
};
