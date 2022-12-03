import { Container } from "./styles";
import { GiHealthNormal } from "react-icons/gi";
import { FiLogIn } from "react-icons/fi";
import { BsSearch } from "react-icons/bs";
import { useState } from "react";
import { CgClose } from "react-icons/cg";
import { TiArrowSortedDown } from "react-icons/ti";

export function Header() {
  const hours = new Date();
  const [user, setUser] = useState(false);
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
      <div
        id="modal"
        className={click ? "modal" : "none"}
        onClick={handleOutsideClick}
      >
        <div className="borderModal">
          <div className="modalContent">
            <button className="close" onClick={() => handleClick()}>
              <CgClose />
            </button>
            <a>Seu Perfil</a>
            <a>Seus agendamentos</a>
            <a>Seus profissionais favoritos</a>
            <a>Sair da sua conta</a>
          </div>
        </div>
      </div>
      <div className="logo">
        <GiHealthNormal />
        <div className="logoText">
          <h1>fullness clinic</h1>
          <p>Sempre pensando na sua saúde!</p>
        </div>
      </div>
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
            {user ? (
              <a className="login">
                <FiLogIn />
                Fazer login
              </a>
            ) : (
              <a className="Avatar" onClick={() => handleClick()}>
                <img
                  src="https://github.com/mateusrc-dev.png"
                  alt="imagem do profissional"
                />
                <TiArrowSortedDown />
              </a>
            )}
          </div>
        </div>
      </div>
    </Container>
  );
}
