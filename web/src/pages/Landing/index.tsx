import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/images/logo.svg";
import landingImg from "../../assets/images/landing.svg";
import studyIcon from "../../assets/images/icons/study.svg";
import logout from "../../assets/images/icons/logout.svg";
import giveClassesIcon from "../../assets/images/icons/give-classes.svg";
import purpleHeartIcon from "../../assets/images/icons/purple-heart.svg";
import "./style.css";
import "../../assets/styles/global.css";

import api from "../../services/api";

const Landing = () => {
  const [totalConnections, setTotalConnections] = useState(0); // valor inicial;

  useEffect(() => {
    api.get("/connections").then((response) => {
      setTotalConnections(Number(response.data.total));
    });
  }, []);

  return (
    <div id="home-page">
      <div className="content">
        <div className="header">
          <div>
            <Link to="/profile">
                <a href="#">
                    <img
                    src="https://avatars1.githubusercontent.com/u/47362960?s=460&u=99702db3dedab50f47b0f151acea1e2e9db1b3fc&v=4"
                    alt="Me"
                    />
                    <p>Giovanna Moeller</p>
                </a>
            </Link>
          </div>
          <div>
            <img src={logout} alt="Logout" />
          </div>
        </div>
        <div id="page-landing-content">
          <div className="logo-container">
            <img src={logo} alt="Logo" />
            <h2>Sua plataforma de estudos online.</h2>
          </div>
        <div>
          <img
            src={landingImg}
            alt="Plataforma de estudos"
            className="hero-image"
          />
        </div>
        </div>
      </div>

        <div className="footer">
                <div className="text-container">
                    <p>Seja bem-vindo</p>
                    <p>O que deseja fazer?</p>
                </div>
            <span className="total-connections">
                Total de {totalConnections} conexões já realizadas   
                <img src={purpleHeartIcon} alt="" />
            </span>
            <div className="buttons-container">
                <Link to="/study" className="study">
                <img src={studyIcon} alt="Estudar" />
                Estudar
                </Link>

                <Link to="/give-classes" href="" className="study">
                <img src={giveClassesIcon} alt="Estudar" />
                Dar aulas
                </Link>
            </div>

        </div>
    </div>
  );
};

export default Landing;
