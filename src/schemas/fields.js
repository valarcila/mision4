import { z } from "zod"
import { validarFecha } from "../logic"

const DESTINO_CARACTERES = 3
const PRESUPUESTO_MAX = 1000

// validar destino
export const destinoSchema = z
    .string()
    .trim()
    .min(DESTINO_CARACTERES, "Destino debe tener al menos tres caracteres")

// validar fecha
export const fechaSchema = z   
    .string()
    .min(1, "Debe haber fecha")
    .refine(validarFecha, "Debe ser fecha válida")

// validar presupuesto
export const presupuestoSchema = z
    .number()
    .positive("Presupuesto debe ser mayor que cero")
    .max(PRESUPUESTO_MAX, "Presupuesto no debe superar los mil euros")
