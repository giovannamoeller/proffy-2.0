import React from "react";
import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

import "./style.css";
import api from "../../services/api";

export interface Teacher {
  name: string;
  avatar_url: string;
  biography: string;
  price: number;
  id: number;
  subject: string;
  whatsapp: string;
}

interface TeacherItemProps {
  teacher: Teacher;
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {
  // FC = Function Component

  function createNewConnection() {
    api.post("/connections", {
      user_id: teacher.id,
    });
  }

  return (
    <main>
      <article className="teacher-item">
        <header>
          <img src={teacher.avatar_url} alt="" />
          <div>
            <strong>{teacher.name}</strong>
            <span>{teacher.subject}</span>
          </div>
        </header>

        <div>
          <p>{teacher.biography}</p>
        </div>

        <footer>
          <p>
            Preço/hora
            <strong>R$ {teacher.price}</strong>
          </p>

          <a
            onClick={createNewConnection}
            target="_blank"
            href={`https://wa.me/${teacher.whatsapp}`}
          >
            <img src={whatsappIcon} alt="" />
            Entrar em contato
          </a>
        </footer>
      </article>
    </main>
  );
};

export default TeacherItem;
