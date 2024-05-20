
import './App.css'
import { Formulario } from './components/Formulario'
import { Header } from './components/Header'
import { ListadoPacientes } from './components/ListadoPacientes'

function App() {  
  return (
  <>
    <h1>React App</h1>
    <Header />
    <Formulario />
    <ListadoPacientes />
  </>
   
  )
}

export default App
