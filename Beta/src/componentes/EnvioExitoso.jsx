import React from 'react'
import { FcCheckmark } from "react-icons/fc";
import Button from "react-bootstrap/Button";


export default function EnvioExitoso() {
  return (
    <div className='Contenedor-EnvioExitoso'>
        <FcCheckmark className='Incono-exito'/>
        <h1 className='h1-envioExitoso'>Envio Exitoso</h1>
        <button type="reset" href="/Perfil" className='btn-VolverInicio'>Volver al inicio</button>
    </div>
  )
}
