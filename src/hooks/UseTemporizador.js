import { useEffect } from "react"

export default function useTemporizador(activar, clear) {
    useEffect(() => {
        // dejar mensaje error, si no exito
        if (!activar) return

        const temporizador = setTimeout(() => {
            clear()
        }, 5000)

        return () => clearTimeout(temporizador)
    }, [activar, clear])
}
