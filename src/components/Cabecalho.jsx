import React from "react";

function Cabecalho() {
  return (
    <nav>
      <div className="navbar">
        <a href="#" className="logo-lg">
          <img src="images/whatsapp-logo-large.svg" alt="whatsapp logo" />
        </a>
        <a href="#" className="logo-md">
          <img src="images/whatsapp-logo-medium.svg" alt="whatsapp logo" />
        </a>

        <a href="#" className="menu">
          <img src="images/menu.png" alt="menu" />
        </a>

        <div className="nav-items">
          <a href="#">WHATSAPP WEB</a>
          <a href="#">RECURSOS</a>
          <a href="#">DOWNLOAD</a>
          <a href="#">SEGURANÇA</a>
          <a href="#">CENTRAL DE AJUDA</a>
          <a href="#" id="ultimo-item">
            <img className="globe-img" src="images/globo128.png" alt="" />

            <span className="text-lang">PT (BR)</span>
            <img src="images/triangulo.png" alt="triangulo" className="triangulo" />
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Cabecalho;
