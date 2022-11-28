//nessa página vai ficar os detalhes do profissional (horários livres, detalhes sobre ele, depoimentos sobre ele, etc.)
import { Container, Main } from "./styles";
import { Button } from "../../components/button";
import { AiFillSchedule } from "react-icons/ai";
import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import { MdFavorite } from "react-icons/md";
import { useRef } from "react";
import { CgArrowLeftO } from "react-icons/cg";
import { CgArrowRightO } from "react-icons/cg";
import { CgArrowUpO } from "react-icons/cg";
import { CgArrowDownO } from "react-icons/cg";
import { BsStarFill } from "react-icons/bs";

export function Details() {
  const carousel = useRef(null);

  const handleLeftClick = (e) => {
    e.preventDefault();
    console.log(carousel.current);
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
        <div className="columnOne">
          <div className="row"></div>
          <div className="main">
            <img src="https://github.com/mateusrc-dev.png" alt="" />
            <div className="Description">
              <div className="description">
                <h1>
                  Dr. Mateus Carvalho
                  <a className="favorite">
                    <MdFavorite />
                  </a>
                </h1>
                <p>
                  Meu nome é Mateus, eu sou um psicólogo incrível, trato você
                  super bem, você vai se sentir no céu ao sair de uma consulta
                  comigo, como se nenhum problema existisse.
                </p>
                <div className="tags">
                  <div className="tag">
                    <p>depressão</p>
                  </div>
                  <div className="tag">
                    <p>ansiedade</p>
                  </div>
                  <div className="tag">
                    <p>tristeza</p>
                  </div>
                  <div className="tag">
                    <p>angústia</p>
                  </div>
                  <div className="tag">
                    <p>vazio</p>
                  </div>
                  <div className="tag">
                    <p>solidão</p>
                  </div>
                  <div className="tag">
                    <p>crise</p>
                  </div>
                  <div className="tag">
                    <p>desesperança</p>
                  </div>
                  <div className="tag">
                    <p>suicídio</p>
                  </div>
                  <div className="tag">
                    <p>desistir</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row"></div>
          <h2>
            Horários disponíveis
            <span>
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
        <div className="columnTwo">
          <div className="containerDepositions">
            <div className="depositions">
              <div className="Buttons">
                <h2>Depoimentos dos pacientes</h2>
                <div className="buttons">
                  <button>
                    <CgArrowUpO />
                  </button>
                  <button>
                    <CgArrowDownO />
                  </button>
                </div>
              </div>
              <div className="Depositions">
                <div className="testimony">
                  <img src="https://github.com/mateusrc-dev.png" alt="" />
                  <div>
                    <span><BsStarFill />5.0</span>
                    <span>Paciente Fernando</span>
                    <p>
                      Mateus é o melhor psicólogo, não tem pra ninguém, ele cura
                      todas as doenças da alma, deixa a pessoa em um estado
                      perfeito de saúde mental, recomendado, ele literalmente
                      resolve sua vida!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Main>
      <Footer />
    </Container>
  );
}
