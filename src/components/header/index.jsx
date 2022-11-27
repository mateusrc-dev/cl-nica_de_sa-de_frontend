import { Container } from "./styles";
import { GiHealthNormal } from "react-icons/gi";
import { FiLogIn } from "react-icons/fi";
import { BsSearch } from "react-icons/bs";

export function Header() {
  const hours = new Date();

  function handleHours() {
    let Hours;
    if (hours.getHours() > 0 && hours.getHours() <= 12) {
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

  return (
    <Container>
      <div className="logo">
        <GiHealthNormal />
        <div className="logoText">
          <h1>fullness clinic</h1>
          <p>Sempre pensando na sua saúde!</p>
        </div>
      </div>
      <div className="input">
        <button>
          <BsSearch />
        </button>
        <input type="text" placeholder="Pesquise por um profissional!" />
      </div>
      <div className="avatar">
        <div className="inner">
          <div className="welcome">
            <h1>
              <strong>{`${handleHours()},`} </strong>
            </h1>
            <h2>seja bem vindo(a)!</h2>
            <span>{`${handleDay()}.`}</span>
          </div>
          <div className="user">
            <a className="login">
              <FiLogIn />
              Fazer login
            </a>
          </div>
        </div>
      </div>
    </Container>
  );
}
