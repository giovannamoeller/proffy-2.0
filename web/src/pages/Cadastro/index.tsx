import React, { useState, useEffect, FormEvent } from "react";
import { Link } from "react-router-dom";
import { useHistory } from 'react-router-dom';


import showPassword from "../../assets/images/icons/show-password.svg";
import hidePassword from "../../assets/images/icons/hide-password.svg";
import "./style.css";
import "../../assets/styles/global.css";

import ProffyPage from "../../components/ProffyPage";

import api from "../../services/api";

const Cadastro = () => {
  const history = useHistory();

  const [name, setName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function createUser(e: FormEvent) {
    e.preventDefault();
    api.post("/users", {
      name,
      last_name,
      email,
      password,
    }).then(() => {
      history.push("/success-sign-up");
    }).catch(err => {
      console.log(err);
    });
  }

  const [hiddenPassword, setHiddenPassword] = useState(true);

  function changePasswordActive() {
    if (hiddenPassword) setHiddenPassword(false);
    else setHiddenPassword(true);
  }

  return (
    <div id="landing-page">
      <div className="create">
        <div className="create-form">
          <h1>Cadastro</h1>
          <p>Preencha os dados abaixo para começar.</p>
          <form onSubmit={createUser}>
            <fieldset>
              <input
                type="text"
                placeholder="Nome"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
              <input
                type="text"
                placeholder="Sobrenome"
                value={last_name}
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
              />
              <input
                type="email"
                placeholder="E-mail"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <div>
                {hiddenPassword ? (
                  <img
                    src={showPassword}
                    alt=""
                    onClick={changePasswordActive}
                  />
                ) : (
                  <img
                    src={hidePassword}
                    alt=""
                    className="hidePass"
                    onClick={changePasswordActive}
                  />
                )}

                {hiddenPassword ? (
                  <input
                    type="password"
                    placeholder="Senha"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                ) : (
                  <input
                    type="text"
                    placeholder="Senha"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                )}
              </div>
            </fieldset>
            <button type="submit">Concluir Cadastro</button>
          </form>
        </div>
      </div>
      <ProffyPage />
    </div>
  );
};

export default Cadastro;
