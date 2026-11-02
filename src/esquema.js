import { z } from "zod"

export const esquema = z
    .object({
        destino: z.string().trim().min(3, "Destino debe tener al menos tres caracteres"),
        // convertir string en objeto date
        salida: z.coerce.date({error: "Salida debe ser válida"}),
        regreso: z.coerce.date({error: "Regreso debe ser válido"}),
        presupuesto: z.coerce.number().positive("Presupuesto debe ser mayor que cero")
    })
    .refine((data) => {
        const hoy = new Date()

        const fechaHoy = new Date(
            Date.UTC(
                hoy.getFullYear(),
                hoy.getMonth(),
                hoy.getDate()
            )
        )
        return data.salida >= fechaHoy
    }, {
        error: "Salida debe ser hoy o posterior",
        path: ["salida"]
    })
    .refine((data) => data.regreso > data.salida, {
        error: "Regreso debe ser posterior a salida",
        path: ["regreso"]
    })
