import React, { useState, useEffect, FormEvent } from "react";
import { Link } from "react-router-dom";

import showPassword from "../../assets/images/icons/show-password.svg";
import hidePassword from "../../assets/images/icons/hide-password.svg";
import purpleHeartIcon from "../../assets/images/icons/purple-heart.svg";
import "./style.css";
import "../../assets/styles/global.css";

import ProffyPage from '../../components/ProffyPage';

import api from "../../services/api";

const Cadastro = () => {

    const [hiddenPassword, setHiddenPassword] = useState(true);
    
    function changePasswordActive() {
        if(hiddenPassword) setHiddenPassword(false);
        else setHiddenPassword(true);
    }

  return (
    <div id="landing-page">
      <div className="create">
        <div className="create-form">
          <h1>Cadastro</h1>
          <p>Preencha os dados abaixo para começar.</p>
          <form action="">
            <fieldset>
              <input type="text" placeholder="Nome" />
              <input type="text" placeholder="Sobrenome" />
              <input type="email" placeholder="E-mail" />
              <div>
                {hiddenPassword ? 
                    <img src={showPassword} alt="" onClick={changePasswordActive}/> 
                    :  <img src={hidePassword} alt="" className="hidePass" onClick={changePasswordActive}/>}
                
                {hiddenPassword ? <input type="password" placeholder="Senha"/> : <input type="text" placeholder="Senha"/>}
              </div>
            </fieldset>
            <Link to='/success-sign-up'>
              <button type="submit">Concluir Cadastro</button>
            </Link>
          </form>
        </div>
      </div>
      <ProffyPage/>
    </div>
  );
};

export default Cadastro;
