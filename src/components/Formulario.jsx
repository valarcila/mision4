import { useForm, useWatch } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import Field from "./Field"
import { useEnviarViaje } from "../hooks/useViajes"
import { viaje } from "../schemas/viaje"
import { obtenerHoy } from "../logic"

export default function Formulario() {
    // gestionar envio viaje
    const mutacion = useEnviarViaje()

    const { 
        register, 
        handleSubmit, 
        control,
        reset,
        formState: { errors, isSubmitting } 
    } = useForm({ 
        resolver: zodResolver(viaje),
        // poner cursor en error 
        shouldFocusError: true,
        defaultValues: {
            destino: "",
            salida: "",
            regreso: "",
            presupuesto: ""
        }
    })

    // observar cambios salida
    const salida = useWatch({
        control,
        name: "salida"
    })

    function onSubmit(data) {
        mutacion.mutate(data, {
            onSuccess: () => reset()
        })
    }

    return (
        <form 
            className = "formulario" 
            onSubmit = {handleSubmit(onSubmit)} 
            onChange = {() => {
                // desaparecer mensaje anterior
                if (mutacion.isSuccess || mutacion.isError) mutacion.reset()
            }}
            noValidate
        >
            <h2>Nuevo viaje</h2>
            <Field 
                id = "destino"
                etiqueta = "Destino"
                placeholder = "Croacia"
                error = {errors.destino}
                register = {register}
            />
            <div className = "fechas">
                <Field 
                    id = "salida"
                    etiqueta = "Salida"
                    type = "date"
                    min = {obtenerHoy()}
                    error = {errors.salida}
                    register = {register}
                />
                <Field 
                    id = "regreso"
                    etiqueta = "Regreso"
                    type = "date"
                    min = {salida || obtenerHoy()}
                    error = {errors.regreso}
                    register = {register}
                />
            </div>
            <Field 
                id = "presupuesto"
                etiqueta = "Presupuesto en euros"
                type = "number"
                placeholder = "500"
                error = {errors.presupuesto}
                register = {register}
            />
            <button type = "submit" disabled = {isSubmitting || mutacion.isPending}>
                {mutacion.isPending ? "Enviando..." : "Enviar"}
            </button>
            {mutacion.isSuccess && (
                <p className = "enviado" role = "status">Enviado correctamente</p>
            )}
            {mutacion.isError && (
                <p className = "error" role = "alert">{mutacion.error.message}</p>
            )}
        </form>
    )
}
