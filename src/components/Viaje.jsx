import { useEliminarViaje } from "../hooks/useViajes"

export default function Viaje({ viaje }) {
    const mutacion = useEliminarViaje()

    return (
        <article className = "viaje">
            <h3>{viaje.destino}</h3>
            <p>{viaje.salida} al {viaje.regreso}</p>
            <p>{viaje.presupuesto} euros</p>
            <button
                type = "button"
                onClick = {() => mutacion.mutate(viaje.id)}
                disabled = {mutacion.isPending}
            >
                {mutacion.isPending ? "Eliminando..." : "Eliminar"}
            </button>
            {mutacion.isError && (
                <p className = "error" role = "alert">{mutacion.error.message}</p>
            )}
        </article>
    )
}
