
import { useState } from 'react'

import './App.css'
import { Formulario } from './components/Formulario'
import { Header } from './components/Header'
import { ListadoPacientes } from './components/ListadoPacientes'

function App() {  

  const [pacientes, setPacientes] = useState([])

  return (
  <div className="container mx-auto mt-20">
    <Header />
    <div className="mt-12 md:flex">
      <Formulario 
        setPacientes={setPacientes}
        pacientes={pacientes}
      />
      <ListadoPacientes
        pacientes={pacientes}
       />
    </div>
  </div>
   
  )
}

export default App
