import { Container, Main } from "./styles";
import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import { Button } from "../../components/button";
import { TiCancel } from "react-icons/ti";

export function TheirTestimonials() {
  return (
    <Container>
      <Header />
      <Main>
        <h1>Seus agendamentos</h1>
        <p>
          Abaixo estão todos os seus agendamentos, você pode <strong>desmarcá-los</strong> se desejar!
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
                <span className="last">
                  <strong>Duração da consulta:</strong> 01:00
                </span>
                <Button>
                  Cancelar consulta! <TiCancel />
                </Button>
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
                <span className="last">
                  <strong>Duração da consulta:</strong> 01:00
                </span>
                <Button>
                  Cancelar consulta! <TiCancel />
                </Button>
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
                <span className="last">
                  <strong>Duração da consulta:</strong> 01:00
                </span>
                <Button>
                  Cancelar consulta! <TiCancel />
                </Button>
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
                <span className="last">
                  <strong>Duração da consulta:</strong> 01:00
                </span>
                <Button>
                  Cancelar consulta! <TiCancel />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Main>
      <Footer />
    </Container>
  );
}
