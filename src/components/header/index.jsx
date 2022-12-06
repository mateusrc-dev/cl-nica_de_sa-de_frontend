import { Container } from "./styles";
import { GiHealthNormal } from "react-icons/gi";
import { FiLogIn } from "react-icons/fi";
import { BsSearch } from "react-icons/bs";
import { useState } from "react";
import { TiArrowSortedDown } from "react-icons/ti";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { AiFillSchedule } from "react-icons/ai";
import { BsDoorClosed } from "react-icons/bs";
import { TiInputChecked } from "react-icons/ti";
import { RiHeartsFill } from "react-icons/ri";
import { TiPen } from "react-icons/ti";

export function Header() {
  const hours = new Date();
  const [user, setUser] = useState(false);
  const [professional, setProfessional] = useState(true);
  const [click, setClick] = useState(false);

  function handleHours() {
    let Hours;
    if (hours.getHours() >= 0 && hours.getHours() <= 12) {
      Hours = "Bom dia";
    } else if (hours.getHours() > 12 && hours.getHours() <= 18) {
      Hours = "Boa tarde";
    } else {
      Hours = "Boa noite";
    }
    return Hours;
  }

  function handleDay() {
    let day;
    if (hours.getDay() === 0) {
      day = "Tenha um ótimo domingo";
    } else if (hours.getDay() === 1) {
      day = "Tenha uma ótima segunda";
    } else if (hours.getDay() === 2) {
      day = "Tenha uma ótima terça";
    } else if (hours.getDay() === 3) {
      day = "Tenha uma ótima quarta";
    } else if (hours.getDay() === 4) {
      day = "Tenha uma ótima quinta";
    } else if (hours.getDay() === 5) {
      day = "Tenha uma ótima sexta";
    } else if (hours.getDay() === 6) {
      day = "Tenha um ótimo sábado";
    }
    return day;
  }

  function handleClick() {
    if (click === false) {
      setClick(true);
    } else {
      setClick(false);
    }
  }

  const handleOutsideClick = (e) => {
    if (e.target.id === "modal") {
      handleClick();
    }
  };

  return (
    <Container>
      {user ? (
        <div
          id="modal"
          className={click ? "modal" : "none"}
          onClick={handleOutsideClick}
        >
          <div className="borderModal">
            <div className="modalContent">
              <div className="links">
                <Link to="/profileUser">
                  <button>
                    <CgProfile />
                    Seu Perfil
                  </button>
                </Link>
                <Link to="/yourSchedules">
                  <button>
                    <TiInputChecked />
                    Seus agendamentos
                  </button>
                </Link>
                <Link to="/theirTestimonials">
                  <button>
                    <TiPen />
                    Seus depoimentos
                  </button>
                </Link>
                <Link to="/favorites">
                  <button>
                    <RiHeartsFill />
                    Profissionais favoritos
                  </button>
                </Link>
                <button>
                  <BsDoorClosed />
                  Sair da sua conta
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
      {professional ? (
        <div
          id="modal"
          className={click ? "modal" : "none"}
          onClick={handleOutsideClick}
        >
          <div className="borderModal">
            <div className="modalContent">
              <div className="links">
                <Link to="/profileProfessional">
                  <button>
                    <CgProfile />
                    Seu Perfil
                  </button>
                </Link>
                <Link to="/yourQueries">
                  <button>
                    <TiInputChecked />
                    Suas consultas
                  </button>
                </Link>
                <Link to="/schedules">
                  <button>
                    <AiFillSchedule />
                    Gerenciar a sua agenda
                  </button>
                </Link>
                <button>
                  <BsDoorClosed />
                  Sair da sua conta
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
      <Link to="/" title="Ir para a página inicial">
        <div className="logo">
          <GiHealthNormal />
          <div className="logoText">
            <h1>fullness clinic</h1>
            <p>Sempre pensando na sua saúde!</p>
          </div>
        </div>
      </Link>
      <div className="input">
        <input type="text" placeholder="Pesquise por um profissional!" />
        <button>
          <BsSearch />
        </button>
      </div>
      <div className="avatar">
        <div className="inner">
          <div className="welcome">
            <h1>
              {user ? (
                <strong>{`${handleHours()},`} </strong>
              ) : (
                <strong>{`${handleHours()},`} Mateus, </strong>
              )}
            </h1>
            <h2>seja bem vindo(a)!</h2>
            <span>{`${handleDay()}.`}</span>
          </div>
          <div className="user">
            {user || professional ? null : (
              <Link to="/signIn">
                <a className="login">
                  <FiLogIn />
                  Fazer login
                </a>
              </Link>
            )}
            {user ? (
              <a className="Avatar" onClick={() => handleClick()}>
                <img
                  src="https://github.com/mateusrc-dev.png"
                  alt="imagem do profissional"
                />
                <TiArrowSortedDown />
              </a>
            ) : null}
            {professional ? (
              <a className="Avatar" onClick={() => handleClick()}>
                <img
                  src="https://github.com/mateusrc-dev.png"
                  alt="imagem do profissional"
                />
                <TiArrowSortedDown />
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </Container>
  );
}
