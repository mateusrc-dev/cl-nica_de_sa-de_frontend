import { Container, Main } from "./styles";
import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import { Button } from "../../components/button";
import { TiCancel } from "react-icons/ti";
import { AiFillSchedule } from "react-icons/ai";
import { FiEdit2 } from "react-icons/fi";
import { useState, useRef } from "react";
import { CgClose } from "react-icons/cg";
import { CgArrowLeftO } from "react-icons/cg";
import { CgArrowRightO } from "react-icons/cg";
import { ButtonText } from "../../components/buttonText";
import { TiArrowBack } from "react-icons/ti";

export function YourQueries() {
  const [click, setClick] = useState(false);

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
            <ButtonText>
              <TiArrowBack />
              retornar
            </ButtonText>
          </div>
          <h1>
            Seus agendamentos
            <AiFillSchedule />
          </h1>
          <p>
            Abaixo estão todos os seus agendamentos, você pode <strong>reagendar</strong> ou <strong>desmarcar</strong> consultas
            se desejar!
          </p>
          <div className="main">
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
                  src="https://github.com/mateusrc-dev.png"
                  alt="imagem do profissional"
                />
                <div className="details">
                  <span>
                    <strong>Profissional:</strong> Dr. Mateus Carvalho
                  </span>
                  <span>
                    <strong>Especialidade:</strong> Psicólogo
                  </span>
                  <span>
                    <strong>Data da consulta:</strong> 22/22/2022
                  </span>
                  <span>
                    <strong>Horário da consulta:</strong> 12:00hrs
                  </span>
                  <span className="last">
                    <strong>Duração da consulta:</strong> 01:00
                  </span>
                  <span className="buttons">
                    <Button onClick={() => handleClick()}>
                      Reagendar consulta! <FiEdit2 />
                    </Button>
                    <Button>
                      Cancelar consulta! <TiCancel />
                    </Button>
                  </span>
                </div>
              </div>
            </div>
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
                  src="https://github.com/mateusrc-dev.png"
                  alt="imagem do profissional"
                />
                <div className="details">
                  <span>
                    <strong>Profissional:</strong> Dr. Mateus Carvalho
                  </span>
                  <span>
                    <strong>Especialidade:</strong> Psicólogo
                  </span>
                  <span>
                    <strong>Data da consulta:</strong> 22/22/2022
                  </span>
                  <span>
                    <strong>Horário da consulta:</strong> 12:00hrs
                  </span>
                  <span className="last">
                    <strong>Duração da consulta:</strong> 01:00
                  </span>
                  <span className="buttons">
                    <Button onClick={() => handleClick()}>
                      Reagendar consulta! <FiEdit2 />
                    </Button>
                    <Button>
                      Cancelar consulta! <TiCancel />
                    </Button>
                  </span>
                </div>
              </div>
            </div>
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
                  src="https://github.com/mateusrc-dev.png"
                  alt="imagem do profissional"
                />
                <div className="details">
                  <span>
                    <strong>Profissional:</strong> Dr. Mateus Carvalho
                  </span>
                  <span>
                    <strong>Especialidade:</strong> Psicólogo
                  </span>
                  <span>
                    <strong>Data da consulta:</strong> 22/22/2022
                  </span>
                  <span>
                    <strong>Horário da consulta:</strong> 12:00hrs
                  </span>
                  <span className="last">
                    <strong>Duração da consulta:</strong> 01:00
                  </span>
                  <span className="buttons">
                    <Button onClick={() => handleClick()}>
                      Reagendar consulta! <FiEdit2 />
                    </Button>
                    <Button>
                      Cancelar consulta! <TiCancel />
                    </Button>
                  </span>
                </div>
              </div>
            </div>
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
                  src="https://github.com/mateusrc-dev.png"
                  alt="imagem do profissional"
                />
                <div className="details">
                  <span>
                    <strong>Profissional:</strong> Dr. Mateus Carvalho
                  </span>
                  <span>
                    <strong>Especialidade:</strong> Psicólogo
                  </span>
                  <span>
                    <strong>Data da consulta:</strong> 22/22/2022
                  </span>
                  <span>
                    <strong>Horário da consulta:</strong> 12:00hrs
                  </span>
                  <span className="last">
                    <strong>Duração da consulta:</strong> 01:00
                  </span>
                  <span className="buttons">
                    <Button onClick={() => handleClick()}>
                      Reagendar consulta! <FiEdit2 />
                    </Button>
                    <Button>
                      Cancelar consulta! <TiCancel />
                    </Button>
                  </span>
                </div>
              </div>
            </div>
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
                  src="https://github.com/mateusrc-dev.png"
                  alt="imagem do profissional"
                />
                <div className="details">
                  <span>
                    <strong>Profissional:</strong> Dr. Mateus Carvalho
                  </span>
                  <span>
                    <strong>Especialidade:</strong> Psicólogo
                  </span>
                  <span>
                    <strong>Data da consulta:</strong> 22/22/2022
                  </span>
                  <span>
                    <strong>Horário da consulta:</strong> 12:00hrs
                  </span>
                  <span className="last">
                    <strong>Duração da consulta:</strong> 01:00
                  </span>
                  <span className="buttons">
                    <Button onClick={() => handleClick()}>
                      Reagendar consulta! <FiEdit2 />
                    </Button>
                    <Button>
                      Cancelar consulta! <TiCancel />
                    </Button>
                  </span>
                </div>
              </div>
            </div>
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
                  src="https://github.com/mateusrc-dev.png"
                  alt="imagem do profissional"
                />
                <div className="details">
                  <span>
                    <strong>Profissional:</strong> Dr. Mateus Carvalho
                  </span>
                  <span>
                    <strong>Especialidade:</strong> Psicólogo
                  </span>
                  <span>
                    <strong>Data da consulta:</strong> 22/22/2022
                  </span>
                  <span>
                    <strong>Horário da consulta:</strong> 12:00hrs
                  </span>
                  <span className="last">
                    <strong>Duração da consulta:</strong> 01:00
                  </span>
                  <span className="buttons">
                    <Button onClick={() => handleClick()}>
                      Reagendar consulta! <FiEdit2 />
                    </Button>
                    <Button>
                      Cancelar consulta! <TiCancel />
                    </Button>
                  </span>
                </div>
              </div>
            </div>
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
                  src="https://github.com/mateusrc-dev.png"
                  alt="imagem do profissional"
                />
                <div className="details">
                  <span>
                    <strong>Profissional:</strong> Dr. Mateus Carvalho
                  </span>
                  <span>
                    <strong>Especialidade:</strong> Psicólogo
                  </span>
                  <span>
                    <strong>Data da consulta:</strong> 22/22/2022
                  </span>
                  <span>
                    <strong>Horário da consulta:</strong> 12:00hrs
                  </span>
                  <span className="last">
                    <strong>Duração da consulta:</strong> 01:00
                  </span>
                  <span className="buttons">
                    <Button onClick={() => handleClick()}>
                      Reagendar consulta! <FiEdit2 />
                    </Button>
                    <Button>
                      Cancelar consulta! <TiCancel />
                    </Button>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Main>
      <Footer />
    </Container>
  );
}
