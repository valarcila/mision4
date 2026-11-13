import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import App from "./App"

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            // considerar reciente data durante 60 s
            staleTime: 60 * 1000,
            // reintentar una vex si falla
            retry: 1
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
