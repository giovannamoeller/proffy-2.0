import React, { useState, useEffect, FormEvent } from "react";
import { Link } from "react-router-dom";

import background from "../../assets/images/background-2.svg";
import done from "../../assets/images/icons/done.svg";
import "./style.css";
import "../../assets/styles/global.css";

interface SuccessProps {
    title: string;
    description: string;
    button: string;
}

const Success: React.FC<SuccessProps> = (props) => {

  return (
    <div id="landing" style={{ backgroundImage: `url(${background})` }}>
      <div>
        <img src={done} alt=""/>
        <h1>{props.title}</h1>
        <p>{props.description}
        </p>
        <Link to='/'>
          <a href="#">{props.button}</a>
        </Link>
      </div>
    </div>
  );
};

export default Success;
