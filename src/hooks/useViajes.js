import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { obtenerViajes, enviarViaje, eliminarViaje } from "../services/api"

const TODOS_KEY = ["viajes", "todos"]

// gestionar obtencion viajes
export function useObtenerViajes() {
    return useQuery({
        queryKey: TODOS_KEY,
        queryFn: obtenerViajes
    })
}

// gestionar envio viaje
export function useEnviarViaje() {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: enviarViaje,
        onSuccess: () => {
            return queryClient.invalidateQueries({ queryKey: TODOS_KEY })
        }
    })
}

// gestionar eliminacion viaje
export function useEliminarViaje() {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: eliminarViaje,
        onSuccess: () => {
            return queryClient.invalidateQueries({ queryKey: TODOS_KEY })
        }
    })
}
