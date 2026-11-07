export default function Field ({ id, etiqueta, inputMode, placeholder, register, error }) {
    return (
        <div className = "field">
            <label htmlFor = {id}>{etiqueta}</label>
            <input
                type = "text"
                inputMode = {inputMode}
                id = {id}
                placeholder = {placeholder}
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
