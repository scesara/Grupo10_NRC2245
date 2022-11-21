import React from "react";
import "../estilos/FormularioRegistro.css";

export default function FormularioRegistro() {
  return (
    <div>
      <h1 className="nombre-app">InstaYa</h1>
      
    <form className="formulario-registro">
      
      <div className="contenedor-registro">
        <h2>Bienvenido</h2>
        <input
          className="datos"
          type="text"
          placeholder="Nombres"
          name="texto"
        />
        <input
          className="datos"
          type="text"
          placeholder="Apellidos"
          name="texto"
        />
        <input
          className="datos"
          type="email"
          placeholder="Correo Electronico"
          name="texto"
        />
        <input
          className="datos"
          type="text"
          placeholder="Celular"
          name="texto"
        />
        <input
          className="datos"
          type="password"
          placeholder="Contraseña"
          name="texto"
        />
        <input
          className="datos"
          type="password"
          placeholder="Confirmar Contraseña"
          name="texto"
        />
        <br />
        <button className="boton-enviar">Registrar</button>
        <br />
        <a href="" className="registro-link">¿te encuentras registrado? dale click aqui</a>
      </div>
    </form>
    </div>
  );
}
