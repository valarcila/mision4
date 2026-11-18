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

export function formatearFechas(salida, regreso) {
    if (salida === regreso) return formatearFecha(salida)

    // formatear si mismo año y mes
    if(salida.slice(0, 7) === regreso.slice(0, 7)) {
        const dia = Number(salida.slice(8, 10))

        return `${dia} al ${formatearFecha(regreso)}`
    }

    return `${formatearFecha(salida)} al ${formatearFecha(regreso)}`
}

// formatear fechas
function formatearFecha(value) {
    const [ano, mes, dia] = value.split("-")

    const fecha = new Date(ano, mes - 1, dia)

    return new Intl.DateTimeFormat("es-ES", {
        day: "numeric",
        month: "long"
    }).format(fecha)
}

export function validarViajes(schema, data) {
    // comprobar data con zod
    const resultado = schema.safeParse(data)

    if (!resultado.success) {
        const error = resultado.error.issues[0]

        throw new Error(
            // error.path, indicar donde esta el error
            `Viajes no válidos en ${error.path.join(" ") || "respuesta"}: ${error.message}`
        )
    } 

    return resultado.data
}

// contar viajes
export function contarViajes(viajes) {
    return viajes.length
}

// sumar presupuesto viajes
export function sumarPresupuesto(viajes) {
    return viajes.reduce((presupuesto, viaje) => presupuesto + viaje.presupuesto, 0)
}
