import React, { useState } from "react";
import { useForm } from "./useForm";
import './Nuevaorden.css'




export default function Nuevaorden() {
  const initialForm = {
    
  };
  
  //Función validar el formulario
  const validationForm = (form) => {
    let errors = {};
    
  }
  const { form, errors, loading, response, handleChange, handleBlur, handleSubmit } =
  useForm(initialForm, validationForm);
    



  return (
 
  <div className="contenedorprincipal">


    <form onSubmit={handleSubmit}>
      <h2>Datos de envio</h2> 
      <label htmlFor="fecha">Fecha</label>
      <input type="date" name="fecha" placeholder="Fecha" id="fecha" value={form.fecha}
        onChange={handleChange} /> 


      <h2>Informacion del paquete:</h2>
      <input type="number" className="entrada" name="ancho" placeholder="Ancho" id="field" value={form.dimension}
        onChange={handleChange} onBlur={handleBlur} required />
      <label htmlFor="">Cm  </label>

      <input type="number" className="entrada" name="largo" placeholder="Largo:" id="field" value={form.dimension}
        onChange={handleChange} onBlur={handleBlur} required />
      <label htmlFor="">Cm  </label>

      <input type="number" className="entrada" name="alto" placeholder="Alto" id="field" value={form.dimension}
        onChange={handleChange} onBlur={handleBlur} required />
      <label htmlFor="">Cm  </label>

      <input type="number" className="entrada" name="peso" placeholder="Peso" id="field" value={form.dimension}
        onChange={handleChange} onBlur={handleBlur} required />
      <label htmlFor="">Kg  </label> <hr />
      <label htmlFor="nomb">Nombre del destinatario: </label>
      <input type="nomb" className="entrada2" name="nomb" id="field" value={form.name} br
        onChange={handleChange} onBlur={handleBlur} required />  <br /><br />
      <label htmlFor="documento">Documento de identidad</label>
      <select name="document" id="document" value={form.documento} onChange={handleChange} onBlur={handleBlur} ><br /> <br />
        <option value="seleccion">Seleccione Documento</option>
        <option value="cedula">Cedula</option>
        <option value="cedulae">Cedula Extranjera</option>
        <option value="pasaporte">Pasaporte</option>

      </select> <br /> <br />
      <label htmlFor="numbdoc">Numero de documento:</label>
      <input type="number" className="entrada2" name="numbdoc" id="numbdoc" value={form.documento} onChange={handleChange} onBlur={handleBlur} /><br />
      <hr />
      <h3>Destino:</h3>
     
      <label htmlFor="dept">Departamento:</label>
      <select name="dept" id="dept" value={form.destino} onChange={handleChange} onBlur={handleBlur} >
        <option value="">Seleccione el departamento </option> 

        <option value="Amazonas">Amazonas</option>
        <option value="Antioquia">Antioquia</option>
        <option value="Arauca">Arauca</option>
        <option value="Atlántico">Atlántico</option>
        <option value="Bolívar">Bolívar</option>
        <option value="Boyacá">Boyacá</option>
        <option value="Caldas">Caldas</option>
        <option value="Caquetá">Caquetá</option>
        <option value="Casanare">Casanare</option>
        <option value="Cauca">Cauca</option>
        <option value="Cesar">Cesar</option>
        <option value="Chocó">Chocó</option>
        <option value="Córdoba">Córdoba</option>
        <option value="Cundinamarca">Cundinamarca</option>
        <option value="Guainía">Guainía</option>
        <option value="Guaviare">Guaviare</option>
        <option value="Huila">Huila</option>
        <option value="La Guajira">La Guajira</option>
        <option value="Magdalena">Magdalena</option>
        <option value="Meta">Meta</option>
        <option value="Nariño">Nariño</option>
        <option value="Norte de Santander">Norte de Santander</option>
        <option value="Putumayo">Putumayo</option>
        <option value="Quindío">Quindío</option>
        <option value="Risaralda">Risaralda</option>
        <option value="San Andrés y Providencia">San Andrés y Providencia</option>
        <option value="Santander">Santander</option>
        <option value="Sucre">Sucre</option>
        <option value="Tolima">Tolima</option>
        <option value="Valle del Cauca">Valle del Cauca</option>
        <option value="Vaupés">Vaupés</option>
        <option value="Vichada">Vichada</option>
      </select>
      <label htmlFor="ciudad">Ciudad:</label>
      <input type="text" className="entrada2" name="ciudad" id="ciudad" value={form.destino} onChange={handleChange} onBlur={handleBlur} required />
      <label htmlFor="direccion">Direccion:</label>
      <input type="text" className="entrada2" name="direccion" id="direccion" value={form.destino} onChange={handleChange} onBlur={handleBlur} required /> <br /> <br />
      <label htmlFor="tel">Numero de telefono: </label>
      <input type="number" className="entrada2" name="tel" id="tel" /> <hr />
      <h4>Datos del remitente</h4>
      <label htmlFor="nombr">Nombre del remitente: </label>
      <input type="text" className="entrada2" name="nombr" id="numbr" value={form.name} onChange={handleChange} onBlur={handleBlur} />
      <label htmlFor="telre">Numero de Telefono: </label>
      <input type="number" className="entrada2" name="telre" id="telre" value={form.numb} onChange={handleChange} onBlur={handleBlur} /> <br /><br />
      <label htmlFor="pago"> Forma de Pago: </label>
      <select name="pago" id="" value={form.name} onChange={handleChange} onBlur={handleBlur}>
        <option value="destinatario">Cancela el destinatario</option>
        <option value="remitente">Cancela el remitente</option>
      </select> <hr />
      
      <input type="submit" className="envio" value="Enviar" />










    </form>


  </div>

    )
}