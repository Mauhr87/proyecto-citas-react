import logo from './logo.svg';
import {useState, useEffect} from 'react'
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import Pacientes from "./components/Pacientes";

function App() {

  const [pacientes, setPacientes] = useState(JSON.parse(localStorage.getItem('pacientes')) ?? [])

  const [pacienteEditado, setPacienteEditado] = useState({})

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
          pacienteEditado={pacienteEditado}
          setPacienteEditado={setPacienteEditado}
        />
        <Pacientes
          pacientes={pacientes}
          setPacientes={setPacientes}
          setPacienteEditado={setPacienteEditado}
        />
      </div>
    </div>
  );
}

export default App;
