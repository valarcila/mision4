import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { obtenerViajes, enviarViaje } from "../services/viajes"

// gestionar obtencion viajes
export function useObtenerViajes() {
    return useQuery({
        queryKey: ["viajes"],
        queryFn: obtenerViajes
    })
}

// gestionar envio viaje
export function useEnviarViaje() {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: enviarViaje,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["viajes"] })
        }
    })
}
