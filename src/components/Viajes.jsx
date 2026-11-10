import Viaje from "./Viaje"
import { useObtenerViajes } from "../hooks/useViajes"

export default function Viajes() {
    const { data, isPending, isError, error } = useObtenerViajes()

    if (isPending) return <p>Cargando viajes...</p>

    if (isError) return <p role = "alert">{error.message}</p>

    return (
        <section className = "contenedor_viajes">
            <h2>Viajes</h2>

            {data.length === 0 ? (
                <p>No hay viajes planificados todavía.</p>
            ) : (
                <div className = "viajes">
                    {data.map((viaje) => (
                        <Viaje key = {viaje.id} viaje = {viaje} />
                    ))}
                </div>
            )}
        </section>
    )
}
