// obtener fecha de hoy
export function obtenerHoy(){
    const hoy = new Date()

    const ano = hoy.getFullYear()
    // padStart(2, "0"), agregar cero si tiene una sola cifra
    const mes = String(hoy.getMonth() + 1).padStart(2, "0")
    const dia = String(hoy.getDate()).padStart(2, "0")

    return `${ano}-${mes}-${dia}`
}

// contar viajes
export function contarViajes(viajes) {
    return viajes.length
}

// sumar presupuesto viajes
export function sumarPresupuesto(viajes) {
    return viajes.reduce((presupuesto, viaje) => presupuesto + viaje.presupuesto, 0)
}
