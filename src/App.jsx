import Formulario from './components/Formulario'
import Header from './components/Header'
import Viajes from './components/Viajes'
import './App.css'

function App() {
  return (
    <>
      <Header aplicacion = "ATLAS" autora = "Valeria"/>
      <main>
        <Formulario />
        <Viajes />
      </main>   
    </>
  )
}

export default App
