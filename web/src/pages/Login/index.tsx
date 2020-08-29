import React, { useState, useEffect, FormEvent } from "react";
import { Link } from "react-router-dom";

import showPassword from "../../assets/images/icons/show-password.svg";
import hidePassword from "../../assets/images/icons/hide-password.svg";
import purpleHeartIcon from "../../assets/images/icons/purple-heart.svg";
import "./style.css"
import "../../assets/styles/global.css";

import ProffyPage from '../../components/ProffyPage';

import api from "../../services/api";

const Login = () => {

    const [hiddenPassword, setHiddenPassword] = useState(true);
    
    function changePasswordActive() {
        if(hiddenPassword) setHiddenPassword(false);
        else setHiddenPassword(true);
    }

  return (
    <div id="landing-page">
      <ProffyPage/>

      <div className="login">
        <div className="login-form">
          <h1>Fazer login</h1>
          <form action="">
            <fieldset>
              <input type="email" placeholder="E-mail" />
              <div>
                {hiddenPassword ? 
                    <img src={showPassword} alt="" onClick={changePasswordActive}/> 
                    :  <img src={hidePassword} alt="" className="hidePass" onClick={changePasswordActive}/>}
                
                {hiddenPassword ? <input type="password" placeholder="Senha"/> : <input type="text" placeholder="Senha"/>}
              </div>
            </fieldset>
            <section className="form-footer">
              <div>
                <label htmlFor="rememberMe">Lembrar-me
                    <input type="checkbox" id="rememberMe"/>
                    <span className="checkmark"></span>
                </label>
              </div>
              <Link to="/forgot-password">
                <a href="#">Esqueci minha senha</a>
              </Link>
            </section>
            <button type="submit">Entrar</button>
          </form>
          <div className="footer">
            <div>
              <p>Não tem uma conta?</p>
              <Link to="/sign-up">
                  <a href="#">Cadastre-se</a>
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
