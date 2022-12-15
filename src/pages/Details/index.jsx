//nessa página vai ficar os detalhes do profissional (horários livres, detalhes sobre ele, depoimentos sobre ele, etc.)
import { Container, Main } from "./styles";
import { useState, useEffect } from "react";
import { api } from "../../services/api";
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
import { Link, useParams } from "react-router-dom";
import { useAuthUser } from "../../hooks/authUser";
import { useAuthProfessional } from "../../hooks/authProfessional";
import { GoAlert } from "react-icons/go";
import { MdLogin } from "react-icons/md";
import avatarPlaceholder from "../../assets/avatar_placeholder.svg";
import { BsTrash } from "react-icons/bs";
import moment from "moment";

export function Details() {
  const [click, setClick] = useState(false);
  const [stars, setStars] = useState(1);
  const [starsTwo, setStarsTwo] = useState(1);
  const [clickTwo, setClickTwo] = useState(false);
  const [clickThree, setClickThree] = useState(false);
  const [modalDate, setModalDate] = useState();
  const [modalTime, setModalTime] = useState();
  const [testimony, setTestimony] = useState([]);
  const [testimonyAll, setTestimonyAll] = useState([]);
  const [testimonyUpdate, setTestimonyUpdate] = useState("");
  const [testimonyCreate, setCreateTestimony] = useState("");
  const [testimonyId, setTestimonyId] = useState()
  const [heart, setHeart] = useState(false);
  const { user } = useAuthUser();
  const { professional } = useAuthProfessional();
  const params = useParams();
  const [data, setData] = useState(null);
  const [schedules, setSchedules] = useState([]);
  const [idShedule, setIdSchedule] = useState(null);

  const today = new Date();
  const Day = String(today.getDate()).padStart(2, "0");
  const Year = today.getFullYear();
  const Month = String(today.getMonth() + 1).padStart(2, "0");
  const dateString = `${Year}-${Month}-${Day}`;

  const Hours = today.getHours();
  const Minutes = today.getMinutes();
  const hoursString = `${Hours}${Minutes}`;

  useEffect(() => {
    async function fetchProfessional() {
      const response = await api.get(`/professionals/${params.id}`);
      setData(response.data);
    }
    fetchProfessional();
  }, []);

  useEffect(() => {
    async function fetchSchedules() {
      const response = await api.get(
        `schedules/${params.id}?availability=disponível`
      );
      setSchedules(response.data.schedules);
    }
    fetchSchedules();
  }, [schedules]);

  useEffect(() => {
    async function fetchAssessments() {
      const response = await api.get(
        `assessments?id_professional=${params.id}`
      );
      setTestimonyAll(response.data.testimony);
    }
    fetchAssessments();
  }, [testimonyAll]);

  useEffect(() => {
    async function fetchAssessmentsUser() {
      if (user === undefined) {
        return;
      }
      const response = await api.get(`assessments/${params.id}`);
      setTestimony(response.data.testimony);
      setStars(response.data.testimony[0].note);
      setTestimonyId(response.data.testimony[0].id)
    }
    fetchAssessmentsUser();
  }, [testimony]);

  async function scheduleConfirm() {
    if (
      Number(String(modalTime).replace(":", "")) - Number(hoursString) < 100 &&
      moment(modalDate).isSame(dateString)
    ) {
      alert(
        "Não é possível agendar porque falta menos de 1hr para a consulta!"
      );
      return;
    }

    const Schedule = {
      availability: "ocupado",
      status: "por realizar",
      id: idShedule,
    };
    await api.put("/schedules", Schedule);
    alert("Consulta agendada com sucesso!");
    setClick(false);
  }

  function handleFavorite() {
    if (heart === false) {
      setHeart(true);
    } else if (heart === true) {
      setHeart(false);
    }
  }

  function handleClick(dt, tm, id) {
    if (click === false) {
      setClick(true);
      setModalDate(dt);
      setModalTime(tm);
      setIdSchedule(id);
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


  async function handleStars(number) {
    await api.put(`/assessments/${user.id}?note=${number}&id_professional=${params.id}`);
    setStarsTwo(number);
  }

  async function handleUpdateTestimony() {
    await api.put(
      `/assessments?testimony=${testimonyUpdate}&id_user=${user.id}&id_professional=${params.id}`
    );
    alert("Depoimento atualizado com sucesso!");
    setTestimonyUpdate("");
  }

  async function handleDeleteTestimony() {
    if (confirm("Tem certeza que deseja deletar seu depoimento?")) {
      await api.delete(`/assessments?id_user=${user.id}&id_professional=${params.id}`);
    } else {
      return
    }
    alert("Depoimento deletado!");
    setStars(1);
    setClickThree(false);
  }

  async function createTestimony() {
    await api.post(
      `/assessments?testimony=${testimonyCreate}&note=${starsTwo}&id_professional=${params.id}`
    );
    alert("Depoimento criado com sucesso!");
    setStarsTwo(1);
    setClickTwo(false);
    setCreateTestimony("");
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
                <Button onClick={scheduleConfirm}>
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
              {starsTwo === 1 ? (
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
              {starsTwo === 2 ? (
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
              {starsTwo === 3 ? (
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
              {starsTwo === 4 ? (
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
              {starsTwo === 5 ? (
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
                value={testimonyCreate}
                onChange={(e) => setCreateTestimony(e.target.value)}
              ></textarea>
              <Button onClick={() => createTestimony()}>
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
              {testimony.map((test) => (
                <textarea
                  onChange={(e) => setTestimonyUpdate(e.target.value)}
                  placeholder={test.testimony}
                  value={testimonyUpdate}
                  cols="80"
                  rows="10"
                ></textarea>
              ))}
              <Button onClick={() => handleUpdateTestimony()}>
                Atualizar!
                <GiConfirmed />
              </Button>
              <Button onClick={() => handleDeleteTestimony()}>
                Excluir!
                <BsTrash />
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
            {data && (
              <div className="main">
                <img
                  src={
                    data.avatar
                      ? `${api.defaults.baseURL}/files/${data.avatar}`
                      : avatarPlaceholder
                  }
                  alt="foto do profissional"
                />
                <div className="Description">
                  <div className="description">
                    <h1>
                      Dr. {data.name}
                      {!professional ? (
                        <button
                          className="favorite"
                          onClick={() => handleFavorite()}
                        >
                          {heart ? <MdFavorite /> : <MdFavoriteBorder />}
                        </button>
                      ) : null}
                    </h1>
                    <p>{data.description}</p>
                    <div className="tags">
                      {data.tags.map((tag) => (
                        <Tag key={String(tag.id)} title={tag.name} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </Section>
          {!professional ? (
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
          ) : null}
          <div className="container">
            <div className="left"></div>
            <div className="right"></div>
            <div ref={carousel} className="schedules">
              {!professional ? (
                <div className="Schedules">
                  {schedules.map((schedule) => (
                    <div
                      key={String(schedule.id)}
                      className={
                        moment(schedule.date).isBefore(dateString) ||
                        ((schedule.time.replace(":", "") < hoursString) &&
                        (moment(schedule.date).isSame(dateString)))
                          ? "none "
                          : "query"
                      }
                    >
                      <p>
                        <strong>Data:</strong> {schedule.date}
                      </p>
                      <p>
                        <strong>Horário:</strong> {schedule.time}
                      </p>
                      <p>
                        <strong>Duração:</strong> {schedule.duration}
                      </p>
                      <p>
                        <strong>Preço:</strong> R$100.00
                      </p>
                      <Button
                        onClick={() =>
                          handleClick(schedule.date, schedule.time, schedule.id)
                        }
                      >
                        <AiFillSchedule />
                        Agende sua consulta!
                      </Button>
                    </div>
                  ))}
                </div>
              ) : null}
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
                    {testimony.length !== 0 ? (
                      testimony &&
                      testimony.map((test) => (
                        <div
                          className={user.id === test.id ? "testimony" : "none"}
                        >
                          <img
                            src={
                              test.avatar
                                ? `${api.defaults.baseURL}/files/${test.avatar}`
                                : avatarPlaceholder
                            }
                            alt="avatar do usuário"
                          />
                          <div>
                            <span>
                              <BsStarFill />
                              {test.note}.0
                            </span>
                            <span>Seu depoimento</span>
                            <p>{test.testimony}</p>
                            <a
                              className="edit"
                              title="Editar"
                              onClick={() => handleClickThree()}
                            >
                              <BiEditAlt />
                            </a>
                          </div>
                        </div>
                      ))
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
                    {testimonyAll &&
                      testimonyAll.map((testimony) =>
                        user ? (
                          <div
                            key={String(testimony.id)}
                            className={
                              user.id !== testimony.id ? "testimony" : "none"
                            }
                          >
                            <img
                              src={
                                testimony.avatar
                                  ? `${api.defaults.baseURL}/files/${testimony.avatar}`
                                  : avatarPlaceholder
                              }
                              alt="avatar do usuário"
                            />
                            <div>
                              <span>
                                <BsStarFill />
                                {testimony.note}.0
                              </span>
                              <span>{testimony.name}</span>
                              <p>{testimony.testimony}</p>
                            </div>
                          </div>
                        ) : (
                          <div className={"testimony"}>
                            <img
                              src={
                                testimony.avatar
                                  ? `${api.defaults.baseURL}/files/${testimony.avatar}`
                                  : avatarPlaceholder
                              }
                              alt="avatar do usuário"
                            />
                            <div>
                              <span>
                                <BsStarFill />
                                {testimony.note}.0
                              </span>
                              <span>{testimony.name}</span>
                              <p>{testimony.testimony}</p>
                            </div>
                          </div>
                        )
                      )}
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
