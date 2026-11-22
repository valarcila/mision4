import { useEliminarViaje } from "../hooks/useViajes"
import { formatearFechas } from "../logic"

export default function Viaje({ viaje }) {
    const mutacion = useEliminarViaje()

    return (
        <>
            <article className = "viaje">
                <h3>{viaje.destino}</h3>
                <p>{formatearFechas(viaje.salida, viaje.regreso)}</p>
                <p>{viaje.presupuesto} euros</p>
                <button
                    type = "button"
                    onClick = {() => {
                        if (window.confirm(`¿Eliminar viaje a ${viaje.destino}?`)) {
                            mutacion.mutate(viaje.id)
                        }
                    }}
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
