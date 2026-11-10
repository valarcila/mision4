import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import Field from "./Field"
import { useEnviarViaje } from "../hooks/useViajes"
import { esquema } from "../esquema"

export default function Formulario() {
    // gestionar envio viaje
    const mutacion = useEnviarViaje()

    const { 
        register, 
        handleSubmit, 
        reset,
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
        mutacion.mutate(data, {
            onSuccess: () => reset()
        })
    }

    return (
        <form className = "formulario" onSubmit = {handleSubmit(onSubmit)} noValidate>
            <h2>Nuevo viaje</h2>
            <Field 
                id = "destino"
                etiqueta = "Destino"
                placeholder = "Croacia"
                register = {register}
                error = {errors.destino}
            />
            <div className = "fechas">
                <Field 
                    id = "salida"
                    etiqueta = "Salida"
                    inputMode = "numeric"
                    placeholder = "aaaa-mm-dd"
                    register = {register}
                    error = {errors.salida}
                />
                <Field 
                    id = "regreso"
                    etiqueta = "Regreso"
                    inputMode = "numeric"
                    placeholder = "aaaa-mm-dd"
                    register = {register}
                    error = {errors.regreso}
                />
            </div>
            <Field 
                id = "presupuesto"
                etiqueta = "Presupuesto"
                inputMode = "numeric"
                placeholder = "500"
                register = {register}
                error = {errors.presupuesto}
            />
            <button type = "submit" disabled = {mutacion.isPending}>Guardar</button>
        </form>
    )
}
