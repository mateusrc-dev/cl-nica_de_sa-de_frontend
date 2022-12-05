import { Container, Main } from "./styles";
import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import { Button } from "../../components/button";
import { FaWalking } from "react-icons/fa";
import { GiBrokenHeart } from "react-icons/gi";
import { GiNestedHearts } from "react-icons/gi";
import { ButtonText } from "../../components/buttonText";
import { TiArrowBack } from "react-icons/ti";

export function Favorites() {
  return (
    <Container>
      <Header />
      <Main>
        <div className="textButton">
          <ButtonText>
            <TiArrowBack />
            retornar
          </ButtonText>
        </div>
        <h1>
          Seus profissionais favoritos
          <GiNestedHearts />
        </h1>
        <p>
          Abaixo estão os profissionais que você favoritou, você pode ir
          diretamente para a página deles para agendar uma consulta ou pode
          excluí-los dos favoritos!
        </p>
        <div className="main">
          <div className="Scheduling">
            <svg class="svg" width="1100px" height="250px">
              <polygon
                points="0,250 50,0 1100,0 1050,250 0,250"
                stroke="blue"
                stroke-width="1"
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
                <span></span>
                <span className="description">
                  <strong>Descrição:</strong> Meu nome é Mateus, sou um
                  profissional incrível e você não vai se arrepender de fazer
                  uma consulta comigo, sou o melhor do fullness clinic, sem
                  dúvida (espero que meus colegas de trabalho não leiam isso...)
                </span>
                <span>
                  <Button>
                    Visitar página do profissional! <FaWalking />
                  </Button>
                  <Button>
                    Excluir dos favoritos! <GiBrokenHeart />
                  </Button>
                </span>
              </div>
            </div>
          </div>
          <div className="Scheduling">
            <svg class="svg" width="1100px" height="250px">
              <polygon
                points="0,250 50,0 1100,0 1050,250 0,250"
                stroke="blue"
                stroke-width="1"
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
                <span></span>
                <span className="description">
                  <strong>Descrição:</strong> Meu nome é Mateus, sou um
                  profissional incrível e você não vai se arrepender de fazer
                  uma consulta comigo, sou o melhor do fullness clinic, sem
                  dúvida (espero que meus colegas de trabalho não leiam isso...)
                </span>
                <span>
                  <Button>
                    Visitar página do profissional! <FaWalking />
                  </Button>
                  <Button>
                    Excluir dos favoritos! <GiBrokenHeart />
                  </Button>
                </span>
              </div>
            </div>
          </div>
          <div className="Scheduling">
            <svg class="svg" width="1100px" height="250px">
              <polygon
                points="0,250 50,0 1100,0 1050,250 0,250"
                stroke="blue"
                stroke-width="1"
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
                <span></span>
                <span className="description">
                  <strong>Descrição:</strong> Meu nome é Mateus, sou um
                  profissional incrível e você não vai se arrepender de fazer
                  uma consulta comigo, sou o melhor do fullness clinic, sem
                  dúvida (espero que meus colegas de trabalho não leiam isso...)
                </span>
                <span>
                  <Button>
                    Visitar página do profissional! <FaWalking />
                  </Button>
                  <Button>
                    Excluir dos favoritos! <GiBrokenHeart />
                  </Button>
                </span>
              </div>
            </div>
          </div>
          <div className="Scheduling">
            <svg class="svg" width="1100px" height="250px">
              <polygon
                points="0,250 50,0 1100,0 1050,250 0,250"
                stroke="blue"
                stroke-width="1"
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
                <span></span>
                <span className="description">
                  <strong>Descrição:</strong> Meu nome é Mateus, sou um
                  profissional incrível e você não vai se arrepender de fazer
                  uma consulta comigo, sou o melhor do fullness clinic, sem
                  dúvida (espero que meus colegas de trabalho não leiam isso...)
                </span>
                <span>
                  <Button>
                    Visitar página do profissional! <FaWalking />
                  </Button>
                  <Button>
                    Excluir dos favoritos! <GiBrokenHeart />
                  </Button>
                </span>
              </div>
            </div>
          </div>
        </div>
      </Main>
      <Footer />
    </Container>
  );
}
