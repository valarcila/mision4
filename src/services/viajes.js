// api
const API_URL = import.meta.env.VITE_API_URL
const VIAJES_URL = `${API_URL}/viajes`


// GET, obtener viajes
export async function obtenerViajes() {
    const respuesta = await fetch(VIAJES_URL)

    if (!respuesta.ok) throw new Error("Error al obtener viajes")

    // convertir json en js
    return respuesta.json()
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

    if (!respuesta.ok) throw new Error("Error al enviar viaje")

    return respuesta.json()
}
