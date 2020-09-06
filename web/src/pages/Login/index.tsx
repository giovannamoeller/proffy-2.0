import React, { useState, useEffect, FormEvent } from "react";
import { Link, useHistory } from "react-router-dom";

import showPassword from "../../assets/images/icons/show-password.svg";
import hidePassword from "../../assets/images/icons/hide-password.svg";
import purpleHeartIcon from "../../assets/images/icons/purple-heart.svg";
import "./style.css";
import "../../assets/styles/global.css";

import ProffyPage from "../../components/ProffyPage";

import api from "../../services/api";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();


  const [hiddenPassword, setHiddenPassword] = useState(true);

  function changePasswordActive() {
    if (hiddenPassword) setHiddenPassword(false);
    else setHiddenPassword(true);
  }

  function login(e: FormEvent) {
    e.preventDefault();
    api.post('/login', {
      email,
      password
    }).then(() => {
      history.push('/home')
    }).catch(err => {
      console.log(err)
    })
  }

  return (
    <div id="landing-page">
      <ProffyPage />

      <div className="login">
        <div className="login-form">
          <h1>Fazer login</h1>
          <form onSubmit={login}>
            <fieldset>
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
                    alt="Show Password"
                    onClick={changePasswordActive}
                  />
                ) : (
                  <img
                    src={hidePassword}
                    alt="Hide Password"
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
            <section className="form-footer">
              <div>
                <label htmlFor="rememberMe">
                  Lembrar-me
                  <input type="checkbox" id="rememberMe" />
                  <span className="checkmark"></span>
                </label>
              </div>
              <Link to="/forgot-password">
                Esqueci minha senha
              </Link>
            </section>
            <button type="submit">Entrar</button>
          </form>
          <div className="footer-login">
            <div>
              <p>Não tem uma conta?</p>
              <Link to="/sign-up">
                Cadastre-se
              </Link>
            </div>
            <div>
              <p>É de graça</p>
              <img src={purpleHeartIcon} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
