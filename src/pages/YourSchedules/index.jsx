import { Container, Main } from "./styles";
import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import { Button } from "../../components/button";
import { TiCancel } from "react-icons/ti";
import { AiFillSchedule } from "react-icons/ai";
import { FiEdit2 } from "react-icons/fi";
import { useState, useRef, useEffect } from "react";
import { api } from "../../services/api";
import { CgClose } from "react-icons/cg";
import { CgArrowLeftO } from "react-icons/cg";
import { CgArrowRightO } from "react-icons/cg";
import { ButtonText } from "../../components/buttonText";
import { TiArrowBack } from "react-icons/ti";
import { Link } from "react-router-dom";
import avatarPlaceholder from "../../assets/avatar_placeholder.svg";
import moment from "moment"

export function YourSchedules() {
  const [click, setClick] = useState(false);
  const [schedules, setSchedules] = useState([]);

  const today = new Date();
  const Day = String(today.getDate()).padStart(2, "0");
  const Year = today.getFullYear();
  const Month = String(today.getMonth() + 1).padStart(2, "0");
  const dateString = `${Year}-${Month}-${Day}`;

  const Hours = today.getHours();
  const Minutes = today.getMinutes();
  const hoursString = `${Hours}${Minutes}`;

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

  const carousel = useRef(null);
  const handleLeftClick = (e) => {
    e.preventDefault();
    console.log(carousel);
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };

  const handleRightClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft += carousel.current.offsetWidth;
  };

  useEffect(() => {
    async function fetchSchedules() {
      const response = await api.get("schedulesUser/");
      setSchedules(response.data.schedules);
    }
    fetchSchedules();
  }, [schedules]);

  return (
    <Container>
      <Header />
      <Main>
        <div
          id="modal"
          className={click ? "modal" : "none"}
          onClick={handleOutsideClick}
        >
          <div className="modalContent">
            <button className="close" onClick={() => handleClick()}>
              <CgClose />
            </button>
            <div>
              <h2>
                Horários disponíveis para reagendar consulta com Dr. Mateus
                <span className="buttons">
                  <button onClick={handleLeftClick}>
                    <CgArrowLeftO />
                  </button>
                  <button onClick={handleRightClick}>
                    <CgArrowRightO />
                  </button>
                </span>
              </h2>
              <div className="container">
                <div className="left"></div>
                <div className="right"></div>
                <div ref={carousel} className="schedules">
                  <div className="Schedules">
                    <div className="query">
                      <p>
                        <strong>Data:</strong> 20/03/2050
                      </p>
                      <p>
                        <strong>Horário:</strong> 12:00
                      </p>
                      <p>
                        <strong>Duração:</strong> 01:00h
                      </p>
                      <p>
                        <strong>Preço:</strong> R$100.00
                      </p>
                      <Button onClick={() => handleClick()}>
                        <AiFillSchedule />
                        Agende sua consulta!
                      </Button>
                    </div>
                    <div className="query">
                      <p>
                        <strong>Data:</strong> 20/03/2050
                      </p>
                      <p>
                        <strong>Horário:</strong> 12:00
                      </p>
                      <p>
                        <strong>Duração:</strong> 01:00h
                      </p>
                      <p>
                        <strong>Preço:</strong> R$100.00
                      </p>
                      <Button onClick={() => handleClick()}>
                        <AiFillSchedule />
                        Agende sua consulta!
                      </Button>
                    </div>
                    <div className="query">
                      <p>
                        <strong>Data:</strong> 20/03/2050
                      </p>
                      <p>
                        <strong>Horário:</strong> 12:00
                      </p>
                      <p>
                        <strong>Duração:</strong> 01:00h
                      </p>
                      <p>
                        <strong>Preço:</strong> R$100.00
                      </p>
                      <Button>
                        <AiFillSchedule />
                        Agende sua consulta!
                      </Button>
                    </div>
                    <div className="query">
                      <p>
                        <strong>Data:</strong> 20/03/2050
                      </p>
                      <p>
                        <strong>Horário:</strong> 12:00
                      </p>
                      <p>
                        <strong>Duração:</strong> 01:00h
                      </p>
                      <p>
                        <strong>Preço:</strong> R$100.00
                      </p>
                      <Button>
                        <AiFillSchedule />
                        Agende sua consulta!
                      </Button>
                    </div>
                   
                   
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section>
          <div className="textButton">
            <Link to={-1}>
              <ButtonText>
                <TiArrowBack />
                retornar
              </ButtonText>
            </Link>
          </div>
          <h1>
            Seus agendamentos
            <AiFillSchedule />
          </h1>
          <p>
            Abaixo estão todos os seus agendamentos, você pode{" "}
            <strong>reagendar</strong> ou <strong>desmarcar</strong> consultas
            se desejar!
          </p>
          <div className="main">
            {schedules.map((schedule) => (
              <div className="Scheduling">
                <svg class="svg" width="500px" height="250px">
                  <polygon
                    points="0,50 50,0 500,0 500,200 450,250 0,250 0,50"
                    stroke="blue"
                    stroke-width="0.5"
                    fill="white"
                  />
                </svg>
                <div className="scheduling">
                <img
                  src={
                    schedule.avatar
                      ? `${api.defaults.baseURL}/files/${schedule.avatar}`
                      : avatarPlaceholder
                  }
                  alt="foto do profissional"
                />
                  <div className="details">
                    <span>
                      <strong>Profissional:</strong> Dr. {schedule.name}
                    </span>
                    <span>
                      <strong>Especialidade:</strong> {schedule.specialization[0].toUpperCase() + schedule.specialization.substring(1)}
                    </span>
                    <span>
                      <strong>Data da consulta:</strong> {schedule.date}
                    </span>
                    <span>
                      <strong>Horário da consulta:</strong> {schedule.time}
                    </span>
                    <span className="last">
                      <strong>Duração da consulta:</strong> {schedule.duration}
                    </span>
                    <span className="buttons">
                      <Button disabled={ moment(schedule.date).isBefore(dateString) ||
                        ((schedule.time.replace(":", "") < hoursString) &&
                        (moment(schedule.date).isSame(dateString)))}>
                        Cancelar consulta! <TiCancel />
                      </Button>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </Main>
      <Footer />
    </Container>
  );
}
