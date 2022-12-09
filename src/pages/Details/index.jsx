//nessa página vai ficar os detalhes do profissional (horários livres, detalhes sobre ele, depoimentos sobre ele, etc.)
import { Container, Main } from "./styles";
import { useState } from "react";
import { Button } from "../../components/button";
import { AiFillSchedule } from "react-icons/ai";
import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import { MdFavorite } from "react-icons/md";
import { MdFavoriteBorder } from "react-icons/md";
import { useRef } from "react";
import { CgArrowLeftO } from "react-icons/cg";
import { CgArrowRightO } from "react-icons/cg";
import { CgArrowUpO } from "react-icons/cg";
import { CgArrowDownO } from "react-icons/cg";
import { BsStarFill } from "react-icons/bs";
import { BsStar } from "react-icons/bs";
import { BiEditAlt } from "react-icons/bi";
import { Section } from "../../components/section";
import { Tag } from "../../components/tag";
import { ButtonText } from "../../components/buttonText";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { CgClose } from "react-icons/cg";
import { GiConfirmed } from "react-icons/gi";
import { FaHandPointDown } from "react-icons/fa";
import { FaRegHandPointRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useAuthUser } from "../../hooks/authUser";
import { GoAlert } from "react-icons/go";
import { MdLogin } from "react-icons/md";

