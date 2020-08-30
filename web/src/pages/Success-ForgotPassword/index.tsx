import React from "react";

import "./style.css";
import "../../assets/styles/global.css";
import Success from '../../components/Success';

const SuccessForgotPassword = () => {
  return (
    <Success
      title="Redefinição enviada!"
      description="Boa, agora é só checar o e-mail que foi enviado para você
      redefinir sua senha e aproveitar os estudos."
      button="Voltar ao login"/>
  );
};

export default SuccessForgotPassword;
