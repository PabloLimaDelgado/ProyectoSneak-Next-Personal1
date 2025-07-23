import { IDetalle } from "../lib/types/IDetalle";

export const getDetalle = async (): Promise<IDetalle[]> => {
  const responseGetDetalle: Response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/detalle/get`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  if (!responseGetDetalle.ok) {
    throw new Error("Error al obtener detalles");
  }
  const getDetalle: IDetalle[] = await responseGetDetalle.json();
  return getDetalle;
};
