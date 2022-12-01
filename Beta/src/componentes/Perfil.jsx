import React from "react";
import "../estilos/Perfil.css";
export default function Perfil() {
  return (
    <>
      <div>
        <button>Rastrear Pedido</button>
        <div id="navegador">
          <ul>
            <li>
              <a href="#">Salir</a>
            </li>
            <li>
              <a href="#">Consulta</a>
            </li>
            <li>
              <a href="#">Ubicacion</a>
            </li>
            <li>
              <a href="#">Mis Pedidos</a>
            </li>
            <li>
              <a href="javascript:(function(){alert(' Este es tu codigo: 348549H2S2')})()">
                Generar Codigo
              </a>
            </li>
          </ul>
        </div>
        <div>
          <img
            id="cam"
            src="https://images.vexels.com/media/users/3/224252/isolated/preview/e93bef14a4978942b186a8cfa493c5ed-logotipo-de-la-caja-de-env-iacute-o-by-vexels.png "
            width="400"
            height="400"
          ></img>
          <img
            id="per"
            src="https://cdn.icon-icons.com/icons2/1769/PNG/512/4092564-about-mobile-ui-profile-ui-user-website_114033.png "
            width="70"
            height="70"
          ></img>
          <img
            id="llam"
            src="http://cdn.onlinewebfonts.com/svg/img_56686.png"
            width="70"
            height="70"
          ></img>
          <img
            id="cor"
            src="https://images.vexels.com/media/users/3/154681/isolated/preview/afd7e7061d5870f172e5f77ea943b085-abrir-icono-de-contacto-de-correo-by-vexels.png"
            width="70"
            height="70"
          ></img>
          <img
            id="fac"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_(2019).svg/2048px-Facebook_f_logo_(2019).svg.png"
            width="70"
            height="70"
          ></img>
          <img
            id="ins"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/1024px-Instagram_logo_2016.svg.png"
            width="70"
            height="70"
          ></img>
          <img
            id="twt"
            src="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-3.png"
            width="70"
            height="70"
          ></img>
        </div>

        <div className="search">
          <input
            type="text"
            className="Busc"
            placeholder="Search . . ."
            required
          />
        </div>
      </div>
    </>
  );
}
