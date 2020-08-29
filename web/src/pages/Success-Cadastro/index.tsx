import React, { useState, useEffect, FormEvent } from "react";
import { Link } from "react-router-dom";

import background from "../../assets/images/background-2.svg";
import done from "../../assets/images/icons/done.svg";
import "./style.css";
import "../../assets/styles/global.css";


const SuccessCadastro = () => {

  return (
    <div id="landing" style={{ backgroundImage: `url(${background})` }}>
      <div>
        <img src={done} alt=""/>
        <h1>Cadastro concluído</h1>
        <p>Agora você faz parte da plataforma da Proffy. <br/>
            Tenha uma ótima experiência.
        </p>
        <Link to='/'>
          <a href="#">Fazer login</a>
        </Link>
      </div>
    </div>
  );
};

export default SuccessCadastro;
