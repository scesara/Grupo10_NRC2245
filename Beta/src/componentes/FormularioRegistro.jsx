import React from "react";
import "../estilos/FormularioRegistro.css";
import Input from "./Input";

export default function FormularioRegistro() {
  return (
    <div>
      <h1 className="nombre-app">InstaYa</h1>
      
     
      <form className="formulario-registro">
        <div className="contenedor-registro">
          <h2>Bienvenido</h2>
          <Input tipo={"text"} holder={"Nombre"} />

          <Input tipo={"text"} holder={"Apellido"} />

          <Input tipo={"email"} holder={"Correo Electronico"} />
          <Input tipo={"text"} holder={"Celular"} />
          <Input tipo={"password"} holder={"Contraseña"} />
          <Input tipo={"password"} holder={"Confirmar Contraseña"} />
          <br />
          <button className="boton-enviar">Registrar</button>
          <br />
          <a href="" className="registro-link">
            ¿te encuentras registrado? dale click aqui
          </a>
        </div>
      </form>
    </div>
  );
}


