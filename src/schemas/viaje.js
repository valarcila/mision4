import { z } from "zod"
import { validarFecha, obtenerHoy } from "../logic"

export const viaje = z
    .object({
        destino: z.string().trim().min(3, "Destino debe tener al menos tres caracteres"),
        salida: z.string()
                .min(1, "Debe haber fecha de salida")
                .refine(validarFecha, "Salida debe ser fecha válida"),
        regreso: z.string()
                .min(1, "Debe haber fecha de regreso")
                .refine(validarFecha, "Regreso debe ser fecha válida"),
        presupuesto: z.preprocess(
            // field vacio es undefined no cero
            (value) => value === "" ? undefined : value,
            z.coerce.number({error: "Presupuesto debe ser número válido"})
                    .positive("Presupuesto debe ser mayor que cero")
                    .max(1000, "Presupuesto no debe ser superar los mil euros")
        )  
    })
    .refine((data) => data.salida >= obtenerHoy(), {
        error: "Salida debe ser hoy o posterior",
        path: ["salida"]
    })
    .refine((data) => data.regreso >= data.salida, {
        error: "Regreso debe ser igual o posterior a salida",
        path: ["regreso"]
    })
