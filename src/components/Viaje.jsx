import { useEliminarViaje } from "../hooks/useViajes"
import { formatearFecha } from "../logic"

export default function Viaje({ viaje }) {
    const mutacion = useEliminarViaje()

    return (
        <>
            <article className = "viaje">
                <h3>{viaje.destino}</h3>
                <p>{formatearFecha(viaje.salida)} al {formatearFecha(viaje.regreso)}</p>
                <p>{viaje.presupuesto} euros</p>
                <button
                    type = "button"
                    onClick = {() => mutacion.mutate(viaje.id)}
                    disabled = {mutacion.isPending}
                >
                    {mutacion.isPending ? "Eliminando..." : "Eliminar"}
                </button>
            </article>
            {mutacion.isError && (
                <p className = "error" role = "alert">{mutacion.error.message}</p>
            )}
        </>
    )
}
