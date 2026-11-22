import { z } from "zod"
import { destinoSchema, fechaSchema, presupuestoSchema } from "./fields"

export const viajeApi = z
    .object({
        id: z.string(),
        destino: destinoSchema,
        salida: fechaSchema,
        regreso: fechaSchema,
        presupuesto: presupuestoSchema,
    })

// validar array de viajes
export const viajes = z.array(viajeApi)
