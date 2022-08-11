import React from 'react'

const Formulario = () => {
  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
        <header className="bg-dark-purple px-5 py-10 text-center text-white border-l-8 border-fuchsia-700">
            <h2 className="font-bold text-3xl uppercase mb-3">Seguimiento Pacientes</h2>
            <p className="text-xl">Añade Pacientes y <span className="underline">Administralos</span></p>
        </header>
        <div className="p-10 bg-dark-purple-light">
            <form>
                <div className="mb-8">
                    <label htmlFor="mascota" className="block mb-3 uppercase font-bold text-white">Nombre Mascota</label>
                    <input className="outline-0 bg-white/[.06] w-full p-4 rounded-md placeholder-gray-50/[.4] text-white" type="text" placeholder="Nombre de la Mascota" />
                </div>

                <div className="mb-8">
                    <label htmlFor="mascota" className="block mb-3 uppercase font-bold text-white">Nombre Mascota</label>
                    <input className="outline-0 bg-white/[.06] w-full p-4 rounded-md placeholder-gray-50/[.4] text-white" type="text" placeholder="Nombre de la Mascota" />
                </div>

                <div className="mb-8">
                    <label htmlFor="mascota" className="block mb-3 uppercase font-bold text-white">Nombre Mascota</label>
                    <input className="outline-0 bg-white/[.06] w-full p-4 rounded-md placeholder-gray-50/[.4] text-white" type="text" placeholder="Nombre de la Mascota" />
                </div>

                <div className="mb-8">
                    <label htmlFor="mascota" className="block mb-3 uppercase font-bold text-white">Nombre Mascota</label>
                    <input className="outline-0 bg-white/[.06] w-full p-4 rounded-md placeholder-gray-50/[.4] text-white" type="text" placeholder="Nombre de la Mascota" />
                </div>

                <div className="mb-8">
                    <label htmlFor="mascota" className="block mb-3 uppercase font-bold text-white">Nombre Mascota</label>
                    <input className="outline-0 bg-white/[.06] w-full p-4 rounded-md placeholder-gray-50/[.4] text-white" type="text" placeholder="Nombre de la Mascota" />
                </div>    

                 <input type="submit" value="Agregar Paciente" className='bg-fuchsia-700 w-full p-3 text-white text-xl font-bold hover:bg-fuchsia-800 cursor-pointer transition-colors uppercase'/>        
            </form>
        </div>
    </div>
  )
}

export default Formulario