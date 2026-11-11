export default function Estado({ cargando, error, reintentar }) {
    if (cargando) return <p className = "cargando">Cargando viajes...</p>

    if (error) {
        return (
            <div className = "estado">
                <p  className = "error" role = "alert">{error.message}</p>
                <button type = "button" onClick = {reintentar}>
                    Reintentar
                </button>
            </div>
        )
    }

    return null
}
