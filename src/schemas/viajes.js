import { z } from "zod"

export const viaje = z
    .object({
        id: z.string(),
        destino: z.string(),
        salida: z.string(),
        regreso: z.string(),
        presupuesto: z.number()
    })

// validar array de viajes
export const viajes = z.array(viaje)
