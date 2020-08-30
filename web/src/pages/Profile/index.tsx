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

function Profile() {
  const [scheduleItems, setScheduleItems] = useState([
    { week_day: 0, from: "", to: "" },
  ]);

  function addNewScheduleItem() {
    setScheduleItems([
      ...scheduleItems,
      {
        week_day: 0,
        from: "",
        to: "",
      },
    ]);
  }

  function setScheduleItemValue(index: number, field: string, value: string) {
    const newArray = scheduleItems.map((scheduleItem, scheduleIndex) => {
      if (scheduleIndex === index) {
        return { ...scheduleItem, [field]: value };
      }

      return scheduleItem;
    });

    setScheduleItems(newArray);
  }
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
            <div className="form-grid-normal">
              <div>
                <Input name="name" label="Nome" value="Giovanna" />
              </div>
              <div>
                <Input name="last-name" label="Sobrenome" value="Moeller" />
              </div>
            </div>
            <div className="form-grid-bigger">
              <Input
                name="email"
                label="E-mail"
                value="giovannagmoeller@gmail.com"
              />

              <Input name="whatsapp" label="Whatsapp" value="(14) 99129-3534" />
            </div>

            <Textarea
              name="bio"
              label="Biografia"
              value="Apaixonada por matemática"
            />
          </fieldset>

          <fieldset>
            <legend>Sobre a aula</legend>
            <div className="form-grid-bigger">
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
                value="Matemática"
              />
              <Input name="price" label="Custo da sua hora por aula" value="R$ 80,00" />
            </div>
          </fieldset>

          <fieldset>
            <legend>
              Horários disponíveis
              <button type="button" onClick={addNewScheduleItem}>
                + Novo horário
              </button>
            </legend>

            {scheduleItems.map((scheduleItem, index) => {
              return (
                <div key={scheduleItem.week_day} className="schedule-item">
                  <Select
                    name="week_day"
                    label="Dia da semana"
                    value={scheduleItem.week_day}
                    onChange={(e) =>
                      setScheduleItemValue(index, "week_day", e.target.value)
                    }
                    options={[
                      { value: "0", label: "Domingo" },
                      { value: "1", label: "Segunda-feira" },
                      { value: "2", label: "Terça-feira" },
                      { value: "3", label: "Quarta-feira" },
                      { value: "4", label: "Quinta-feira" },
                      { value: "5", label: "Sexta-feira" },
                      { value: "6", label: "Sábado" },
                    ]}
                  />
                  <Input
                    name="from"
                    label="Das"
                    type="time"
                    value={scheduleItem.from}
                    onChange={(e) =>
                      setScheduleItemValue(index, "from", e.target.value)
                    }
                  />
                  <Input
                    name="to"
                    label="Até"
                    type="time"
                    value={scheduleItem.to}
                    onChange={(e) =>
                      setScheduleItemValue(index, "to", e.target.value)
                    }
                  />
                </div>
              );
            })}
          </fieldset>

          <footer>
            <p>
              <img src={warningIcon} alt="Aviso impotante" />
              Importante! <br />
              Preencha todos os dados corretamente.
            </p>

            <button type="submit">Salvar cadastro</button>
          </footer>
        </form>
      </main>
    </div>
  );
}

export default Profile;
