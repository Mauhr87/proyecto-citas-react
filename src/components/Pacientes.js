import React from 'react'
import Paciente from "./Paciente"

const Pacientes = ({pacientes, setPacientes}) => {

  const getDeleteId = (id) => {
     const pacientesActualizados = pacientes.filter(paciente => paciente.id !== id)

     setPacientes(pacientesActualizados)
  }


  return (
    <div className="md:w-1/2 lg:w-3/5 mx-5">
        <header className="bg-dark-purple px-5 py-10 text-center text-white border-l-8 border-fuchsia-700">
            <h2 className="font-bold text-3xl uppercase mb-3">Listado Pacientes</h2>

        </header>

        <div className="p-10 bg-dark-purple/[.7]">
          <p className="text-white text-xl mb-8 uppercase">Administra tus <span className="text-fuchsia-500 font-bold">Pacientes y Citas</span></p>

          {pacientes.map((paciente) =>{
            
            return (
              <Paciente
                paciente={paciente}
                getDeleteId={getDeleteId}
                key={paciente.id}
              />
            )
          })}
        </div>

    </div>
  )
}

export default Pacientes