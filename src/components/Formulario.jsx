import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { esquema } from "../esquema"

export default function Formulario() {
    const { 
        register, 
        handleSubmit, 
        formState: { errors } 
    } = useForm({ 
        resolver: zodResolver(esquema),
        defaultValues: {
            destino: "",
            salida: "",
            regreso: "",
            presupuesto: ""
        }
    })

    function onSubmit(data) {
        console.log(data)
    }

    return (
        <form onSubmit = {handleSubmit(onSubmit)} noValidate>
            <div className = "field">
                <label htmlFor = "destino">Destino</label>
                <input
                    type = "text"
                    id = "destino"
                    aria-invalid = {!!errors.destino}
                    aria-describedby = {errors.destino ? "error-destino" : undefined}
                    {...register("destino")}
                />
                {errors.destino && 
                    <span id = "error-destino" role = "alert">{errors.destino.message}</span>
                }
            </div>
            <div className = "field">
                <label htmlFor = "salida">Salida</label>
                <input
                    type = "date"
                    id = "salida"
                    aria-invalid = {!!errors.salida}
                    aria-describedby = {errors.salida ? "error-salida" : undefined}                    
                    {...register("salida")}
                />
                {errors.salida && 
                    <span id = "error-salida" role = "alert">{errors.salida.message}</span>
                }
            </div>
            <div className = "field">
                <label htmlFor = "regreso">Regreso</label>
                <input
                    type = "date"
                    id = "regreso"
                    aria-invalid = {!!errors.regreso}
                    aria-describedby = {errors.regreso ? "error-regreso" : undefined} 
                    {...register("regreso")}
                />
                {errors.regreso && 
                    <span id = "error-regreso" role = "alert">{errors.regreso.message}</span>
                }
            </div>
            <div className = "field">
                <label htmlFor = "presupuesto">Presupuesto</label>
                <input
                    type = "number"
                    id = "presupuesto"
                    aria-invalid = {!!errors.presupuesto}
                    aria-describedby = {errors.presupuesto ? "error-presupuesto" : undefined} 
                    {...register("presupuesto")}
                />
                {errors.presupuesto && 
                    <span id = "error-presupuesto" role = "alert">{errors.presupuesto.message}</span>
                }
            </div>
            <button type = "submit">Guardar</button>
        </form>
    )
}
