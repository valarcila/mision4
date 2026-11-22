import Viaje from "./Viaje"

export default function Viajes({ data }) {
    const ordenados = [...data].sort(
        (a, b) => a.salida.localeCompare(b.salida)
    )

    return (
        <section className = "contenedor_viajes">
            <h2>Viajes</h2>

            {data.length === 0 ? (
                <p>No hay viajes planificados todavía</p>
            ) : (
                <div className = "viajes">
                    {ordenados.map((viaje) => (
                        <Viaje key = {viaje.id} viaje = {viaje} />
                    ))}
                </div>
            )}
        </section>
    )
}
