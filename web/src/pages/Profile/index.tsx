import React, { useState, FormEvent } from "react";
import { Link } from "react-router-dom";
import Input from "../../components/Input";
import Textarea from "../../components/Textarea";
import Select from "../../components/Select";

import backIcon from "../../assets/images/icons/back.svg";
import logo from "../../assets/images/logo.svg";

import background from "../../assets/images/background.svg";

import "../../assets/styles/global.css";
import "./style.css";
import warningIcon from "../../assets/images/icons/warning.svg";

import PageHeader from "../../components/PageHeader";
import api from "../../services/api";

function TeacherForm() {
  return (
    <div id="page-teacher-form" className="container">
      <header
        className="page-header-profile"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="top-bar-container">
          <Link to="/home">
            <img src={backIcon} alt="" className="icon" />
          </Link>
          <p>Meu Perfil</p>
          <img src={logo} alt="" className="logo" />
        </div>

        <div className="header-content-profile">
          <img
            src="https://avatars1.githubusercontent.com/u/47362960?s=460&u=99702db3dedab50f47b0f151acea1e2e9db1b3fc&v=4"
            alt=""
          />
          <strong>Giovanna Moeller</strong>
          <p>Matemática</p>
        </div>
      </header>
      <main>
        <form>
          <fieldset>
            <legend>Seus dados</legend>

            <Input name="name" label="Nome" />

            <Input name="last-name" label="Sobrenome" />

            <Input name="email" label="E-mail" />

            <Input name="whatsapp" label="Whatsapp" />

            <Textarea name="bio" label="Biografia" />
          </fieldset>

          <fieldset>
            <legend>Sobre a aula</legend>
            <Select
              name="subject"
              label="Matéria"
              options={[
                { value: "Artes", label: "Artes" },
                { value: "Biologia", label: "Biologia" },
                { value: "Ciências", label: "Ciências" },
                { value: "Educação Física", label: "Educação Física" },
                { value: "Física", label: "Física" },
                { value: "Geografia", label: "Geografia" },
                { value: "História", label: "História" },
                { value: "Matemática", label: "Matemática" },
                { value: "Química", label: "Química" },
              ]}
            />
            <Input name="price" label="Custo da sua hora por aula" />
          </fieldset>

          <fieldset>
            <legend>
              Horários disponíveis
              <button type="button">+ Novo horário</button>
            </legend>
          </fieldset>

          <footer>
            <p>
              <img src={warningIcon} alt="Aviso impotante" />
              Importante! <br />
              Preencha todos os dados
            </p>

            <button type="submit">Salvar cadastro</button>
          </footer>
        </form>
      </main>
    </div>
  );
}

export default TeacherForm;
