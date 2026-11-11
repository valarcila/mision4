import Stat from "./Stat";
import { contarViajes, sumarPresupuesto } from "../logic";

export default function Stats({ data }) {
    const viajes = contarViajes(data)
    const presupuesto = sumarPresupuesto(data)

    return (
        <section className = "stats">
            <Stat value = {viajes} unidad = "viajes"/>
            <Stat value = {presupuesto} unidad = "euros" />
        </section>
    )
}
