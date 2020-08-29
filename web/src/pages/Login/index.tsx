import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg';
import background from '../../assets/images/background.svg';
import studyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';
import './style.css';
import '../../assets/styles/global.css';

import api from '../../services/api';

const Login = () => {

  return (
        <div id="landing-page">
            <div className="proffy" style={{backgroundImage: `url(${background})`}}>
                <img src={logo} className="logo"/>
                <p className="title">Sua plataforma de estudos online.</p>
            </div>
            <div className="login">
                <h1>Fazer login</h1>
                <form action="">
                    <fieldset>
                        <input type="email" placeholder="E-mail"/>
                        <input type="password" placeholder="Senha"/>
                        <input type="checkbox"/>Lembrar-me
                        <a href="#">Esqueci minha senha</a>
                        <button type="submit">Entrar</button>
                    </fieldset>
                </form>
                <div className="footer">
                    <div className="create-account">
                        <p>Não tem uma conta?</p>
                        <a href="#">Cadastre-se</a>
                    </div>
                    <p>É de graça</p>
                    <img src={purpleHeartIcon}/>

                </div>
            </div>
        </div>
    );
};

export default Login;
