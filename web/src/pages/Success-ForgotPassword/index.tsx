import React, { useState, useEffect, FormEvent } from "react";
import { Link } from "react-router-dom";

import background from "../../assets/images/background-2.svg";
import done from "../../assets/images/icons/done.svg";
import "./style.css";
import "../../assets/styles/global.css";

import Success from '../../components/Success';


const SuccessCadastro = () => {

  return (
    <Success
      title="Cadastro Concluído"
      description="Agora você faz parte da plataforma da Proffy.
      Tenha uma ótima experiência."/>
  );
};

export default SuccessCadastro;
