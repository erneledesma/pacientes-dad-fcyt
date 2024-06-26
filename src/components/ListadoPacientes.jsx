import { Paciente } from "./Paciente"


export const ListadoPacientes = ({ pacientes }) => {

  console.log(pacientes)
  return (
    <div className="w-1/2 lg:w-3/5 md:h:screen overflow-y-scroll">
      <h2 className="font-black text-3xl text-center">Listado de Pacientes</h2>
      <p className="text-xl mt-5 mb-10 text-center">
        Administra tus {''}
        <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
      </p>

      {
        pacientes.map((paciente, index) => (
         <Paciente
          key={index}
          paciente={paciente}
          />
        ))
        }


    </div>
  )
}
