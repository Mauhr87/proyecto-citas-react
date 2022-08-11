import logo from './logo.svg';
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import Pacientes from "./components/Pacientes";

function App() {
  return (
    <div className="container mx-auto pt-20 pb-20">
      <Header/>
      <div className="mt-12 md:flex">
        <Formulario/>
        <Pacientes/>
      </div>
    </div>
  );
}

export default App;
