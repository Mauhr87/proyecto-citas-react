import logo from './logo.svg';
import {useState, useEffect} from 'react'
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import Pacientes from "./components/Pacientes";

function App() {

  const [pacientes, setPacientes] = useState(() =>{
    const savedPaciente = JSON.parse(localStorage.getItem('pacientes'))
    return savedPaciente || "";
  })

  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify(pacientes));
  }, [pacientes]);

  return (
    <div className="container mx-auto pt-20 pb-20">
      <Header/>
      <div className="mt-12 md:flex">
        <Formulario
          pacientes={pacientes}
          setPacientes={setPacientes}
        />
        <Pacientes
          pacientes={pacientes}
          setPacientes={setPacientes}
        />
      </div>
    </div>
  );
}

export default App;
