import Formulario from './components/Formulario'
import Header from './components/Header'
import Stats from './components/Stats'
import Viajes from './components/Viajes'
import './App.css'

function App() {
  return (
    <>
      <Header aplicacion = "ATLAS" autora = "Valeria"/>
      <main>
        <Stats />
        <Viajes />
        <Formulario />
      </main>   
    </>
  )
}

export default App
