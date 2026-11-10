import { useObtenerViajes } from "../hooks/useViajes"

export default function Viajes() {
    const { data, isPending, isError, error } = useObtenerViajes()

    if (isPending) return <p>Cargando viajes...</p>

    if (isError) return <p role = "alert">{error.message}</p>

    return (
        <section>
            <h2>Viajes</h2>
            <p>Datos recibidos: {data.length}</p>
        </section>
    )
}