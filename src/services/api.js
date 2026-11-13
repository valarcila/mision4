import { viajes } from "../schemas/viajes"

// api
const API_URL = import.meta.env.VITE_API_URL
const VIAJES_URL = `${API_URL}/viajes`


// GET, obtener viajes
export async function obtenerViajes() {
    const respuesta = await fetch(VIAJES_URL)

    if (!respuesta.ok) {
        throw new Error(`Error al obtener viajes. HTTP ${respuesta.status}`)
    }

    // convertir json en js
    const data = await respuesta.json()

    // comprobar data con zod
    const resultado = viajes.safeParse(data)

    if (!resultado.success) throw new Error("Viajes recibidos no válidos")

    return resultado.data
}

// POST, enviar viaje
export async function enviarViaje(viaje) {
    const respuesta = await fetch(VIAJES_URL, {
        method: "POST",
        headers: {
            // indicar envio de json
            "Content-Type": "application/json"
        },
        // convertir objeto js en json
        body: JSON.stringify(viaje)
    })

    if (!respuesta.ok) {
        throw new Error(`Error al enviar viaje. HTTP ${respuesta.status}`)
    }

    return respuesta.json()
}

// DELETE, eliminar viaje
export async function eliminarViaje(id) {
    const respuesta = await fetch(`${VIAJES_URL}/${id}`, {
        method: "DELETE"
    })

    if (!respuesta.ok) {
        throw new Error(`Error al eliminar viaje. HTTP ${respuesta.status}`)
    }
}
