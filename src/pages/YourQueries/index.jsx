import { Container, Main } from "./styles";
import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import { Button } from "../../components/button";
import { TiCancel } from "react-icons/ti";
import { AiFillSchedule } from "react-icons/ai";
import { ButtonText } from "../../components/buttonText";
import { TiArrowBack } from "react-icons/ti";
import { Link } from "react-router-dom";

export function YourQueries() {
  return (
    <Container>
      <Header />
      <Main>
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
            Suas consultas
            <AiFillSchedule />
          </h1>
          <p>
            Abaixo estão todas as suas consultas, você pode <strong>desmarcar</strong> suas consultas caso for necessário!
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
                  alt="imagem do paciente"
                />
                <div className="details">
                  <span>
                    <strong>Paciente:</strong> Fernando
                  </span>
                  <span className="complaint">
                    <strong>Queixa do paciente:</strong> Muita ansiedade, estou
                    estudando para o Enem e isso está me deixando muito ansioso.
                    Sem falar que minha namorada terminou comigo porque queria
                    ficar um tempo livre e isso faz eu imaginar diversas
                    coisas...
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