export function Details() {
  const [click, setClick] = useState(false);
  const [stars, setStars] = useState(1);
  const [clickTwo, setClickTwo] = useState(false);
  const [clickThree, setClickThree] = useState(false);
  const [modalDate, setModalDate] = useState();
  const [modalTime, setModalTime] = useState();
  const [testimony, setTestimony] = useState(true);
  const [heart, setHeart] = useState(false);
  const { user } = useAuthUser();

  function handleFavorite() {
    if (heart === false) {
      setHeart(true);
    } else if (heart === true) {
      setHeart(false);
    }
  }

  function handleClick(dt, tm) {
    if (click === false) {
      setClick(true);
      setModalDate(dt);
      setModalTime(tm);
    } else {
      setClick(false);
    }
  }

  const handleOutsideClick = (e) => {
    if (e.target.id === "modal") {
      handleClick();
    }
  };

  function handleClickTwo() {
    if (clickTwo === false) {
      setClickTwo(true);
    } else {
      setClickTwo(false);
    }
  }

  const handleOutsideClickTwo = (e) => {
    if (e.target.id === "modal") {
      handleClickTwo();
    }
  };

  function handleClickThree() {
    if (clickThree === false) {
      setClickThree(true);
    } else {
      setClickThree(false);
    }
  }

  const handleOutsideClickThree = (e) => {
    if (e.target.id === "modal") {
      handleClickThree();
    }
  };

  function handleStars(number) {
    setStars(number);
  }

  const carousel = useRef(null);
  const carouselTwo = useRef(null);

  const handleLeftClick = (e) => {
    e.preventDefault();
    console.log(carousel);
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };

  const handleRightClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft += carousel.current.offsetWidth;
  };

  const handleUpClick = (e) => {
    e.preventDefault();
    console.log(carouselTwo);
    carouselTwo.current.scrollTop -= carouselTwo.current.offsetHeight;
  };

  const handleDownClick = (e) => {
    e.preventDefault();
    carouselTwo.current.scrollTop += carouselTwo.current.offsetHeight;
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
            {user ? (
              <div>
                <FaHandPointDown className="svg" />
                Tem certeza que deseja agendar a consulta na data {
                  modalDate
                } às {modalTime} hrs?
                <Button>
                  Confirmar!
                  <GiConfirmed />
                </Button>
              </div>
            ) : (
              <div>
                <GoAlert className="svg" />
                Para agendar uma consulta você precisa estar logado!!
                <ButtonText>
                  <Link to="/signIn">
                    Fazer o login!
                    <MdLogin />
                  </Link>
                </ButtonText>
              </div>
            )}
          </div>
        </div>
        <div
          id="modal"
          className={clickTwo ? "modal" : "none"}
          onClick={handleOutsideClickTwo}
        >
          <div className="modalContent">
            <button className="close" onClick={() => handleClickTwo()}>
              <CgClose />
            </button>
            <div>
              <h4>Dê sua nota para esse profissional:</h4>
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
              <h4>Escreva um depoimento sobre o profissional:</h4>
              <textarea
                placeholder="Capriche no seu depoimento ;)"
                cols="80"
                rows="10"
              ></textarea>
              <Button>
                Finalizar!
                <GiConfirmed />
              </Button>
            </div>
          </div>
        </div>
        <div
          id="modal"
          className={clickThree ? "modal" : "none"}
          onClick={handleOutsideClickThree}
        >
          <div className="modalContent">
            <button className="close" onClick={() => handleClickThree()}>
              <CgClose />
            </button>
            <div>
              <h4>Editar a nota do profissional:</h4>
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
              <h4>Editar seu depoimento sobre o profissional:</h4>
              <textarea
                placeholder="Mateus é o melhor psicólogo, não tem pra ninguém, ele cura todas as doenças da alma, deixa a pessoa em um estado perfeito de saúde mental, recomendado, ele literalmente resolve sua vida!"
                cols="80"
                rows="10"
              ></textarea>
              <Button>
                Atualizar!
                <GiConfirmed />
              </Button>
            </div>
          </div>
        </div>

        <div className="columnOne">
          <Link to={-1}>
            <ButtonText>
              <MdOutlineKeyboardArrowLeft />
              voltar
            </ButtonText>
          </Link>
          <Section>
            <div className="main">
              <img
                src="https://github.com/mateusrc-dev.png"
                alt="foto do profissional"
              />
              <div className="Description">
                <div className="description">
                  <h1>
                    Dr. Mateus Carvalho
                    <button
                      className="favorite"
                      onClick={() => handleFavorite()}
                    >
                      {heart ? <MdFavorite /> : <MdFavoriteBorder />}
                    </button>
                  </h1>
                  <p>
                    Meu nome é Mateus, eu sou um psicólogo incrível, trato você
                    super bem, você vai se sentir no céu ao sair de uma consulta
                    comigo, como se nenhum problema existisse.
                  </p>
                  <div className="tags">
                    <Tag title="ansiedade" />
                    <Tag title="ansiedade" />
                    <Tag title="ansiedade" />
                    <Tag title="ansiedade" />
                    <Tag title="ansiedade" />
                    <Tag title="ansiedade" />
                    <Tag title="ansiedade" />
                    <Tag title="ansiedade" />
                    <Tag title="ansiedade" />
                    <Tag title="ansiedade" />
                    <Tag title="ansiedade" />
                  </div>
                </div>
              </div>
            </div>
          </Section>
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
                  <Button onClick={() => handleClick("20/03/2050", "12:00")}>
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
                  <Button onClick={() => handleClick("20/03/2050", "12:00")}>
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
                    <CgArrowUpO onClick={handleUpClick} />
                  </button>
                  <button>
                    <CgArrowDownO onClick={handleDownClick} />
                  </button>
                </div>
              </div>
              <div className="Container">
                <div className="top"></div>
                <div className="bottom"></div>
                <div ref={carouselTwo} className="Depositions">
                  <div className="Deposition">
                    {testimony ? (
                      <div className={user ? "testimony" : "none"}>
                        <img
                          src="https://github.com/mateusrc-dev.png"
                          alt="foto do paciente"
                        />
                        <div>
                          <span>
                            <BsStarFill />
                            5.0
                          </span>
                          <span>Seu depoimento</span>
                          <p>
                            Mateus é o melhor psicólogo, não tem pra ninguém,
                            ele cura todas as doenças da alma, deixa a pessoa em
                            um estado perfeito de saúde mental, recomendado, ele
                            literalmente resolve sua vida!
                          </p>
                          <a
                            className="edit"
                            title="Editar"
                            onClick={() => handleClickThree()}
                          >
                            <BiEditAlt />
                          </a>
                        </div>
                      </div>
                    ) : (
                      <span className={user ? "createTestimony" : "none"}>
                        <FaRegHandPointRight />
                        Você ainda não criou seu depoimento sobre esse
                        profissional.
                        <Button onClick={() => handleClickTwo()}>
                          Crie seu depoimento!
                        </Button>
                      </span>
                    )}
                    <div className="testimony">
                      <img src="https://github.com/mateusrc-dev.png" alt="" />
                      <div>
                        <span>
                          <BsStarFill />
                          5.0
                        </span>
                        <span>Paciente Fernando</span>
                        <p>
                          Mateus é o melhor psicólogo, não tem pra ninguém, ele
                          cura todas as doenças da alma, deixa a pessoa em um
                          estado perfeito de saúde mental, recomendado, ele
                          literalmente resolve sua vida!
                        </p>
                      </div>
                    </div>
                    <div className="testimony">
                      <img src="https://github.com/mateusrc-dev.png" alt="" />
                      <div>
                        <span>
                          <BsStarFill />
                          5.0
                        </span>
                        <span>Paciente Fernando</span>
                        <p>
                          Mateus é o melhor psicólogo, não tem pra ninguém, ele
                          cura todas as doenças da alma, deixa a pessoa em um
                          estado perfeito de saúde mental, recomendado, ele
                          literalmente resolve sua vida!
                        </p>
                      </div>
                    </div>
                    <div className="testimony">
                      <img src="https://github.com/mateusrc-dev.png" alt="" />
                      <div>
                        <span>
                          <BsStarFill />
                          5.0
                        </span>
                        <span>Paciente Fernando</span>
                        <p>
                          Mateus é o melhor psicólogo, não tem pra ninguém, ele
                          cura todas as doenças da alma, deixa a pessoa em um
                          estado perfeito de saúde mental, recomendado, ele
                          literalmente resolve sua vida!
                        </p>
                      </div>
                    </div>
                    <div className="testimony">
                      <img src="https://github.com/mateusrc-dev.png" alt="" />
                      <div>
                        <span>
                          <BsStarFill />
                          5.0
                        </span>
                        <span>Paciente Fernando</span>
                        <p>
                          Mateus é o melhor psicólogo, não tem pra ninguém, ele
                          cura todas as doenças da alma, deixa a pessoa em um
                          estado perfeito de saúde mental, recomendado, ele
                          literalmente resolve sua vida!
                        </p>
                      </div>
                    </div>
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
