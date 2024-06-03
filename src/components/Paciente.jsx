
export const Paciente = ({ paciente }) => {

    const { nombre, propietario, email, fecha, sintomas } = paciente
    
  return (
    <div className='mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl md:w-1/2 '>
        <p className='font-bold mb-3 text-gray-700 uppercase'> Nombre: {''}
            <span className='font-normal'>{nombre}</span>
        </p>

        <p className='font-bold mb-3 text-gray-700 uppercase'> Propietario: {''}
            <span className='font-normal'>{propietario}</span>
        </p>

        <p className='font-bold mb-3 text-gray-700 uppercase'> Email: {''}
            <span className='font-normal'>{email}</span>
        </p>

        <p className='font-bold mb-3 text-gray-700 uppercase'> Fecha de Alta: {''}
            <span className='font-normal'>{fecha}</span>
        </p>

        <p className='font-bold mb-3 text-gray-700 uppercase'> Sintomas: {''}
            <span className='font-normal'>{sintomas}</span>
        </p>

        <div className="flex justify-between mt-10">
            <button 
            className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-lg uppercase"
             type="button"
             >Editar</button>

            <button
            className="py-2 px-10 bg-red-600 hover:bg-red-800 text-white font-bold uppercase rounded-lg"
             type="button"
             >Eliminar</button>
        </div>
    </div>
  )
}
