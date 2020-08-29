import React from "react";

import logo from "../../assets/images/logo.svg";
import background from "../../assets/images/background.svg";
import "../../assets/styles/global.css";
import "./style.css";

const ProffyPage = () => {
  return (
    <div className="proffy" style={{ backgroundImage: `url(${background})` }}>
        <div className="proffyText">
          <img src={logo} />
          <p>Sua plataforma de estudos online.</p>
        </div>
      </div>
  );
};

export default ProffyPage;
