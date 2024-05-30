import React from 'react'

export const Paciente = ({paciente, setPaciente }) => {

    
  return (
    <div className='mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl'>
        <p className='font-bold mb-3 text-gray-700 uppercase'> Nombre: {''}
            <span className='font-normal'>{ }</span>
        </p>

        <p className='font-bold mb-3 text-gray-700 uppercase'> Propietario: {''}
            <span className='font-normal'>{ }</span>
        </p>

        <p className='font-bold mb-3 text-gray-700 uppercase'> Email: {''}
            <span className='font-normal'>{ }</span>
        </p>

        <p className='font-bold mb-3 text-gray-700 uppercase'> Fecha de Alta: {''}
            <span className='font-normal'>{ }</span>
        </p>

        <p className='font-bold mb-3 text-gray-700 uppercase'> Sintomas: {''}
            <span className='font-normal'>{ }</span>
        </p>
    </div>
  )
}
