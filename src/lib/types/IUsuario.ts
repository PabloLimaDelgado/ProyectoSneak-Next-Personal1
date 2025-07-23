import { z } from "zod";
import { IRol } from "./enums/IRol";
import { IDireccionDTO } from "./IDirecciones";

/*SCHEMAS DE USUARIO*/
export const LoginSchema = z.object({
  nombre: z.string().min(1, "Ingrese su nombre"),
  password: z.string().min(1, "Ingrese su contraseña"),
  dni: z
    .number({
      required_error: "Ingrese su DNI",
      invalid_type_error: "El DNI debe ser un número",
    })
    .int("El DNI debe ser un número entero")
    .min(10000000, "DNI muy corto")
    .max(99999999, "DNI muy largo"),
  email: z.string().email("Ingrese un email válido"),
});

export const LogupSchema = z.object({
  email: z.string().email("Ingrese un email válido"),
  password: z.string().min(1, "Ingrese su contraseña"),
});

/*INGRESAR USUARIO*/

export type LoginSchemaType = z.infer<typeof LoginSchema>;

export interface IUsuarioPost {
  nombre: string;
  password: string;
  dni: string;
  estado: boolean;
  rol: IRol;
  mail: string;
  direcciones: IDireccionDTO[];
}

/*CREAR USUARIO*/

export type LogupSchemaType = z.infer<typeof LogupSchema>;

export interface IUsuarioUp {
  mail: string;
  password: string;
}

/*USUARIO*/

export interface IUsuario {
  id: number;
  nombre: string;
  password: string;
  dni: string;
  estado: boolean;
  rol: IRol;
  mail: string;
  direcciones: IDireccionDTO[];
}
