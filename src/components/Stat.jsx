export default function Stat({ value, etiqueta }) {
    return (
        <article className = "stat">
            <h2>{value}</h2>
            <p>{etiqueta}</p>
        </article>
    )
}
