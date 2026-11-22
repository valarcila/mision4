import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ErrorValidacion } from "./logic"
import App from "./App"

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            // considerar reciente data durante 60 s
            staleTime: 60 * 1000,
            // reintentar una vez, excepto errores de validacion
            retry: (intentos, error) => {
                return !(error instanceof ErrorValidacion) && intentos < 1
            }
        }
    }
})

export default function Root() {
    return (
        <QueryClientProvider client = {queryClient}>
            <App />
        </QueryClientProvider>
    )
}
