import React from 'react'
import {useState, useEffect} from 'react'
import Error from "./Error"


const Formulario = ({pacientes, setPacientes, pacienteEditado, setPacienteEditado}) => {

    const [id, setId] = useState(0)
    const [mascota, setMascota] = useState('')
    const [propietario, setPropietario] = useState('')
    const [email, setEmail] = useState('')
    const [alta, setAlta] = useState('')
    const [sintomas, setSintomas] = useState('')

    const [error, setError] = useState(false)

    useEffect(() => {
        const emptyEditado = Object.keys(pacienteEditado).length === 0

        if (!emptyEditado) {
            setMascota(pacienteEditado.mascota)
            setPropietario(pacienteEditado.propietario)
            setEmail(pacienteEditado.email)
            setAlta(pacienteEditado.alta)
            setSintomas(pacienteEditado.sintomas)
        }
      
    }, [pacienteEditado])
    

    const handleSubmit = (e) =>{
        e.preventDefault()
        
        if ([mascota, propietario, email, alta, sintomas].includes('')) {
            setError(true)
            return
        }
        
        setError(false)
     
        const objPaciente = {
            mascota,
            propietario, 
            email,
            alta, 
            sintomas
        }

        if (pacienteEditado.id) {
            objPaciente.id = pacienteEditado.id
            const pacientesActualizados = pacientes.map((pacienteActual) =>{
                if (pacienteActual.id === pacienteEditado.id) {
                    return objPaciente
                }else{
                    return pacienteActual
                }
            })
            setPacientes(pacientesActualizados)
            setPacienteEditado({})

        }else{
            objPaciente.id = Date.now()
            setPacientes([...pacientes, objPaciente])
        }

        setMascota('')
        setPropietario('')
        setEmail('')
        setAlta('')
        setSintomas('')


    }


    return (
        <div className="md:w-1/2 lg:w-2/5 mx-5">
            <header className="bg-dark-purple px-5 py-10 text-center text-white border-l-8 border-fuchsia-700">
                <h2 className="font-bold text-3xl uppercase mb-3">Seguimiento Pacientes</h2>
                
            </header>
            <div className="p-10 bg-dark-purple/[.9]">
                {error ? <Error>Todos los campos son obligatorios</Error> : ''}
                <p className="text-white text-xl mb-8 uppercase">Añade Pacientes y <span className="text-fuchsia-700 font-bold">Administralos</span></p>
                <form onSubmit={handleSubmit}>
                    <div className="mb-8">
                        <label htmlFor="mascota" className="block mb-3 uppercase font-bold text-white">Nombre Mascota</label>
                        <input className="outline-0 bg-white/[.06] w-full p-4 rounded-sm placeholder-gray-50/[.2] text-white" type="text" placeholder="Nombre de la Mascota" onChange={(e) => setMascota(e.target.value)} value={mascota}/>
                    </div>

                    <div className="mb-8">
                        <label htmlFor="propietario" className="block mb-3 uppercase font-bold text-white">Nombre Propietario</label>
                        <input className="outline-0 bg-white/[.06] w-full p-4 rounded-sm placeholder-gray-50/[.2] text-white" type="text" placeholder="Nombre del Propietario" onChange={(e) => setPropietario(e.target.value)} value={propietario}/>
                    </div>

                    <div className="mb-8">
                        <label htmlFor="email" className="block mb-3 uppercase font-bold text-white">Email</label>
                        <input className="outline-0 bg-white/[.06] w-full p-4 rounded-sm placeholder-gray-50/[.2] text-white" type="text" placeholder="Email del Propietario" onChange={(e) => setEmail(e.target.value)} value={email}/>
                    </div>

                    <div className="mb-8">
                        <label htmlFor="alta" className="block mb-3 uppercase font-bold text-white">Alta</label>
                        <input className="outline-0 bg-white/[.06] w-full p-4 rounded-sm placeholder-gray-50/[.2] text-white" type="date" onChange={(e) => setAlta(e.target.value)} value={alta}/>
                    </div>

             <div className="mb-8">
                        <label htmlFor="sintomas" className="block mb-3 uppercase font-bold text-white">Síntomas</label>
                        <textarea id="sintomas" className="outline-0 bg-white/[.06] w-full p-4 rounded-sm placeholder-gray-50/[.2] text-white" placeholder="Describe los Síntomas" onChange={(e) => setSintomas(e.target.value)} value={sintomas}></textarea>
                    </div>    

                    <input type="submit" value={pacienteEditado.id ? 'Editar Paciente' : 'Agregar Paciente'} className='bg-fuchsia-700 w-full py-4 px-3 text-white text-xl font-bold hover:bg-fuchsia-700/[.8] cursor-pointer transition-colors uppercase rounded-sm'/>        
                </form>
            </div>
        </div>
    )
}

export default Formulario