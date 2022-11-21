import "./App.css";
import logoInstaya from "./imagenes/logo-instaya.png";
import FormularioRegistro from "./componentes/FormularioRegistro";
import Titulo from "./componentes/Titulo";
function App() {
  return (

    <div className="App-Instaya">      
      
      <div>
      
        <FormularioRegistro />
      </div>
      <div className="contenedor-logo-instaya">
        <img src={logoInstaya} className="imagen-logo" />
      </div>
    </div>
  );
}

export default App;
