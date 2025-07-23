/*SCHEMAS DE USUARIO*/

import { z } from "zod";

export const TalleSchema = z.object({
  talle: z.string().min(1, "Ingrese el talle"),
});

export type TalleSchemaType = z.infer<typeof TalleSchema>;

export interface ITalle {
  id?: number;
  estado: boolean;
  talle: string;
}
