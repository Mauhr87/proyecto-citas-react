import React from 'react'

const Paciente = ({paciente, getDeleteId, setPacienteEditado}) => {

  const handleDelete = () =>{

    const resultado = window.confirm("¿Quiere eliminar este Paciente?")
    if(resultado) {
      getDeleteId(paciente.id)  
    }

  }

  const handleEdit = () =>{
    setPacienteEditado(paciente)
    
  }
  
  return (
    <div className="text-white mb-8 shadow-md py-5 px-8 bg-dark-purple rounded-sm">
        <p className="uppercase font-bold mb-3">Nombre: <span className="font-normal normal-case text-white/[.6]">{paciente.mascota}</span></p>
        <p className="uppercase font-bold mb-3">Propietario: <span className="font-normal normal-case text-white/[.6]">{paciente.propietario}</span></p>
        <p className="uppercase font-bold mb-3">Email: <span className="font-normal normal-case text-white/[.6]">{paciente.email}</span></p>
        <p className="uppercase font-bold mb-3">Fecha Alta: <span className="font-normal normal-case text-white/[.6]">{paciente.alta}</span></p>
        <p className="uppercase font-bold mb-3">Síntomas: <span className="font-normal normal-case text-white/[.6]">{paciente.sintomas}</span></p>
        <div className="flex justify-between mt-10">
            <button type="button" className="py-2 px-10 bg-fuchsia-700 hover:bg-fuchsia-700/[.8] text-white font-bold uppercase rounded-sm" onClick={handleEdit}>Editar</button>
            <button type="button" className="py-2 px-10 bg-fuchsia-700/[.3] hover:bg-fuchsia-700/[.8] text-white font-bold uppercase rounded-sm" onClick={handleDelete}>Eliminar</button>
        </div>
    </div>
  )
}

export default Paciente