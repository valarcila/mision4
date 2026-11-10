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
                    type = "date"
                    register = {register}
                    error = {errors.salida}
                />
                <Field 
                    id = "regreso"
                    etiqueta = "Regreso"
                    type = "date"
                    register = {register}
                    error = {errors.regreso}
                />
            </div>
            <Field 
                id = "presupuesto"
                etiqueta = "Presupuesto"
                type = "number"
                placeholder = "500"
                register = {register}
                error = {errors.presupuesto}
            />
            <button type = "submit" disabled = {mutacion.isPending}>
                {mutacion.isPending ? "Enviando..." : "Enviar"}
            </button>
            {mutacion.isSuccess && (
                <p role = "status">Enviado correctamente</p>
            )}
            {mutacion.isError && (
                <p role = "alert">{mutacion.error.message}</p>
            )}
        </form>
    )
}
