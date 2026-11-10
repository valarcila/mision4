import Stat from "./Stat";
import { useObtenerViajes } from "../hooks/useViajes";
import { contarViajes, sumarPresupuesto } from "../logic";

export default function Stats() {
    const { data, isPending, isError } = useObtenerViajes()

    if (isPending || isError) return null

    const viajes = contarViajes(data)
    const presupuesto = sumarPresupuesto(data)

    return (
        <section className = "stats">
            <Stat value = {viajes} etiqueta = "viajes"/>
            <Stat 
                value = {presupuesto} 
                etiqueta = "euros"
            />
        </section>
    )
}
