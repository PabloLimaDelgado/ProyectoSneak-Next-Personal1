import { IDescuento } from "../lib/types/IDescuento";

export const getDescuento = async (): Promise<IDescuento[]> => {
  const responseGetDescuento: Response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/descuento`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  if (!responseGetDescuento.ok) {
    throw new Error("Error al obtener el descuento");
  }
  const getDescuento: IDescuento[] = await responseGetDescuento.json();
  return getDescuento;
};
