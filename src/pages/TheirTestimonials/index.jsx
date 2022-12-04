import { Container, Main } from "./styles";
import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import { Button } from "../../components/button";
import { TiCancel } from "react-icons/ti";
import { BiSave } from "react-icons/bi";
import { FiEdit2 } from "react-icons/fi";
import { useState } from "react";
import { BsStarFill } from "react-icons/bs";
import { BsStar } from "react-icons/bs";

export function TheirTestimonials() {
  const [stars, setStars] = useState(1);
  function handleStars(number) {
    setStars(number);
  }
  return (
    <Container>
      <Header />
      <Main>
        <h1>
          Seus depoimentos
          <FiEdit2 />
        </h1>
        <p>
          Abaixo estão todos os seus depoimentos, você pode editar eles ou
          deletá-los se desejar!
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
                <span>
                  <strong>Sua nota:</strong>
                  <span className="stars">
                    {stars === 1 ? (
                      <span className="stars">
                        <button onClick={() => handleStars(1)}>
                          <BsStarFill />
                        </button>
                        <button onClick={() => handleStars(2)}>
                          <BsStar />
                        </button>
                        <button onClick={() => handleStars(3)}>
                          <BsStar />
                        </button>
                        <button onClick={() => handleStars(4)}>
                          <BsStar />
                        </button>
                        <button onClick={() => handleStars(5)}>
                          <BsStar />
                        </button>
                      </span>
                    ) : null}
                    {stars === 2 ? (
                      <span className="stars">
                        <button onClick={() => handleStars(1)}>
                          <BsStarFill />
                        </button>
                        <button onClick={() => handleStars(2)}>
                          <BsStarFill />
                        </button>
                        <button onClick={() => handleStars(3)}>
                          <BsStar />
                        </button>
                        <button onClick={() => handleStars(4)}>
                          <BsStar />
                        </button>
                        <button onClick={() => handleStars(5)}>
                          <BsStar />
                        </button>
                      </span>
                    ) : null}
                    {stars === 3 ? (
                      <span className="stars">
                        <button onClick={() => handleStars(1)}>
                          <BsStarFill />
                        </button>
                        <button onClick={() => handleStars(2)}>
                          <BsStarFill />
                        </button>
                        <button onClick={() => handleStars(3)}>
                          <BsStarFill />
                        </button>
                        <button onClick={() => handleStars(4)}>
                          <BsStar />
                        </button>
                        <button onClick={() => handleStars(5)}>
                          <BsStar />
                        </button>
                      </span>
                    ) : null}
                    {stars === 4 ? (
                      <span className="stars">
                        <button onClick={() => handleStars(1)}>
                          <BsStarFill />
                        </button>
                        <button onClick={() => handleStars(2)}>
                          <BsStarFill />
                        </button>
                        <button onClick={() => handleStars(3)}>
                          <BsStarFill />
                        </button>
                        <button onClick={() => handleStars(4)}>
                          <BsStarFill />
                        </button>
                        <button onClick={() => handleStars(5)}>
                          <BsStar />
                        </button>
                      </span>
                    ) : null}
                    {stars === 5 ? (
                      <span className="stars">
                        <button onClick={() => handleStars(1)}>
                          <BsStarFill />
                        </button>
                        <button onClick={() => handleStars(2)}>
                          <BsStarFill />
                        </button>
                        <button onClick={() => handleStars(3)}>
                          <BsStarFill />
                        </button>
                        <button onClick={() => handleStars(4)}>
                          <BsStarFill />
                        </button>
                        <button onClick={() => handleStars(5)}>
                          <BsStarFill />
                        </button>
                      </span>
                    ) : null}
                  </span>
                </span>
                <span className="testimonial">
                  <strong>Seu depoimento:</strong>
                  <textarea
                    placeholder="O Mateus é o melhor profissional do mundo, muito atencioso, carinhoso, lindo, ele sabe te acolher, sabe te aconselhar, não tem melhor... Super indico!"
                    cols="96"
                    rows="3"
                  ></textarea>
                </span>
                <span>
                  <Button>
                    Salvar as alterações! <BiSave />
                  </Button>
                  <Button>
                    Deletar depoimento! <TiCancel />
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
                <span>
                  <strong>Sua nota:</strong>
                  <span className="stars">
                    {stars === 1 ? (
                      <span className="stars">
                        <button onClick={() => handleStars(1)}>
                          <BsStarFill />
                        </button>
                        <button onClick={() => handleStars(2)}>
                          <BsStar />
                        </button>
                        <button onClick={() => handleStars(3)}>
                          <BsStar />
                        </button>
                        <button onClick={() => handleStars(4)}>
                          <BsStar />
                        </button>
                        <button onClick={() => handleStars(5)}>
                          <BsStar />
                        </button>
                      </span>
                    ) : null}
                    {stars === 2 ? (
                      <span className="stars">
                        <button onClick={() => handleStars(1)}>
                          <BsStarFill />
                        </button>
                        <button onClick={() => handleStars(2)}>
                          <BsStarFill />
                        </button>
                        <button onClick={() => handleStars(3)}>
                          <BsStar />
                        </button>
                        <button onClick={() => handleStars(4)}>
                          <BsStar />
                        </button>
                        <button onClick={() => handleStars(5)}>
                          <BsStar />
                        </button>
                      </span>
                    ) : null}
                    {stars === 3 ? (
                      <span className="stars">
                        <button onClick={() => handleStars(1)}>
                          <BsStarFill />
                        </button>
                        <button onClick={() => handleStars(2)}>
                          <BsStarFill />
                        </button>
                        <button onClick={() => handleStars(3)}>
                          <BsStarFill />
                        </button>
                        <button onClick={() => handleStars(4)}>
                          <BsStar />
                        </button>
                        <button onClick={() => handleStars(5)}>
                          <BsStar />
                        </button>
                      </span>
                    ) : null}
                    {stars === 4 ? (
                      <span className="stars">
                        <button onClick={() => handleStars(1)}>
                          <BsStarFill />
                        </button>
                        <button onClick={() => handleStars(2)}>
                          <BsStarFill />
                        </button>
                        <button onClick={() => handleStars(3)}>
                          <BsStarFill />
                        </button>
                        <button onClick={() => handleStars(4)}>
                          <BsStarFill />
                        </button>
                        <button onClick={() => handleStars(5)}>
                          <BsStar />
                        </button>
                      </span>
                    ) : null}
                    {stars === 5 ? (
                      <span className="stars">
                        <button onClick={() => handleStars(1)}>
                          <BsStarFill />
                        </button>
                        <button onClick={() => handleStars(2)}>
                          <BsStarFill />
                        </button>
                        <button onClick={() => handleStars(3)}>
                          <BsStarFill />
                        </button>
                        <button onClick={() => handleStars(4)}>
                          <BsStarFill />
                        </button>
                        <button onClick={() => handleStars(5)}>
                          <BsStarFill />
                        </button>
                      </span>
                    ) : null}
                  </span>
                </span>
                <span className="testimonial">
                  <strong>Seu depoimento:</strong>
                  <textarea
                    placeholder="O Mateus é o melhor profissional do mundo, muito atencioso, carinhoso, lindo, ele sabe te acolher, sabe te aconselhar, não tem melhor... Super indico!"
                    cols="96"
                    rows="3"
                  ></textarea>
                </span>
                <span>
                  <Button>
                    Salvar as alterações! <BiSave />
                  </Button>
                  <Button>
                    Deletar depoimento! <TiCancel />
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
                <span>
                  <strong>Sua nota:</strong>
                  <span className="stars">
                    {stars === 1 ? (
                      <span className="stars">
                        <button onClick={() => handleStars(1)}>
                          <BsStarFill />
                        </button>
                        <button onClick={() => handleStars(2)}>
                          <BsStar />
                        </button>
                        <button onClick={() => handleStars(3)}>
                          <BsStar />
                        </button>
                        <button onClick={() => handleStars(4)}>
                          <BsStar />
                        </button>
                        <button onClick={() => handleStars(5)}>
                          <BsStar />
                        </button>
                      </span>
                    ) : null}
                    {stars === 2 ? (
                      <span className="stars">
                        <button onClick={() => handleStars(1)}>
                          <BsStarFill />
                        </button>
                        <button onClick={() => handleStars(2)}>
                          <BsStarFill />
                        </button>
                        <button onClick={() => handleStars(3)}>
                          <BsStar />
                        </button>
                        <button onClick={() => handleStars(4)}>
                          <BsStar />
                        </button>
                        <button onClick={() => handleStars(5)}>
                          <BsStar />
                        </button>
                      </span>
                    ) : null}
                    {stars === 3 ? (
                      <span className="stars">
                        <button onClick={() => handleStars(1)}>
                          <BsStarFill />
                        </button>
                        <button onClick={() => handleStars(2)}>
                          <BsStarFill />
                        </button>
                        <button onClick={() => handleStars(3)}>
                          <BsStarFill />
                        </button>
                        <button onClick={() => handleStars(4)}>
                          <BsStar />
                        </button>
                        <button onClick={() => handleStars(5)}>
                          <BsStar />
                        </button>
                      </span>
                    ) : null}
                    {stars === 4 ? (
                      <span className="stars">
                        <button onClick={() => handleStars(1)}>
                          <BsStarFill />
                        </button>
                        <button onClick={() => handleStars(2)}>
                          <BsStarFill />
                        </button>
                        <button onClick={() => handleStars(3)}>
                          <BsStarFill />
                        </button>
                        <button onClick={() => handleStars(4)}>
                          <BsStarFill />
                        </button>
                        <button onClick={() => handleStars(5)}>
                          <BsStar />
                        </button>
                      </span>
                    ) : null}
                    {stars === 5 ? (
                      <span className="stars">
                        <button onClick={() => handleStars(1)}>
                          <BsStarFill />
                        </button>
                        <button onClick={() => handleStars(2)}>
                          <BsStarFill />
                        </button>
                        <button onClick={() => handleStars(3)}>
                          <BsStarFill />
                        </button>
                        <button onClick={() => handleStars(4)}>
                          <BsStarFill />
                        </button>
                        <button onClick={() => handleStars(5)}>
                          <BsStarFill />
                        </button>
                      </span>
                    ) : null}
                  </span>
                </span>
                <span className="testimonial">
                  <strong>Seu depoimento:</strong>
                  <textarea
                    placeholder="O Mateus é o melhor profissional do mundo, muito atencioso, carinhoso, lindo, ele sabe te acolher, sabe te aconselhar, não tem melhor... Super indico!"
                    cols="96"
                    rows="3"
                  ></textarea>
                </span>
                <span>
                  <Button>
                    Salvar as alterações! <BiSave />
                  </Button>
                  <Button>
                    Deletar depoimento! <TiCancel />
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
                <span>
                  <strong>Sua nota:</strong>
                  <span className="stars">
                    {stars === 1 ? (
                      <span className="stars">
                        <button onClick={() => handleStars(1)}>
                          <BsStarFill />
                        </button>
                        <button onClick={() => handleStars(2)}>
                          <BsStar />
                        </button>
                        <button onClick={() => handleStars(3)}>
                          <BsStar />
                        </button>
                        <button onClick={() => handleStars(4)}>
                          <BsStar />
                        </button>
                        <button onClick={() => handleStars(5)}>
                          <BsStar />
                        </button>
                      </span>
                    ) : null}
                    {stars === 2 ? (
                      <span className="stars">
                        <button onClick={() => handleStars(1)}>
                          <BsStarFill />
                        </button>
                        <button onClick={() => handleStars(2)}>
                          <BsStarFill />
                        </button>
                        <button onClick={() => handleStars(3)}>
                          <BsStar />
                        </button>
                        <button onClick={() => handleStars(4)}>
                          <BsStar />
                        </button>
                        <button onClick={() => handleStars(5)}>
                          <BsStar />
                        </button>
                      </span>
                    ) : null}
                    {stars === 3 ? (
                      <span className="stars">
                        <button onClick={() => handleStars(1)}>
                          <BsStarFill />
                        </button>
                        <button onClick={() => handleStars(2)}>
                          <BsStarFill />
                        </button>
                        <button onClick={() => handleStars(3)}>
                          <BsStarFill />
                        </button>
                        <button onClick={() => handleStars(4)}>
                          <BsStar />
                        </button>
                        <button onClick={() => handleStars(5)}>
                          <BsStar />
                        </button>
                      </span>
                    ) : null}
                    {stars === 4 ? (
                      <span className="stars">
                        <button onClick={() => handleStars(1)}>
                          <BsStarFill />
                        </button>
                        <button onClick={() => handleStars(2)}>
                          <BsStarFill />
                        </button>
                        <button onClick={() => handleStars(3)}>
                          <BsStarFill />
                        </button>
                        <button onClick={() => handleStars(4)}>
                          <BsStarFill />
                        </button>
                        <button onClick={() => handleStars(5)}>
                          <BsStar />
                        </button>
                      </span>
                    ) : null}
                    {stars === 5 ? (
                      <span className="stars">
                        <button onClick={() => handleStars(1)}>
                          <BsStarFill />
                        </button>
                        <button onClick={() => handleStars(2)}>
                          <BsStarFill />
                        </button>
                        <button onClick={() => handleStars(3)}>
                          <BsStarFill />
                        </button>
                        <button onClick={() => handleStars(4)}>
                          <BsStarFill />
                        </button>
                        <button onClick={() => handleStars(5)}>
                          <BsStarFill />
                        </button>
                      </span>
                    ) : null}
                  </span>
                </span>
                <span className="testimonial">
                  <strong>Seu depoimento:</strong>
                  <textarea
                    placeholder="O Mateus é o melhor profissional do mundo, muito atencioso, carinhoso, lindo, ele sabe te acolher, sabe te aconselhar, não tem melhor... Super indico!"
                    cols="96"
                    rows="3"
                  ></textarea>
                </span>
                <span>
                  <Button>
                    Salvar as alterações! <BiSave />
                  </Button>
                  <Button>
                    Deletar depoimento! <TiCancel />
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
