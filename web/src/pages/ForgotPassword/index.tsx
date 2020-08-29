import React, { useState, useEffect, FormEvent } from "react";
import { Link } from "react-router-dom";

import showPassword from "../../assets/images/icons/show-password.svg";
import hidePassword from "../../assets/images/icons/hide-password.svg";
import purpleHeartIcon from "../../assets/images/icons/purple-heart.svg";
import "./style.css";
import "../../assets/styles/global.css";

import ProffyPage from '../../components/ProffyPage';

import api from "../../services/api";

const ForgotPassword = () => {

    const [hiddenPassword, setHiddenPassword] = useState(true);
    
    function changePasswordActive() {
        if(hiddenPassword) setHiddenPassword(false);
        else setHiddenPassword(true);
    }

  return (
    <div id="landing-page">
      <div className="forgot">
        <div className="forgot-form">
          <h1>Eita, esqueceu sua senha?</h1>
          <p>Não esquenta, vamos dar um jeito nisso.</p>
          <form action="">
            <fieldset>
              <input type="email" placeholder="E-mail" />
            </fieldset>
            <Link to='/success-forgot-password'>
              <button type="submit">Enviar</button>
            </Link>
          </form>
        </div>
      </div>
      <ProffyPage/>
    </div>
  );
};

export default ForgotPassword;
