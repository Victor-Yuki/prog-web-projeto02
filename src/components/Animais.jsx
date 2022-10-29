import React, { useEffect, useState } from "react";
import Animal from "./Animal";
import axios from "axios";


function Animais() {
  const [isLoginHidden, setLoginHidden] = useState(false),
    [isHidden, setHidden] = useState(true),
    [numAnimais, setNumAnimais] = useState(0),
    [listAnimais, setListAnimais] = useState([]);

  //const axios = require("axios");

  useEffect(() => {
    var logado = localStorage.getItem("logado");
    if (logado) {
      hideLogin();
    }
  }, []);

  function login() {
    axios.post("https://reqres.in/api/login/", {
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

  function gerarAnimal() {
    if (numAnimais <= 0) {
      alert("O número deve ser maior que 0.");
    } else if (numAnimais > 50) {
      alert("O número de animais está limitado em 50.");
    } else {
      let endpoint = "https://zoo-animal-api.herokuapp.com/animals/rand/";
      axios
        .get(endpoint + numAnimais)
        .then((res) => {
          //console.log(res.data);
          listarAnimais(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  async function listarAnimais(animais) {
    console.log(animais);
    const new_lista = [];
    for (var i = 0; i < animais.length; i++) {
      let new_animal = {
        nome: animais[i].name,
        latim: animais[i].latin_name,
        habitat: animais[i].habitat,
        imagem: animais[i].image_link
      };
      console.log(new_animal);
      new_lista.push(new_animal);
    }
    setListAnimais([...listAnimais, ...new_lista]);
    console.log("lista" + listAnimais);
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
        <div className="lista-animais">
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
    </div>
  );
}

export default Animais;
