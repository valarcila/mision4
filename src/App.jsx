import Estado from './components/Estado'
import Formulario from './components/Formulario'
import Header from './components/Header'
import Stats from './components/Stats'
import Viajes from './components/Viajes'
import { useObtenerViajes } from './hooks/useViajes'
import './App.css'

function App() {
  const { data, isPending, isError, error, refetch } = useObtenerViajes()

  return (
    <>
      <Header aplicacion = "ATLAS" autora = "Valeria"/>
      <main>
        {isPending || isError ? (
          <Estado 
            cargando = {isPending}
            error = {isError ? error : null}
            reintentar = {refetch}
          />
        ) : (
          <>
            <Stats data = {data} />
            <Viajes data = {data} />
          </>
        )}
        <Formulario />
      </main>   
    </>
  )
}

export default App
