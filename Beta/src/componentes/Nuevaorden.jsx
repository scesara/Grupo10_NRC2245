import { useForm } from "react-hook-form";
import '../estilos/Nuevaorden.css'




export default function Nuevaode() {
    const{register, handleSubmit} = useForm();
    const onSubmit= (d) =>
    alert(JSON.stringify(d))

    
    
  return (
    <div>
        <form onSubmit={handleSubmit (onSubmit)}>
        <h2>Datos de envio</h2> 
      <label>Fecha:</label>
      <input  type="date" className="entrada2" {... register("fecha")} /> 


      <h2>Informacion del paquete:</h2>
      <label >Ancho:</label>
      <input type="number" className="entrada" {...register("Ancho")} required />
      <label >Cm  </label>

      <label >Largo:</label>  
      <input type="number" className="entrada" {... register ("largo")}required />
      <label >Cm  </label>
      <label >Alto:</label>

      <input type="number"className="entrada" {...register ("alto")} required />
      <label >Cm  </label>
      <label >Peso:</label>

      <input type="number" className="entrada" {...register ("peso")} required />
      <label >Kg  </label> <hr />
      <label >Nombre del destinatario: </label>
      <input className="entrada2" {...register ("Nombredestinatario")} required />  <br /><br />
      <label >Documento de identidad</label>
      <select {...register ("Tipodedocumento")} ><br /> <br />
        <option value="seleccion">Seleccione Documento</option>
        <option value="cedula">Cedula</option>
        <option value="cedulae">Cedula Extranjera</option>
        <option value="pasaporte">Pasaporte</option>

      </select> <br /> <br />
      <label >Numero de documento:</label>
      <input type="number" className="entrada2" {...register ("Numerodedocumento")}/><br />
      <hr />
      <h3>Destino:</h3>
     
      <label >Departamento:</label>
      <select {...register ("Departamento")} >
        <option value="">Seleccione el departamento </option> 

        <option value="Amazonas">Amazonas</option>
        <option value="Antioquia">Antioquia</option>
        <option value="Arauca">Arauca</option>
        <option value="Atl??ntico">Atl??ntico</option>
        <option value="Bol??var">Bol??var</option>
        <option value="Boyac??">Boyac??</option>
        <option value="Caldas">Caldas</option>
        <option value="Caquet??">Caquet??</option>
        <option value="Casanare">Casanare</option>
        <option value="Cauca">Cauca</option>
        <option value="Cesar">Cesar</option>
        <option value="Choc??">Choc??</option>
        <option value="C??rdoba">C??rdoba</option>
        <option value="Cundinamarca">Cundinamarca</option>
        <option value="Guain??a">Guain??a</option>
        <option value="Guaviare">Guaviare</option>
        <option value="Huila">Huila</option>
        <option value="La Guajira">La Guajira</option>
        <option value="Magdalena">Magdalena</option>
        <option value="Meta">Meta</option>
        <option value="Nari??o">Nari??o</option>
        <option value="Norte de Santander">Norte de Santander</option>
        <option value="Putumayo">Putumayo</option>
        <option value="Quind??o">Quind??o</option>
        <option value="Risaralda">Risaralda</option>
        <option value="San Andr??s y Providencia">San Andr??s y Providencia</option>
        <option value="Santander">Santander</option>
        <option value="Sucre">Sucre</option>
        <option value="Tolima">Tolima</option>
        <option value="Valle del Cauca">Valle del Cauca</option>
        <option value="Vaup??s">Vaup??s</option>
        <option value="Vichada">Vichada</option>
      </select>
      <label >Ciudad:</label>
      <input type="text" className="entrada2" {...register ("ciudad")} required />
      <label >Direccion:</label>
      <input type="text" className="entrada2"  {...register ("Direccion")} required /> <br /> <br />
      <label >Numero de telefono: </label>
      <input type="number" className="entrada2" {...register ("Telefono")} /> <hr />
      <h4>Datos del remitente</h4>
      <label >Nombre del remitente: </label>
      <input type="text" className="entrada2"{...register ("Nombredelremitente")} />
      <label >Numero de Telefono: </label>
      <input type="number" className="entrada2"  {...register ("Numerodelremitente")} /> <br /><br />
      <label > Forma de Pago: </label>
      <select {...register ("pago")}>
        <option value="destinatario">Cancela el destinatario</option>
        <option value="remitente">Cancela el remitente</option>
      </select> <hr />
      
      <input type="submit" className="envio" value="Enviar" />
        </form>
    </div>
  )
}
