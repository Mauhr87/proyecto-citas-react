import React from 'react'

const Paciente = () => {
  return (
    <div className="text-white mb-8 shadow-md py-5 px-8 bg-indigo-vet-900 rounded-sm">
        <p className="uppercase font-bold mb-3">Nombre: <span className="font-normal normal-case text-white/[.5]">Docky</span></p>
        <p className="uppercase font-bold mb-3">Propietario: <span className="font-normal normal-case text-white/[.5]">Mauricio</span></p>
        <p className="uppercase font-bold mb-3">Email: <span className="font-normal normal-case text-white/[.5]">mhidalgodg@gmail.com</span></p>
        <p className="uppercase font-bold mb-3">Fecha Alta: <span className="font-normal normal-case text-white/[.5]">2022/08-19</span></p>
        <p className="uppercase font-bold mb-3">Síntomas: <span className="font-normal normal-case text-white/[.5]">No ladra</span></p>
        <div className="flex justify-between mt-10">
            <button type="button" class="py-2 px-10 bg-dark-purple-light hover:bg-dark-purple-light/[.8] text-white font-bold uppercase rounded-sm">Editar</button>
            <button type="button" class="py-2 px-10 bg-fuchsia-700 hover:bg-fuchsia-700/[.8] text-white font-bold uppercase rounded-sm">Eliminar</button>
        </div>
    </div>
  )
}

export default Paciente