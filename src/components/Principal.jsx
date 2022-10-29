import React from "react";

function Principal() {
  return (
    <header>
      <div className="container">
        <div>
          <div className="title">
            <h1>Simples. Seguro.</h1>
            <h1>Troque mensagens com confiança.</h1>
          </div>

          <p className="content">
            Com o WhatsApp, suas mensagens e chamadas são rápidas, simples,
            seguras e gratuitas*. Disponível para celulares em todo o mundo.
          </p>
          <p className="obs">
            * Sujeito à cobrança de dados. Entre em contato com sua operadora
            para mais informações.
          </p>
          <a href="#" className="btn">
            BAIXAR AGORA
          </a>
          <div className="links">
            <a href="#" className="link">
              <img
                className="link-icon"
                src="images/android-icon.png"
                alt="android-icon"
              />
              <span>Android</span>
              <img src="images/seta.png" alt="seta" className="link-arrow" />
            </a>
            <a href="#" className="link">
              <img
                className="link-icon"
                src="images/apple-icon.png"
                alt="apple-icon"
              />
              <span>iPhone</span>
              <img src="images/seta.png" alt="seta" className="link-arrow" />
            </a>
            <a href="#" className="link">
              <img class="link-icon" src="images/pc-icon.png" alt="pc-icon" />
              <span>Mac ou Windows</span>
              <img src="images/seta.png" alt="seta" className="link-arrow" />
            </a>
          </div>
        </div>

        <img
          className="phone-img"
          src="images/whatsapp-phone.png"
          alt="smartphone com whatsapp"
        />
        <img
          className="phone-img-sm"
          src="images/whatsapp-phone-3.png"
          alt="smartphone com whatsapp"
        />
      </div>
    </header>
  );
}

export default Principal;
