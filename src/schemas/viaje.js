import { z } from "zod"
import { destinoSchema, fechaSchema, presupuestoSchema } from "./fields"
import { obtenerHoy, validarFields } from "../logic"

const fields = z
    .object({
        destino: destinoSchema,
        salida: fechaSchema,
        regreso: fechaSchema,
        presupuesto: z.preprocess(
            // field vacio es undefined no cero
            (value) => value === "" ? undefined : value,
            z.coerce.number({error: "Presupuesto debe ser número válido"})
                    .pipe(presupuestoSchema)
        )
    })

export const viaje = fields
    .refine((data) => data.salida >= obtenerHoy(), {
        error: "Salida debe ser hoy o posterior",
        path: ["salida"],
        // validar aunque otros fields tengan errores
        when: validarFields(fields, { salida: true })
    })
    .refine((data) => data.regreso >= data.salida, {
        error: "Regreso debe ser igual o posterior a salida",
        path: ["regreso"],
        when: validarFields(fields, { salida: true, regreso: true })
    })
