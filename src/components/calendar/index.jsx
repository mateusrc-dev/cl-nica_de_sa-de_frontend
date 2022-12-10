import { Container } from "./styles";
import { useState, useEffect } from "react";
import { TbArrowBigLeftLines } from "react-icons/tb";
import { TbArrowBigRightLines } from "react-icons/tb";
import { Button } from "../../components/button";
import { CgClose } from "react-icons/cg";
import { GiConfirmed } from "react-icons/gi";
import { FaRegHandPointRight } from "react-icons/fa";
import { IoMdArrowDropleft } from "react-icons/io";
import { IoMdArrowDropright } from "react-icons/io";
import { api } from "../../services/api";
import { useAuthProfessional } from "../../hooks/authProfessional";
import avatarPlaceholder from "../../assets/avatar_placeholder.svg";

const monthNames = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];

const weekNames = [
  "Domingo",
  "Segunda",
  "Terça",
  "Quarta",
  "Quinta",
  "Sexta",
  "Sábado",
];

export function Calendar() {
  const [click, setClick] = useState(false);
  const [clickTwo, setClickTwo] = useState(false);
  const [modalDate, setModalDate] = useState();
  const [modalTime, setModalTime] = useState();
  const [displayTime, setDisplayTime] = useState("01:00");
  const [schedules, setSchedules] = useState([]);
  const [scheduleOccupied, setScheduleOccupied] = useState([
    {
      availability: "ocupado",
      avatar: "c664849438f84a2b2cd9-health.png",
      date: "10/12/2022",
      duration: "01:00",
      name: "Mateus Fernandes",
      queixas: "tenho muita ansiedade, sofri muito bulliyng na vida.",
      status: "por realizar",
      time: "12:00",
    },
  ]);
  const [schedulesTwo, setSchedulesTwo] = useState([]);
  const { professional } = useAuthProfessional();

  console.log(scheduleOccupied);

  const date = new Date();
  var newDate = new Date();
  const [Number, setNumber] = useState(0);

  function handleDisplayTimeLeft() {
    if (displayTime === "01:00") {
      setDisplayTime("00:30");
    } else if (displayTime === "01:30") {
      setDisplayTime("01:00");
    } else if (displayTime === "00:30") {
      return;
    }
  }

  function handleDisplayTimeRight() {
    if (displayTime === "01:00") {
      setDisplayTime("01:30");
    } else if (displayTime === "00:30") {
      setDisplayTime("01:00");
    } else if (displayTime === "01:30") {
      return;
    }
  }

  function handleDaysAdd() {
    setNumber((prevState) => prevState + 7);
  }

  function handleDaysSubtract() {
    setNumber((prevState) => prevState - 7);
  }

  newDate.setDate(date.getDate() + Number);

  const today = new Date();
  const Day = String(today.getDate()).padStart(2, "0");
  const Year = today.getFullYear();
  const Month = String(today.getMonth() + 1).padStart(2, "0");
  const dateString = `${Day}/${Month}/${Year}`;

  var year = newDate.getFullYear();
  var month = newDate.getMonth();
  var nameMonth = monthNames[month];
  var first = newDate.getDate() - newDate.getDay();

  function getWeeks() {
    const arrayWeeks = [];

    for (let i = 0; i < 7; i++) {
      let next = new Date(newDate.getTime());
      next.setDate(first + i);
      const nameWeek = weekNames[next.getDay()];
      arrayWeeks.push(nameWeek);
    }
    return arrayWeeks;
  }

  function getNumber() {
    const numbersWeek = [];
    for (let i = 0; i < 7; i++) {
      let next = new Date(newDate.getTime());
      next.setDate(first + i);
      const day = String(next.getDate()).padStart(2, "0");
      const month = String(next.getMonth() + 1).padStart(2, "0");
      const year = next.getFullYear();
      const numberWeek = `${day}/${month}/${year}`;
      numbersWeek.push(numberWeek);
    }
    return numbersWeek;
  }

  const weekDays = getWeeks();
  const numberDays = getNumber();
  console.log(numberDays);

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

  async function handleCreateSchedule() {
    if (modalDate < dateString) {
      alert("Não é possível criar um horário em um dia anterior a data atual!");
      return;
    } else {
      const availability = "disponível";
      await api.post("/schedules", {
        time: modalTime,
        availability,
        date: modalDate,
        duration: displayTime,
      });
      alert("Novo horário criado com sucesso!");
      window.location.reload();
    }
  }

  useEffect(() => {
    async function handleSchedules() {
      const response = await api.get(
        `/schedulesProfessionals/${professional.id}`
      );
      setSchedules(response.data.schedules);
      let Schedules = [];
      for (var i = 0; i < response.data.schedules.length; i++) {
        let obj = response.data.schedules[i]["date"];
        let obj2 = response.data.schedules[i]["time"];
        let obj3 = response.data.schedules[i]["availability"];
        Schedules.push(obj + obj2 + obj3);
      }
      setSchedulesTwo(Schedules);
    }
    handleSchedules();
  }, []);

  async function handleClickTwoClose() {
    if (clickTwo === false) {
      setClickTwo(true);
    } else {
      setClickTwo(false);
    }
  }

  async function handleClickTwo(date, time) {
    if (clickTwo === false) {
      setClickTwo(true);
    } else {
      setClickTwo(false);
    }

    const response = await api.get(
      `/schedulesProfessionals/?date=${date}&time=${time}`
    );
    setScheduleOccupied(response.data.schedules);
  }

  const handleOutsideClickTwo = (e) => {
    if (e.target.id === "modalTwo") {
      handleClickTwoClose();
    }
  };

  return (
    <Container>
      <div
        id="modal"
        className={click ? "modal" : "none"}
        onClick={handleOutsideClick}
      >
        <div className="modalContent">
          <button className="close" onClick={() => handleClick()}>
            <CgClose />
          </button>
          <p>
            <FaRegHandPointRight /> Tem certeza que deseja criar um horário na
            data {modalDate} às {modalTime}hrs?
            <Button onClick={handleCreateSchedule}>
              Confirmar!
              <GiConfirmed />
            </Button>
          </p>
        </div>
      </div>
      <div
        id="modalTwo"
        className={clickTwo ? "modal" : "none"}
        onClick={handleOutsideClickTwo}
      >
        <div className="modalContent">
          <button className="close" onClick={() => handleClickTwoClose()}>
            <CgClose />
          </button>
          <p>
            <div className="allDetails">
              <div className="scheduleDetails">
                <h2>Detalhes sobre a consulta:</h2>
                <span>
                  <strong>Horário:</strong> {scheduleOccupied[0]["time"]}
                </span>
                <span>
                  <strong>Data:</strong> {scheduleOccupied[0]["date"]}
                </span>
                <span>
                  <strong>Duração:</strong> {scheduleOccupied[0]["duration"]}
                </span>
                <span>
                  <strong>Disponibilidade:</strong>{" "}
                  {scheduleOccupied[0]["availability"]}
                </span>
                <span>
                  <strong>Status:</strong> {scheduleOccupied[0]["status"]}
                </span>
              </div>
              <div className="Client">
                <h2>Detalhes sobre o paciente:</h2>
                <div className="client">
                  <div className="avatar">
                    {scheduleOccupied[0]["status"] ? (
                      <img
                        className="avatarClient"
                        src={`${api.defaults.baseURL}/files/${scheduleOccupied[0]["avatar"]}`}
                        alt="imagem do paciente"
                      />
                    ) : (
                      <img src={avatarPlaceholder} alt="avatar do paciente" />
                    )}
                  </div>
                  <div className="detailsClient">
                    <span>
                      <strong>Nome:</strong> {scheduleOccupied[0]["name"]}
                    </span>
                    <span>
                      <strong>Queixas:</strong> {scheduleOccupied[0]["queixas"]}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </p>
        </div>
      </div>
      <div className="timeAndTitle">
        <div className="time">
          <h3>Modificar tempo da consulta</h3>
          <button onClick={handleDisplayTimeLeft}>
            <IoMdArrowDropleft />
          </button>
          <span>{displayTime}</span>
          <button onClick={handleDisplayTimeRight}>
            <IoMdArrowDropright />
          </button>
        </div>
        <h1 className="title">
          {nameMonth} | <span>{year}</span>
        </h1>
      </div>
      <table className={displayTime === "01:00" ? "table" : "none"}>
        <thead>
          <tr>
            <tr></tr>
            {weekDays.map((key) => (
              <th className="list_item">
                <span>{key}</span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className="buttons">
                <button onClick={() => handleDaysSubtract()}>
                  <TbArrowBigLeftLines />
                </button>
                <button onClick={() => handleDaysAdd()}>
                  <TbArrowBigRightLines />
                </button>
              </div>
            </td>
            {numberDays.map((number) => (
              <td
                className={
                  dateString === number ? "list_item_active" : "list_item"
                }
              >
                {dateString === number ? (
                  <span>{number} (HOJE)</span>
                ) : (
                  <span>{number}</span>
                )}
              </td>
            ))}
          </tr>
          <tr>
            <td>12:00</td>

            {numberDays.map((number) => (
              <td
                className={
                  dateString === number ? "list_item_active" : "list_item"
                }
              >
                {" "}
                {schedulesTwo.includes(number + "12:00disponível") ? (
                  <button disabled={true}>Horário Criado Disponível</button>
                ) : null}
                {schedulesTwo.includes(number + "12:00ocupado") ? (
                  <button onClick={() => handleClickTwo(number, "12:00")}>
                    Horário Ocupado (Clique para ver mais detalhes)
                  </button>
                ) : null}
                {!schedulesTwo.includes(number + "12:00disponível") &&
                !schedulesTwo.includes(number + "12:00ocupado") ? (
                  <button onClick={() => handleClick(number, "12:00")}>
                    Criar novo horário
                  </button>
                ) : null}
              </td>
            ))}
          </tr>
          <tr>
            <td>13:00</td>
            {numberDays.map((number) => (
              <td
                className={
                  dateString === number ? "list_item_active" : "list_item"
                }
              >
                <button onClick={() => handleClick(number, "13:00")}>
                  Clique para criar um horário
                </button>
              </td>
            ))}
          </tr>
          <tr>
            <td>14:00</td>
            {numberDays.map((number) => (
              <td
                className={
                  dateString === number ? "list_item_active" : "list_item"
                }
              >
                <button onClick={() => handleClick(number, "14:00")}>
                  Clique para criar um horário
                </button>
              </td>
            ))}
          </tr>
          <tr>
            <td>15:00</td>
            {numberDays.map((number) => (
              <td
                className={
                  dateString === number ? "list_item_active" : "list_item"
                }
              >
                <button onClick={() => handleClick(number, "15:00")}>
                  Clique para criar um horário
                </button>
              </td>
            ))}
          </tr>
          <tr>
            <td>16:00</td>
            {numberDays.map((number) => (
              <td
                className={
                  dateString === number ? "list_item_active" : "list_item"
                }
              >
                <button onClick={() => handleClick(number, "16:00")}>
                  Clique para criar um horário
                </button>
              </td>
            ))}
          </tr>
          <tr>
            <td>17:00</td>
            {numberDays.map((number) => (
              <td
                className={
                  dateString === number ? "list_item_active" : "list_item"
                }
              >
                <button onClick={() => handleClick(number, "17:00")}>
                  Clique para criar um horário
                </button>
              </td>
            ))}
          </tr>
          <tr>
            <td>18:00</td>
            {numberDays.map((number) => (
              <td
                className={
                  dateString === number ? "list_item_active" : "list_item"
                }
              >
                <button onClick={() => handleClick(number, "18:00")}>
                  Clique para criar um horário
                </button>
              </td>
            ))}
          </tr>
          <tr>
            <td>19:00</td>
            {numberDays.map((number) => (
              <td
                className={
                  dateString === number ? "list_item_active" : "list_item"
                }
              >
                <button onClick={() => handleClick(number, "19:00")}>
                  Clique para criar um horário
                </button>
              </td>
            ))}
          </tr>
          <tr>
            <td>20:00</td>
            {numberDays.map((number) => (
              <td
                className={
                  dateString === number ? "list_item_active" : "list_item"
                }
              >
                <button onClick={() => handleClick(number, "20:00")}>
                  Clique para criar um horário
                </button>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
      <table className={displayTime === "01:30" ? "table" : "none"}>
        <thead>
          <tr>
            <tr></tr>
            {weekDays.map((key) => (
              <th className="list_item">
                <span>{key}</span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className="buttons">
                <button onClick={() => handleDaysSubtract()}>
                  <TbArrowBigLeftLines />
                </button>
                <button onClick={() => handleDaysAdd()}>
                  <TbArrowBigRightLines />
                </button>
              </div>
            </td>
            {numberDays.map((number) => (
              <td
                className={
                  dateString === number ? "list_item_active" : "list_item"
                }
              >
                {dateString === number ? (
                  <span>{number} (HOJE)</span>
                ) : (
                  <span>{number}</span>
                )}
              </td>
            ))}
          </tr>
          <tr>
            <td>12:00</td>
            {numberDays.map((number) => (
              <td
                className={
                  dateString === number ? "list_item_active" : "list_item"
                }
              >
                <button onClick={() => handleClick(number, "12:00")}>
                  Clique para criar um horário
                </button>
              </td>
            ))}
          </tr>
          <tr>
            <td>13:30</td>
            {numberDays.map((number) => (
              <td
                className={
                  dateString === number ? "list_item_active" : "list_item"
                }
              >
                <button onClick={() => handleClick(number, "13:30")}>
                  Clique para criar um horário
                </button>
              </td>
            ))}
          </tr>
          <tr>
            <td>15:00</td>
            {numberDays.map((number) => (
              <td
                className={
                  dateString === number ? "list_item_active" : "list_item"
                }
              >
                <button onClick={() => handleClick(number, "15:00")}>
                  Clique para criar um horário
                </button>
              </td>
            ))}
          </tr>
          <tr>
            <td>16:30</td>
            {numberDays.map((number) => (
              <td
                className={
                  dateString === number ? "list_item_active" : "list_item"
                }
              >
                <button onClick={() => handleClick(number, "16:30")}>
                  Clique para criar um horário
                </button>
              </td>
            ))}
          </tr>
          <tr>
            <td>18:00</td>
            {numberDays.map((number) => (
              <td
                className={
                  dateString === number ? "list_item_active" : "list_item"
                }
              >
                <button onClick={() => handleClick(number, "18:00")}>
                  Clique para criar um horário
                </button>
              </td>
            ))}
          </tr>
          <tr>
            <td>19:30</td>
            {numberDays.map((number) => (
              <td
                className={
                  dateString === number ? "list_item_active" : "list_item"
                }
              >
                <button onClick={() => handleClick(number, "19:30")}>
                  Clique para criar um horário
                </button>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
      <table className={displayTime === "00:30" ? "table" : "none"}>
        <thead>
          <tr>
            <tr></tr>
            {weekDays.map((key) => (
              <th className="list_item">
                <span>{key}</span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className="buttons">
                <button onClick={() => handleDaysSubtract()}>
                  <TbArrowBigLeftLines />
                </button>
                <button onClick={() => handleDaysAdd()}>
                  <TbArrowBigRightLines />
                </button>
              </div>
            </td>
            {numberDays.map((number) => (
              <td
                className={
                  dateString === number ? "list_item_active" : "list_item"
                }
              >
                {dateString === number ? (
                  <span>{number} (HOJE)</span>
                ) : (
                  <span>{number}</span>
                )}
              </td>
            ))}
          </tr>
          <tr>
            <td>12:00</td>
            {numberDays.map((number) => (
              <td
                className={
                  dateString === number ? "list_item_active" : "list_item"
                }
              >
                <button onClick={() => handleClick(number, "12:00")}>
                  Clique para criar um horário
                </button>
              </td>
            ))}
          </tr>
          <tr>
            <td>12:30</td>
            {numberDays.map((number) => (
              <td
                className={
                  dateString === number ? "list_item_active" : "list_item"
                }
              >
                <button onClick={() => handleClick(number, "12:30")}>
                  Clique para criar um horário
                </button>
              </td>
            ))}
          </tr>
          <tr>
            <td>13:00</td>
            {numberDays.map((number) => (
              <td
                className={
                  dateString === number ? "list_item_active" : "list_item"
                }
              >
                <button onClick={() => handleClick(number, "13:00")}>
                  Clique para criar um horário
                </button>
              </td>
            ))}
          </tr>
          <tr>
            <td>13:30</td>
            {numberDays.map((number) => (
              <td
                className={
                  dateString === number ? "list_item_active" : "list_item"
                }
              >
                <button onClick={() => handleClick(number, "13:30")}>
                  Clique para criar um horário
                </button>
              </td>
            ))}
          </tr>
          <tr>
            <td>14:00</td>
            {numberDays.map((number) => (
              <td
                className={
                  dateString === number ? "list_item_active" : "list_item"
                }
              >
                <button onClick={() => handleClick(number, "14:00")}>
                  Clique para criar um horário
                </button>
              </td>
            ))}
          </tr>
          <tr>
            <td>14:30</td>
            {numberDays.map((number) => (
              <td
                className={
                  dateString === number ? "list_item_active" : "list_item"
                }
              >
                <button onClick={() => handleClick(number, "14:30")}>
                  Clique para criar um horário
                </button>
              </td>
            ))}
          </tr>
          <tr>
            <td>15:00</td>
            {numberDays.map((number) => (
              <td
                className={
                  dateString === number ? "list_item_active" : "list_item"
                }
              >
                <button onClick={() => handleClick(number, "15:00")}>
                  Clique para criar um horário
                </button>
              </td>
            ))}
          </tr>
          <tr>
            <td>15:30</td>
            {numberDays.map((number) => (
              <td
                className={
                  dateString === number ? "list_item_active" : "list_item"
                }
              >
                <button onClick={() => handleClick(number, "15:30")}>
                  Clique para criar um horário
                </button>
              </td>
            ))}
          </tr>
          <tr>
            <td>16:00</td>
            {numberDays.map((number) => (
              <td
                className={
                  dateString === number ? "list_item_active" : "list_item"
                }
              >
                <button onClick={() => handleClick(number, "16:00")}>
                  Clique para criar um horário
                </button>
              </td>
            ))}
          </tr>
          <tr>
            <td>16:30</td>
            {numberDays.map((number) => (
              <td
                className={
                  dateString === number ? "list_item_active" : "list_item"
                }
              >
                <button onClick={() => handleClick(number, "16:30")}>
                  Clique para criar um horário
                </button>
              </td>
            ))}
          </tr>
          <tr>
            <td>17:00</td>
            {numberDays.map((number) => (
              <td
                className={
                  dateString === number ? "list_item_active" : "list_item"
                }
              >
                <button onClick={() => handleClick(number, "17:00")}>
                  Clique para criar um horário
                </button>
              </td>
            ))}
          </tr>
          <tr>
            <td>17:30</td>
            {numberDays.map((number) => (
              <td
                className={
                  dateString === number ? "list_item_active" : "list_item"
                }
              >
                <button onClick={() => handleClick(number, "17:30")}>
                  Clique para criar um horário
                </button>
              </td>
            ))}
          </tr>
          <tr>
            <td>18:00</td>
            {numberDays.map((number) => (
              <td
                className={
                  dateString === number ? "list_item_active" : "list_item"
                }
              >
                <button onClick={() => handleClick(number, "18:00")}>
                  Clique para criar um horário
                </button>
              </td>
            ))}
          </tr>
          <tr>
            <td>18:30</td>
            {numberDays.map((number) => (
              <td
                className={
                  dateString === number ? "list_item_active" : "list_item"
                }
              >
                <button onClick={() => handleClick(number, "18:30")}>
                  Clique para criar um horário
                </button>
              </td>
            ))}
          </tr>
          <tr>
            <td>19:00</td>
            {numberDays.map((number) => (
              <td
                className={
                  dateString === number ? "list_item_active" : "list_item"
                }
              >
                <button onClick={() => handleClick(number, "19:00")}>
                  Clique para criar um horário
                </button>
              </td>
            ))}
          </tr>
          <tr>
            <td>19:30</td>
            {numberDays.map((number) => (
              <td
                className={
                  dateString === number ? "list_item_active" : "list_item"
                }
              >
                <button onClick={() => handleClick(number, "19:30")}>
                  Clique para criar um horário
                </button>
              </td>
            ))}
          </tr>
          <tr>
            <td>20:00</td>
            {numberDays.map((number) => (
              <td
                className={
                  dateString === number ? "list_item_active" : "list_item"
                }
              >
                <button onClick={() => handleClick(number, "20:00")}>
                  Clique para criar um horário
                </button>
              </td>
            ))}
          </tr>
          <tr>
            <td>20:30</td>
            {numberDays.map((number) => (
              <td
                className={
                  dateString === number ? "list_item_active" : "list_item"
                }
              >
                <button onClick={() => handleClick(number, "20:30")}>
                  Clique para criar um horário
                </button>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
