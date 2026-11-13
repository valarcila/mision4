// validar fecha aaaa-mm-dd
export function validarFecha(value){
    // cuatro cifras ano, dos mes y dos dia
    const formato = /^\d{4}-\d{2}-\d{2}$/

    if (!formato.test(value)) return false

    // ajustar fecha no válida, 2027-02-30 es 2027-03-02
    const fecha = new Date(value)

    // milisegundos desde 1970-01-01 hasta fecha
    // desarrollo unix (so)
    if (isNaN(fecha.getTime())) return false

    // comprobar si fecha y value son iguales
    // slice(0, 10), coger diez primeros caracteres
    return fecha.toISOString().slice(0, 10) === value
}

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
