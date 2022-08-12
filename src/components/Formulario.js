import React from 'react'

const Formulario = () => {
  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
        <header className="bg-dark-purple px-5 py-10 text-center text-white border-l-8 border-indigo-vet-500">
            <h2 className="font-bold text-3xl uppercase mb-3">Seguimiento Pacientes</h2>
            
        </header>
        <div className="p-10 bg-dark-purple/[.9]">
            <p className="text-white text-xl mb-8 uppercase">Añade Pacientes y <span className="text-indigo-vet-500 font-bold">Administralos</span></p>
            <form>
                <div className="mb-8">
                    <label htmlFor="mascota" className="block mb-3 uppercase font-bold text-white">Nombre Mascota</label>
                    <input className="outline-0 bg-white/[.06] w-full p-4 rounded-sm placeholder-gray-50/[.2] text-white" type="text" placeholder="Nombre de la Mascota" />
                </div>

                <div className="mb-8">
                    <label htmlFor="propietario" className="block mb-3 uppercase font-bold text-white">Nombre Propietario</label>
                    <input className="outline-0 bg-white/[.06] w-full p-4 rounded-sm placeholder-gray-50/[.2] text-white" type="text" placeholder="Nombre del Propietario" />
                </div>

                <div className="mb-8">
                    <label htmlFor="email" className="block mb-3 uppercase font-bold text-white">Email</label>
                    <input className="outline-0 bg-white/[.06] w-full p-4 rounded-sm placeholder-gray-50/[.2] text-white" type="text" placeholder="Email del Propietario" />
                </div>

                <div className="mb-8">
                    <label htmlFor="alta" className="block mb-3 uppercase font-bold text-white">Alta</label>
                    <input className="outline-0 bg-white/[.06] w-full p-4 rounded-sm placeholder-gray-50/[.2] text-white" type="date"/>
                </div>

                <div className="mb-8">
                    <label htmlFor="sintomas" className="block mb-3 uppercase font-bold text-white">Síntomas</label>
                    <input className="outline-0 bg-white/[.06] w-full p-4 rounded-sm placeholder-gray-50/[.2] text-white" type="text" placeholder="Describe los síntomas" />
                </div>    

                 <input type="submit" value="Agregar Paciente" className='bg-indigo-vet-900 w-full py-4 px-3 text-white text-xl font-bold hover:bg-indigo-vet-900/[.8] cursor-pointer transition-colors uppercase rounded-sm'/>        
            </form>
        </div>
    </div>
  )
}

export default Formulario