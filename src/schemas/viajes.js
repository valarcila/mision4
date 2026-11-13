import { z } from "zod"
import { validarFecha } from "../logic"

export const viajeApi = z
    .object({
        id: z.string(),
        destino: z.string(),
        salida: z.string().refine(validarFecha),
        regreso: z.string().refine(validarFecha),
        presupuesto: z.number().positive()
    })

// validar array de viajes
export const viajes = z.array(viajeApi)
