export default function Stat({ value, unidad }) {
    return (
        <article className = "stat">
            <h2>{value}</h2>
            <p>{unidad}</p>
        </article>
    )
}
