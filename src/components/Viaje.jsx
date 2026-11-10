export default function Viaje({ viaje }) {
    return (
        <article className = "viaje">
            <h3>{viaje.destino}</h3>
            <p>{viaje.salida} al {viaje.regreso}</p>
            <p>{viaje.presupuesto} euros</p>
        </article>
    )
}
