import React, { useEffect, useState } from "react";
import Animal from "./Animal";

const axios = require("axios").default;

function Animais() {
  const [isLoginHidden, setLoginHidden] = useState(false),
    [isHidden, setHidden] = useState(true),
    [numAnimais, setNumAnimais] = useState(0),
    [listAnimais, setListAnimais] = useState([]);

  useEffect(() => {
    var logado = localStorage.getItem("logado");
    if (logado) {
      hideLogin();
    }
  }, []);

  function login() {
    axios
      .post("https://reqres.in/api/login", {
        email: "eve.holt@reqres.in",
        password: "cityslicka"
      })
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          localStorage.setItem("logado", true);
          hideLogin();
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function hideLogin() {
    setLoginHidden(true);
    setHidden(false);
  }

  return (
    <div className="animais">
      <button class="botao" onClick={login} hidden={isLoginHidden}>
        LOGIN
      </button>
      <div className="api" hidden={isHidden}>
        <input
          type="number"
          value={numAnimais}
          onChange={(ev) => {
            setNumAnimais(ev.target.value);
          }}
        />
        <button class="botao" onClick={gerarAnimal}>
          GERAR
        </button>
        {listAnimais.map((animal, index) => (
          <div key={index}>
            <Animal
              nome={animal.nome}
              latim={animal.latim}
              habitat={animal.habitat}
              url={animal.imagem}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Animais;
