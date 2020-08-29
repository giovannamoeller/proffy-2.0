import React from "react";

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
