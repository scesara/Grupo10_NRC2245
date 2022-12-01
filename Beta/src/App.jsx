import "./App.css";
import Nuevaorden from "./componentes/Nuevaorden";
import FormularioRegistro from "./componentes/FormularioRegistro";
import "bootstrap/dist/css/bootstrap.min.css";
import { CrudForm } from "./componentes/CrudForm";
import Perfil from "./componentes/Perfil";
import { BrowserRouter ,Route, Routes } from "react-router-dom";
import EnvioExitoso from "./componentes/EnvioExitoso";

function App() {
  return (
    <div className="App-Instaya">
      <div className="contenedor-index">
        
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Perfil />} />
          <Route path="/Perfil" element={<Perfil />} />

          <Route path="/IniciodeSesion" element={<CrudForm />} />

          <Route path="/FormularioRegistro" element={<FormularioRegistro />} />

          <Route path="/NuevaOrden" element={<Nuevaorden />} />

          <Route path="/EnvioExitoso" element={<EnvioExitoso />} />
        </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
