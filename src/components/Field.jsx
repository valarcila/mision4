export default function Field ({ 
    id, etiqueta, type = "text", placeholder, min, autoComplete = "on", error, register
}) {
    return (
        <div className = "field">
            <label htmlFor = {id}>{etiqueta}</label>
            <input
                type = {type}
                id = {id}
                placeholder = {placeholder}
                min = {min}
                autoComplete = {autoComplete}
                aria-invalid = {!!error}
                aria-describedby = {error ? `error-${id}` : undefined}
                {...register(id)}
            />
            {error && 
                <span id = {`error-${id}`} role = "alert">{error.message}</span>
            }
        </div>    
    )
}
