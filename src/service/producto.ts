import { IProducto } from "../lib/types/IProducto";

export const getProducto = async (): Promise<IProducto[]> => {
  const responseGetProducto: Response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/producto`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  if (!responseGetProducto.ok) {
    throw new Error("Error al obtener productos");
  }

  const getProducto: IProducto[] = await responseGetProducto.json();
  return getProducto;
};
