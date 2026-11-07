import { z } from "zod"
import { validarFecha, obtenerHoy } from "./logic"

export const esquema = z
    .object({
        destino: z.string().trim().min(3, "Destino debe tener al menos tres caracteres"),
        // validarFecha(data.salida), validar formato y comprobar existencia
        salida: z.string().refine(validarFecha, {error: "Salida debe ser fecha válida"}),
        regreso: z.string().refine(validarFecha, {error: "Regreso debe ser fecha válida"}),
        presupuesto: z.coerce.number({error: "Presupuesto debe ser número válido"})
            .positive("Presupuesto debe ser mayor que cero")
            .max(1000, "Presupuesto no debe superar los mil euros")
    })
    .refine((data) => new Date(data.salida) >= obtenerHoy(), {
        error: "Salida debe ser hoy o posterior",
        path: ["salida"]
    })
    .refine((data) => new Date(data.regreso) > new Date(data.salida), {
        error: "Regreso debe ser posterior a salida",
        path: ["regreso"]
    })
