import { Container, ContainerTable } from "./styles";
import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import { GoAlert } from "react-icons/go";
import { FaRegHandPointRight } from "react-icons/fa";
import { ButtonText } from "../../components/buttonText";
import { TiArrowBack } from "react-icons/ti";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { TbArrowBigLeftLines } from "react-icons/tb";
import { TbArrowBigRightLines } from "react-icons/tb";
import { Button } from "../../components/button";
import { CgClose } from "react-icons/cg";
import { GiConfirmed } from "react-icons/gi";
import { IoMdArrowDropleft } from "react-icons/io";
import { IoMdArrowDropright } from "react-icons/io";
import { api } from "../../services/api";
import { useAuthProfessional } from "../../hooks/authProfessional";
import avatarPlaceholder from "../../assets/avatar_placeholder.svg";
import { Schedule } from "../../components/Schedule";
import moment from "moment";
import { ShowLoading } from "../../components/loading";

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

export function Schedules() {
  const [click, setClick] = useState(false);
  const [clickTwo, setClickTwo] = useState(false);
  const [clickThree, setClickThree] = useState(false);
  const [modalDate, setModalDate] = useState();
  const [modalTime, setModalTime] = useState();
  const [displayTime, setDisplayTime] = useState("01:00");
  const [schedules, setSchedules] = useState([]);
  const [justification, setJustification] = useState("");
  const [loadingState, setLoadingState] = useState(false);
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

  const date = new Date();
  var newDate = new Date();
  const [number, setNumber] = useState(0);

  function handleDisplayTimeLeft() {
    if (schedules.length !== 0) {
      alert(
        "Só é possível modificar o tempo de consulta se não tiver nenhum horário criado!"
      );
      return;
    }
    if (displayTime === "01:00") {
      setDisplayTime("00:30");
    } else if (displayTime === "01:30") {
      setDisplayTime("01:00");
    } else if (displayTime === "00:30") {
      return;
    }
  }

  function handleDisplayTimeRight() {
    if (schedules.length !== 0) {
      alert(
        "Só é possível modificar o tempo de sessão se não tiver nenhum horário criado e agendado!"
      );
      return;
    }
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

  newDate.setDate(date.getDate() + number);

  const today = new Date();
  const Day = String(today.getDate()).padStart(2, "0");
  const Year = today.getFullYear();
  const Month = String(today.getMonth() + 1).padStart(2, "0");
  const dateString = `${Year}-${Month}-${Day}`;

  const Hours = String(today.getHours()).padStart(2, "0");
  const Minutes = String(today.getMinutes()).padStart(2, "0");
  const hoursString = `${Hours}${Minutes}`;

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
      const numberWeek = `${year}-${month}-${day}`;
      numbersWeek.push(numberWeek);
    }
    return numbersWeek;
  }

  const weekDays = getWeeks();
  const numberDays = getNumber();

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
    if (
      moment(modalDate).isBefore(dateString) ||
      (Number(String(modalTime).replace(":", "") < Number(hoursString)) &&
        moment(modalDate).isSame(dateString))
    ) {
      alert(
        "Não é possível criar um horário em um dia anterior a data atual ou em um horário que já passou na data atual!"
      );
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
      setLoadingState(true);
      const response = await api.get(
        `/schedulesProfessionals/${professional.id}`
      );
      setSchedules(response.data.schedules);
      let Schedules = [];
      for (var i = 0; i < response.data.schedules.length; i++) {
        let obj = response.data.schedules[i]["date"];
        let obj2 = response.data.schedules[i]["time"];
        let obj3 = response.data.schedules[i]["availability"];
        let obj4 = response.data.schedules[i]["duration"];
        Schedules.push(obj + obj2 + obj3);
        setDisplayTime(obj4);
      }
      setSchedulesTwo(Schedules);
      setLoadingState(false);
    }
    handleSchedules();
  }, []);

  async function handleClickTwoClose() {
    setClickThree(false);
    if (clickTwo === false) {
      setClickTwo(true);
    } else {
      setClickTwo(false);
    }
  }

  async function handleClickTwo(date, time) {
    setLoadingState(true);
    const response = await api.get(
      `/schedulesProfessionals/?date=${date}&time=${time}`
    );
    setScheduleOccupied(response.data.schedules);
    setLoadingState(false);
    if (clickTwo === false) {
      setClickTwo(true);
      setModalDate(date);
      setModalTime(time);
    } else {
      setClickTwo(false);
    }
  }

  const handleOutsideClickTwo = (e) => {
    if (e.target.id === "modalTwo") {
      handleClickTwoClose();
    }
  };

  async function handleDeleteSchedule(date, time) {
    if (confirm("Tem certeza que deseja deletar o horário?")) {
      await api.delete(`/schedulesProfessionals/?date=${date}&time=${time}`);
      window.location.reload();
    }
  }

  function handleClickThree() {
    if (moment(modalDate).isBefore(dateString)) {
      alert(
        "Não é possível desmarcar uma consulta numa data anterior a data atual!"
      );
      return;
    }
    if (clickThree === false) {
      setClickThree(true);
    } else {
      setClickThree(false);
    }
  }

  async function handleConfirmCancel(id) {
    const status = "desmarcado por professional!";
    await api.put(
      `/schedulesCancel/${id}/?status=${status}&justification=${justification}`
    );
    alert("Consulta desmarcada!");
    setClickThree(false);
    window.location.reload();
  }

  async function confirmPositive(id) {
    const availability = "ocupado";
    const status = "consulta realizada";
    await api.put(`/schedules/${status}?availability=${availability}&id=${id}`);
    alert("Status da consulta atualizada com sucesso");
    window.location.reload();
  }

  async function confirmNegative(id) {
    const availability = "ocupado";
    const status = "consulta não realizada";
    await api.put(`/schedules/${status}?availability=${availability}&id=${id}`);
    alert("Status da consulta atualizada com sucesso");
    window.location.reload();
  }
  return (
    <Container>
      <Header />
      <main>
        <div className="columnOne">
          <Link to={-1}>
            <ButtonText>
              <TiArrowBack className="svg" />
              retornar
            </ButtonText>
          </Link>
          <h1>
            Observações <GoAlert />
          </h1>
          <p>
            Olá, leia com <strong>atenção!</strong>
          </p>
          <ul>
            <li>
              <FaRegHandPointRight /> Clique nas <strong>setas</strong> no{" "}
              <strong>canto esquerdo superior</strong> da tabela para transitar
              pelas semanas.
            </li>
            <li>
              <FaRegHandPointRight /> Observe a{" "}
              <strong>data e o horário</strong> e clique no horário desejado
              para criá-lo.
            </li>
          </ul>
        </div>
        <ContainerTable>
          <div
            id="modal"
            className={click ? "modal" : "none"}
            onClick={handleOutsideClick}
          >
            <div className="modalContentOne">
              <button className="close" onClick={() => handleClick()}>
                <CgClose />
              </button>
              <p>
                <FaRegHandPointRight /> Tem certeza que deseja criar um horário
                na data {modalDate} às {modalTime}hrs?
              </p>
              <Button onClick={handleCreateSchedule}>
                Confirmar!
                <GiConfirmed />
              </Button>
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
              {!clickThree ? (
                <div className="container">
                  <div className="allDetails">
                    <div className="scheduleDetails">
                      <h2>Detalhes sobre o horário:</h2>
                      <span>
                        <strong>Horário:</strong> {scheduleOccupied[0]["time"]}
                      </span>
                      <span>
                        <strong>Data:</strong> {scheduleOccupied[0]["date"]}
                      </span>
                      <span>
                        <strong>Duração:</strong>{" "}
                        {scheduleOccupied[0]["duration"]}
                      </span>
                      <span>
                        <strong>Disponibilidade:</strong>{" "}
                        {scheduleOccupied[0]["availability"]}
                      </span>
                      <span>
                        <strong>Status:</strong> {scheduleOccupied[0]["status"]}
                      </span>
                      {scheduleOccupied[0]["justification"] ? (
                        <span>
                          <strong>Justificativa:</strong>{" "}
                          {scheduleOccupied[0]["justification"]}
                        </span>
                      ) : null}
                    </div>
                    <div className="Client">
                      <h2>Detalhes sobre o paciente:</h2>
                      <div className="client">
                        <div className="avatar">
                          {scheduleOccupied[0]["avatar"] ? (
                            <img
                              className="avatarClient"
                              src={`${api.defaults.baseURL}/files/${scheduleOccupied[0]["avatar"]}`}
                              alt="imagem do paciente"
                            />
                          ) : (
                            <img
                              src={avatarPlaceholder}
                              alt="avatar do paciente"
                            />
                          )}
                        </div>
                        <div className="detailsClient">
                          <span>
                            <strong>Nome:</strong> {scheduleOccupied[0]["name"]}
                          </span>
                          {scheduleOccupied[0]["queixas"] ? (
                            <span>
                              <strong>Queixas:</strong>{" "}
                              {scheduleOccupied[0]["queixas"]}
                            </span>
                          ) : null}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <p>
                  <h2>Escreva uma justificativa:</h2>
                  <textarea
                    onChange={(e) => setJustification(e.target.value)}
                    cols="50"
                    rows="10"
                    placeholder="Explique os motivos para desmarcar a consulta!"
                  ></textarea>
                </p>
              )}
              <div className="button">
                {!clickThree ? (
                  <Button
                    disabled={
                      scheduleOccupied[0]["justification"] ||
                      moment(modalDate).isBefore(dateString) ||
                      (Number(
                        String(modalTime).replace(":", "") < Number(hoursString)
                      ) &&
                        moment(modalDate).isSame(dateString))
                    }
                    onClick={handleClickThree}
                  >
                    <span>Desmarcar consulta!</span>
                  </Button>
                ) : null}
                {clickThree ? (
                  <Button
                    onClick={() =>
                      handleConfirmCancel(scheduleOccupied[0]["id"])
                    }
                  >
                    <span>Confirmar!</span>
                  </Button>
                ) : null}
                {moment(modalDate).isBefore(dateString) ||
                (Number(
                  String(modalTime).replace(":", "") < Number(hoursString)
                ) &&
                  moment(modalDate).isSame(dateString)) ? (
                  <div className="modalConfirm">
                    <span>A consulta aconteceu?</span>{" "}
                    <div className="buttonsModal">
                      <Button
                        onClick={() =>
                          confirmPositive(scheduleOccupied[0]["id"])
                        }
                        disabled={scheduleOccupied[0]["justification"]}
                      >
                        Sim
                      </Button>
                      <Button
                        onClick={() =>
                          confirmNegative(scheduleOccupied[0]["id"])
                        }
                        disabled={scheduleOccupied[0]["justification"]}
                      >
                        Não
                      </Button>
                    </div>
                  </div>
                ) : null}
              </div>
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
                <th></th>
                {weekDays.map((key) => (
                  <th key={String(key)} className="list_item">
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
                    key={String(number)}
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
                    key={String(number)}
                    className={
                      dateString === number ? "list_item_active" : "list_item"
                    }
                  >
                    {" "}
                    {schedulesTwo.includes(number + "12:00disponível") ? (
                      <button
                        className="state"
                        onClick={() => {
                          handleDeleteSchedule(number, "12:00");
                        }}
                      >
                        Horário Criado Disponível (Clique para excluir)
                      </button>
                    ) : null}
                    {schedulesTwo.includes(number + "12:00ocupado") ? (
                      <button
                        className="occupied"
                        onClick={() => handleClickTwo(number, "12:00")}
                      >
                        Horário Ocupado por{" "}
                        <Schedule
                          date={number}
                          time={"12:00"}
                          dateToday={dateString}
                          timeToday={hoursString}
                        />
                        (Clique para ver mais detalhes)
                      </button>
                    ) : null}
                    {!schedulesTwo.includes(number + "12:00disponível") &&
                    !schedulesTwo.includes(number + "12:00ocupado") ? (
                      <button onClick={() => handleClick(number, "12:00")}>
                        Clique para criar um novo horário
                      </button>
                    ) : null}
                  </td>
                ))}
              </tr>
              <tr>
                <td>13:00</td>
                {numberDays.map((number) => (
                  <td
                    key={String(number)}
                    className={
                      dateString === number ? "list_item_active" : "list_item"
                    }
                  >
                    {" "}
                    {schedulesTwo.includes(number + "13:00disponível") ? (
                      <button
                        className="state"
                        onClick={() => {
                          handleDeleteSchedule(number, "13:00");
                        }}
                      >
                        Horário Criado Disponível (Clique para excluir)
                      </button>
                    ) : null}
                    {schedulesTwo.includes(number + "13:00ocupado") ? (
                      <button
                        className="occupied"
                        onClick={() => handleClickTwo(number, "13:00")}
                      >
                        Horário Ocupado por{" "}
                        <Schedule
                          date={number}
                          time={"13:00"}
                          dateToday={dateString}
                          timeToday={hoursString}
                        />{" "}
                        (Clique para ver mais detalhes)
                      </button>
                    ) : null}
                    {!schedulesTwo.includes(number + "13:00disponível") &&
                    !schedulesTwo.includes(number + "13:00ocupado") ? (
                      <button onClick={() => handleClick(number, "13:00")}>
                        Clique para criar um novo horário
                      </button>
                    ) : null}
                  </td>
                ))}
              </tr>
              <tr>
                <td>14:00</td>
                {numberDays.map((number) => (
                  <td
                    key={String(number)}
                    className={
                      dateString === number ? "list_item_active" : "list_item"
                    }
                  >
                    {" "}
                    {schedulesTwo.includes(number + "14:00disponível") ? (
                      <button
                        className="state"
                        onClick={() => {
                          handleDeleteSchedule(number, "14:00");
                        }}
                      >
                        Horário Criado Disponível (Clique para excluir)
                      </button>
                    ) : null}
                    {schedulesTwo.includes(number + "14:00ocupado") ? (
                      <button
                        className="occupied"
                        onClick={() => handleClickTwo(number, "14:00")}
                      >
                        Horário Ocupado por{" "}
                        <Schedule
                          date={number}
                          time={"14:00"}
                          dateToday={dateString}
                          timeToday={hoursString}
                        />
                        (Clique para ver mais detalhes)
                      </button>
                    ) : null}
                    {!schedulesTwo.includes(number + "14:00disponível") &&
                    !schedulesTwo.includes(number + "14:00ocupado") ? (
                      <button onClick={() => handleClick(number, "14:00")}>
                        Clique para criar um novo horário
                      </button>
                    ) : null}
                  </td>
                ))}
              </tr>
              <tr>
                <td>15:00</td>
                {numberDays.map((number) => (
                  <td
                    key={String(number)}
                    className={
                      dateString === number ? "list_item_active" : "list_item"
                    }
                  >
                    {" "}
                    {schedulesTwo.includes(number + "15:00disponível") ? (
                      <button
                        className="state"
                        onClick={() => {
                          handleDeleteSchedule(number, "15:00");
                        }}
                      >
                        Horário Criado Disponível (Clique para excluir)
                      </button>
                    ) : null}
                    {schedulesTwo.includes(number + "15:00ocupado") ? (
                      <button
                        className="occupied"
                        onClick={() => handleClickTwo(number, "15:00")}
                      >
                        Horário Ocupado por{" "}
                        <Schedule
                          date={number}
                          time={"15:00"}
                          dateToday={dateString}
                          timeToday={hoursString}
                        />
                        (Clique para ver mais detalhes)
                      </button>
                    ) : null}
                    {!schedulesTwo.includes(number + "15:00disponível") &&
                    !schedulesTwo.includes(number + "15:00ocupado") ? (
                      <button onClick={() => handleClick(number, "15:00")}>
                        Clique para criar um novo horário
                      </button>
                    ) : null}
                  </td>
                ))}
              </tr>
              <tr>
                <td>16:00</td>
                {numberDays.map((number) => (
                  <td
                    key={String(number)}
                    className={
                      dateString === number ? "list_item_active" : "list_item"
                    }
                  >
                    {" "}
                    {schedulesTwo.includes(number + "16:00disponível") ? (
                      <button
                        className="state"
                        onClick={() => {
                          handleDeleteSchedule(number, "16:00");
                        }}
                      >
                        Horário Criado Disponível (Clique para excluir)
                      </button>
                    ) : null}
                    {schedulesTwo.includes(number + "16:00ocupado") ? (
                      <button
                        className="occupied"
                        onClick={() => handleClickTwo(number, "16:00")}
                      >
                        Horário Ocupado por{" "}
                        <Schedule
                          date={number}
                          time={"16:00"}
                          dateToday={dateString}
                          timeToday={hoursString}
                        />
                        (Clique para ver mais detalhes)
                      </button>
                    ) : null}
                    {!schedulesTwo.includes(number + "16:00disponível") &&
                    !schedulesTwo.includes(number + "16:00ocupado") ? (
                      <button onClick={() => handleClick(number, "16:00")}>
                        Clique para criar um novo horário
                      </button>
                    ) : null}
                  </td>
                ))}
              </tr>
              <tr>
                <td>17:00</td>
                {numberDays.map((number) => (
                  <td
                    key={String(number)}
                    className={
                      dateString === number ? "list_item_active" : "list_item"
                    }
                  >
                    {" "}
                    {schedulesTwo.includes(number + "17:00disponível") ? (
                      <button
                        className="state"
                        onClick={() => {
                          handleDeleteSchedule(number, "17:00");
                        }}
                      >
                        Horário Criado Disponível (Clique para excluir)
                      </button>
                    ) : null}
                    {schedulesTwo.includes(number + "17:00ocupado") ? (
                      <button
                        className="occupied"
                        onClick={() => handleClickTwo(number, "17:00")}
                      >
                        Horário Ocupado por{" "}
                        <Schedule
                          date={number}
                          time={"17:00"}
                          dateToday={dateString}
                          timeToday={hoursString}
                        />
                        (Clique para ver mais detalhes)
                      </button>
                    ) : null}
                    {!schedulesTwo.includes(number + "17:00disponível") &&
                    !schedulesTwo.includes(number + "17:00ocupado") ? (
                      <button onClick={() => handleClick(number, "17:00")}>
                        Clique para criar um novo horário
                      </button>
                    ) : null}
                  </td>
                ))}
              </tr>
              <tr>
                <td>18:00</td>
                {numberDays.map((number) => (
                  <td
                    key={String(number)}
                    className={
                      dateString === number ? "list_item_active" : "list_item"
                    }
                  >
                    {" "}
                    {schedulesTwo.includes(number + "18:00disponível") ? (
                      <button
                        className="state"
                        onClick={() => {
                          handleDeleteSchedule(number, "18:00");
                        }}
                      >
                        Horário Criado Disponível (Clique para excluir)
                      </button>
                    ) : null}
                    {schedulesTwo.includes(number + "18:00ocupado") ? (
                      <button
                        className="occupied"
                        onClick={() => handleClickTwo(number, "18:00")}
                      >
                        Horário Ocupado por{" "}
                        <Schedule
                          date={number}
                          time={"18:00"}
                          dateToday={dateString}
                          timeToday={hoursString}
                        />
                        (Clique para ver mais detalhes)
                      </button>
                    ) : null}
                    {!schedulesTwo.includes(number + "18:00disponível") &&
                    !schedulesTwo.includes(number + "18:00ocupado") ? (
                      <button onClick={() => handleClick(number, "18:00")}>
                        Clique para criar um novo horário
                      </button>
                    ) : null}
                  </td>
                ))}
              </tr>
              <tr>
                <td>19:00</td>
                {numberDays.map((number) => (
                  <td
                    key={String(number)}
                    className={
                      dateString === number ? "list_item_active" : "list_item"
                    }
                  >
                    {" "}
                    {schedulesTwo.includes(number + "19:00disponível") ? (
                      <button
                        className="state"
                        onClick={() => {
                          handleDeleteSchedule(number, "19:00");
                        }}
                      >
                        Horário Criado Disponível (Clique para excluir)
                      </button>
                    ) : null}
                    {schedulesTwo.includes(number + "19:00ocupado") ? (
                      <button
                        className="occupied"
                        onClick={() => handleClickTwo(number, "19:00")}
                      >
                        Horário Ocupado por{" "}
                        <Schedule
                          date={number}
                          time={"19:00"}
                          dateToday={dateString}
                          timeToday={hoursString}
                        />
                        (Clique para ver mais detalhes)
                      </button>
                    ) : null}
                    {!schedulesTwo.includes(number + "19:00disponível") &&
                    !schedulesTwo.includes(number + "19:00ocupado") ? (
                      <button onClick={() => handleClick(number, "19:00")}>
                        Clique para criar um novo horário
                      </button>
                    ) : null}
                  </td>
                ))}
              </tr>
              <tr>
                <td>20:00</td>
                {numberDays.map((number) => (
                  <td
                    key={String(number)}
                    className={
                      dateString === number ? "list_item_active" : "list_item"
                    }
                  >
                    {" "}
                    {schedulesTwo.includes(number + "20:00disponível") ? (
                      <button
                        className="state"
                        onClick={() => {
                          handleDeleteSchedule(number, "20:00");
                        }}
                      >
                        Horário Criado Disponível (Clique para excluir)
                      </button>
                    ) : null}
                    {schedulesTwo.includes(number + "20:00ocupado") ? (
                      <button
                        className="occupied"
                        onClick={() => handleClickTwo(number, "20:00")}
                      >
                        Horário Ocupado por{" "}
                        <Schedule
                          date={number}
                          time={"20:00"}
                          dateToday={dateString}
                          timeToday={hoursString}
                        />
                        (Clique para ver mais detalhes)
                      </button>
                    ) : null}
                    {!schedulesTwo.includes(number + "20:00disponível") &&
                    !schedulesTwo.includes(number + "20:00ocupado") ? (
                      <button onClick={() => handleClick(number, "20:00")}>
                        Clique para criar um novo horário
                      </button>
                    ) : null}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
          <table className={displayTime === "01:30" ? "table" : "none"}>
            <thead>
              <tr>
                <th></th>
                {weekDays.map((key) => (
                  <th key={String(key)} className="list_item">
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
                    key={String(number)}
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
                    key={String(number)}
                    className={
                      dateString === number ? "list_item_active" : "list_item"
                    }
                  >
                    {" "}
                    {schedulesTwo.includes(number + "12:00disponível") ? (
                      <button
                        className="state"
                        onClick={() => {
                          handleDeleteSchedule(number, "12:00");
                        }}
                      >
                        Horário Criado Disponível (Clique para excluir)
                      </button>
                    ) : null}
                    {schedulesTwo.includes(number + "12:00ocupado") ? (
                      <button
                        className="occupied"
                        onClick={() => handleClickTwo(number, "12:00")}
                      >
                        Horário Ocupado por{" "}
                        <Schedule
                          date={number}
                          time={"12:00"}
                          dateToday={dateString}
                          timeToday={hoursString}
                        />
                        (Clique para ver mais detalhes)
                      </button>
                    ) : null}
                    {!schedulesTwo.includes(number + "12:00disponível") &&
                    !schedulesTwo.includes(number + "12:00ocupado") ? (
                      <button onClick={() => handleClick(number, "12:00")}>
                        Clique para criar um novo horário
                      </button>
                    ) : null}
                  </td>
                ))}
              </tr>
              <tr>
                <td>13:30</td>
                {numberDays.map((number) => (
                  <td
                    key={String(number)}
                    className={
                      dateString === number ? "list_item_active" : "list_item"
                    }
                  >
                    {" "}
                    {schedulesTwo.includes(number + "13:30disponível") ? (
                      <button
                        className="state"
                        onClick={() => {
                          handleDeleteSchedule(number, "13:30");
                        }}
                      >
                        Horário Criado Disponível (Clique para excluir)
                      </button>
                    ) : null}
                    {schedulesTwo.includes(number + "13:30ocupado") ? (
                      <button
                        className="occupied"
                        onClick={() => handleClickTwo(number, "13:30")}
                      >
                        Horário Ocupado por{" "}
                        <Schedule
                          date={number}
                          time={"13:30"}
                          dateToday={dateString}
                          timeToday={hoursString}
                        />
                        (Clique para ver mais detalhes)
                      </button>
                    ) : null}
                    {!schedulesTwo.includes(number + "13:30disponível") &&
                    !schedulesTwo.includes(number + "13:30ocupado") ? (
                      <button onClick={() => handleClick(number, "13:30")}>
                        Clique para criar um novo horário
                      </button>
                    ) : null}
                  </td>
                ))}
              </tr>
              <tr>
                <td>15:00</td>
                {numberDays.map((number) => (
                  <td
                    key={String(number)}
                    className={
                      dateString === number ? "list_item_active" : "list_item"
                    }
                  >
                    {" "}
                    {schedulesTwo.includes(number + "15:00disponível") ? (
                      <button
                        className="state"
                        onClick={() => {
                          handleDeleteSchedule(number, "15:00");
                        }}
                      >
                        Horário Criado Disponível (Clique para excluir)
                      </button>
                    ) : null}
                    {schedulesTwo.includes(number + "15:00ocupado") ? (
                      <button
                        className="occupied"
                        onClick={() => handleClickTwo(number, "15:00")}
                      >
                        Horário Ocupado por{" "}
                        <Schedule
                          date={number}
                          time={"15:00"}
                          dateToday={dateString}
                          timeToday={hoursString}
                        />
                        (Clique para ver mais detalhes)
                      </button>
                    ) : null}
                    {!schedulesTwo.includes(number + "15:00disponível") &&
                    !schedulesTwo.includes(number + "15:00ocupado") ? (
                      <button onClick={() => handleClick(number, "15:00")}>
                        Clique para criar um novo horário
                      </button>
                    ) : null}
                  </td>
                ))}
              </tr>
              <tr>
                <td>16:30</td>
                {numberDays.map((number) => (
                  <td
                    key={String(number)}
                    className={
                      dateString === number ? "list_item_active" : "list_item"
                    }
                  >
                    {" "}
                    {schedulesTwo.includes(number + "16:30disponível") ? (
                      <button
                        className="state"
                        onClick={() => {
                          handleDeleteSchedule(number, "16:30");
                        }}
                      >
                        Horário Criado Disponível (Clique para excluir)
                      </button>
                    ) : null}
                    {schedulesTwo.includes(number + "16:30ocupado") ? (
                      <button
                        className="occupied"
                        onClick={() => handleClickTwo(number, "16:30")}
                      >
                        Horário Ocupado por{" "}
                        <Schedule
                          date={number}
                          time={"16:30"}
                          dateToday={dateString}
                          timeToday={hoursString}
                        />
                        (Clique para ver mais detalhes)
                      </button>
                    ) : null}
                    {!schedulesTwo.includes(number + "16:30disponível") &&
                    !schedulesTwo.includes(number + "16:30ocupado") ? (
                      <button onClick={() => handleClick(number, "16:30")}>
                        Clique para criar um novo horário
                      </button>
                    ) : null}
                  </td>
                ))}
              </tr>
              <tr>
                <td>18:00</td>
                {numberDays.map((number) => (
                  <td
                    key={String(number)}
                    className={
                      dateString === number ? "list_item_active" : "list_item"
                    }
                  >
                    {" "}
                    {schedulesTwo.includes(number + "18:00disponível") ? (
                      <button
                        className="state"
                        onClick={() => {
                          handleDeleteSchedule(number, "18:00");
                        }}
                      >
                        Horário Criado Disponível (Clique para excluir)
                      </button>
                    ) : null}
                    {schedulesTwo.includes(number + "18:00ocupado") ? (
                      <button
                        className="occupied"
                        onClick={() => handleClickTwo(number, "18:00")}
                      >
                        Horário Ocupado por{" "}
                        <Schedule
                          date={number}
                          time={"18:00"}
                          dateToday={dateString}
                          timeToday={hoursString}
                        />
                        (Clique para ver mais detalhes)
                      </button>
                    ) : null}
                    {!schedulesTwo.includes(number + "18:00disponível") &&
                    !schedulesTwo.includes(number + "18:00ocupado") ? (
                      <button onClick={() => handleClick(number, "18:00")}>
                        Clique para criar um novo horário
                      </button>
                    ) : null}
                  </td>
                ))}
              </tr>
              <tr>
                <td>19:30</td>
                {numberDays.map((number) => (
                  <td
                    key={String(number)}
                    className={
                      dateString === number ? "list_item_active" : "list_item"
                    }
                  >
                    {" "}
                    {schedulesTwo.includes(number + "19:30disponível") ? (
                      <button
                        className="state"
                        onClick={() => {
                          handleDeleteSchedule(number, "19:30");
                        }}
                      >
                        Horário Criado Disponível (Clique para excluir)
                      </button>
                    ) : null}
                    {schedulesTwo.includes(number + "19:30ocupado") ? (
                      <button
                        className="occupied"
                        onClick={() => handleClickTwo(number, "19:30")}
                      >
                        Horário Ocupado por{" "}
                        <Schedule
                          date={number}
                          time={"19:30"}
                          dateToday={dateString}
                          timeToday={hoursString}
                        />
                        (Clique para ver mais detalhes)
                      </button>
                    ) : null}
                    {!schedulesTwo.includes(number + "19:30disponível") &&
                    !schedulesTwo.includes(number + "19:30ocupado") ? (
                      <button onClick={() => handleClick(number, "19:30")}>
                        Clique para criar um novo horário
                      </button>
                    ) : null}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
          <table className={displayTime === "00:30" ? "table" : "none"}>
            <thead>
              <tr>
                <th></th>
                {weekDays.map((key) => (
                  <th key={String(key)} className="list_item">
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
                    key={String(number)}
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
                    key={String(number)}
                    className={
                      dateString === number ? "list_item_active" : "list_item"
                    }
                  >
                    {" "}
                    {schedulesTwo.includes(number + "12:00disponível") ? (
                      <button
                        className="state"
                        onClick={() => {
                          handleDeleteSchedule(number, "12:00");
                        }}
                      >
                        Horário Criado Disponível (Clique para excluir)
                      </button>
                    ) : null}
                    {schedulesTwo.includes(number + "12:00ocupado") ? (
                      <button
                        className="occupied"
                        onClick={() => handleClickTwo(number, "12:00")}
                      >
                        Horário Ocupado por{" "}
                        <Schedule
                          date={number}
                          time={"12:00"}
                          dateToday={dateString}
                          timeToday={hoursString}
                        />
                        (Clique para ver mais detalhes)
                      </button>
                    ) : null}
                    {!schedulesTwo.includes(number + "12:00disponível") &&
                    !schedulesTwo.includes(number + "12:00ocupado") ? (
                      <button onClick={() => handleClick(number, "12:00")}>
                        Clique para criar um novo horário
                      </button>
                    ) : null}
                  </td>
                ))}
              </tr>
              <tr>
                <td>12:30</td>
                {numberDays.map((number) => (
                  <td
                    key={String(number)}
                    className={
                      dateString === number ? "list_item_active" : "list_item"
                    }
                  >
                    {" "}
                    {schedulesTwo.includes(number + "12:30disponível") ? (
                      <button
                        className="state"
                        onClick={() => {
                          handleDeleteSchedule(number, "12:30");
                        }}
                      >
                        Horário Criado Disponível (Clique para excluir)
                      </button>
                    ) : null}
                    {schedulesTwo.includes(number + "12:30ocupado") ? (
                      <button
                        className="occupied"
                        onClick={() => handleClickTwo(number, "12:30")}
                      >
                        Horário Ocupado por{" "}
                        <Schedule
                          date={number}
                          time={"12:30"}
                          dateToday={dateString}
                          timeToday={hoursString}
                        />
                        (Clique para ver mais detalhes)
                      </button>
                    ) : null}
                    {!schedulesTwo.includes(number + "12:30disponível") &&
                    !schedulesTwo.includes(number + "12:30ocupado") ? (
                      <button onClick={() => handleClick(number, "12:30")}>
                        Clique para criar um novo horário
                      </button>
                    ) : null}
                  </td>
                ))}
              </tr>
              <tr>
                <td>13:00</td>
                {numberDays.map((number) => (
                  <td
                    key={String(number)}
                    className={
                      dateString === number ? "list_item_active" : "list_item"
                    }
                  >
                    {" "}
                    {schedulesTwo.includes(number + "13:00disponível") ? (
                      <button
                        className="state"
                        onClick={() => {
                          handleDeleteSchedule(number, "13:00");
                        }}
                      >
                        Horário Criado Disponível (Clique para excluir)
                      </button>
                    ) : null}
                    {schedulesTwo.includes(number + "13:00ocupado") ? (
                      <button
                        className="occupied"
                        onClick={() => handleClickTwo(number, "13:00")}
                      >
                        Horário Ocupado por{" "}
                        <Schedule
                          date={number}
                          time={"13:00"}
                          dateToday={dateString}
                          timeToday={hoursString}
                        />
                        (Clique para ver mais detalhes)
                      </button>
                    ) : null}
                    {!schedulesTwo.includes(number + "13:00disponível") &&
                    !schedulesTwo.includes(number + "13:00ocupado") ? (
                      <button onClick={() => handleClick(number, "13:00")}>
                        Clique para criar um novo horário
                      </button>
                    ) : null}
                  </td>
                ))}
              </tr>
              <tr>
                <td>13:30</td>
                {numberDays.map((number) => (
                  <td
                    key={String(number)}
                    className={
                      dateString === number ? "list_item_active" : "list_item"
                    }
                  >
                    {" "}
                    {schedulesTwo.includes(number + "13:30disponível") ? (
                      <button
                        className="state"
                        onClick={() => {
                          handleDeleteSchedule(number, "13:30");
                        }}
                      >
                        Horário Criado Disponível (Clique para excluir)
                      </button>
                    ) : null}
                    {schedulesTwo.includes(number + "13:30ocupado") ? (
                      <button
                        className="occupied"
                        onClick={() => handleClickTwo(number, "13:30")}
                      >
                        Horário Ocupado por{" "}
                        <Schedule
                          date={number}
                          time={"13:30"}
                          dateToday={dateString}
                          timeToday={hoursString}
                        />
                        (Clique para ver mais detalhes)
                      </button>
                    ) : null}
                    {!schedulesTwo.includes(number + "13:30disponível") &&
                    !schedulesTwo.includes(number + "13:30ocupado") ? (
                      <button onClick={() => handleClick(number, "13:30")}>
                        Clique para criar um novo horário
                      </button>
                    ) : null}
                  </td>
                ))}
              </tr>
              <tr>
                <td>14:00</td>
                {numberDays.map((number) => (
                  <td
                    key={String(number)}
                    className={
                      dateString === number ? "list_item_active" : "list_item"
                    }
                  >
                    {" "}
                    {schedulesTwo.includes(number + "14:00disponível") ? (
                      <button
                        className="state"
                        onClick={() => {
                          handleDeleteSchedule(number, "14:00");
                        }}
                      >
                        Horário Criado Disponível (Clique para excluir)
                      </button>
                    ) : null}
                    {schedulesTwo.includes(number + "14:00ocupado") ? (
                      <button
                        className="occupied"
                        onClick={() => handleClickTwo(number, "14:00")}
                      >
                        Horário Ocupado por{" "}
                        <Schedule
                          date={number}
                          time={"14:00"}
                          dateToday={dateString}
                          timeToday={hoursString}
                        />
                        (Clique para ver mais detalhes)
                      </button>
                    ) : null}
                    {!schedulesTwo.includes(number + "14:00disponível") &&
                    !schedulesTwo.includes(number + "14:00ocupado") ? (
                      <button onClick={() => handleClick(number, "14:00")}>
                        Clique para criar um novo horário
                      </button>
                    ) : null}
                  </td>
                ))}
              </tr>
              <tr>
                <td>14:30</td>
                {numberDays.map((number) => (
                  <td
                    key={String(number)}
                    className={
                      dateString === number ? "list_item_active" : "list_item"
                    }
                  >
                    {" "}
                    {schedulesTwo.includes(number + "14:30disponível") ? (
                      <button
                        className="state"
                        onClick={() => {
                          handleDeleteSchedule(number, "14:30");
                        }}
                      >
                        Horário Criado Disponível (Clique para excluir)
                      </button>
                    ) : null}
                    {schedulesTwo.includes(number + "14:30ocupado") ? (
                      <button
                        className="occupied"
                        onClick={() => handleClickTwo(number, "14:30")}
                      >
                        Horário Ocupado por{" "}
                        <Schedule
                          date={number}
                          time={"14:30"}
                          dateToday={dateString}
                          timeToday={hoursString}
                        />
                        (Clique para ver mais detalhes)
                      </button>
                    ) : null}
                    {!schedulesTwo.includes(number + "14:30disponível") &&
                    !schedulesTwo.includes(number + "14:30ocupado") ? (
                      <button onClick={() => handleClick(number, "14:30")}>
                        Clique para criar um novo horário
                      </button>
                    ) : null}
                  </td>
                ))}
              </tr>
              <tr>
                <td>15:00</td>
                {numberDays.map((number) => (
                  <td
                    key={String(number)}
                    className={
                      dateString === number ? "list_item_active" : "list_item"
                    }
                  >
                    {" "}
                    {schedulesTwo.includes(number + "15:00disponível") ? (
                      <button
                        className="state"
                        onClick={() => {
                          handleDeleteSchedule(number, "15:00");
                        }}
                      >
                        Horário Criado Disponível (Clique para excluir)
                      </button>
                    ) : null}
                    {schedulesTwo.includes(number + "15:00ocupado") ? (
                      <button
                        className="occupied"
                        onClick={() => handleClickTwo(number, "15:00")}
                      >
                        Horário Ocupado por{" "}
                        <Schedule
                          date={number}
                          time={"15:00"}
                          dateToday={dateString}
                          timeToday={hoursString}
                        />
                        (Clique para ver mais detalhes)
                      </button>
                    ) : null}
                    {!schedulesTwo.includes(number + "15:00disponível") &&
                    !schedulesTwo.includes(number + "15:00ocupado") ? (
                      <button onClick={() => handleClick(number, "15:00")}>
                        Clique para criar um novo horário
                      </button>
                    ) : null}
                  </td>
                ))}
              </tr>
              <tr>
                <td>15:30</td>
                {numberDays.map((number) => (
                  <td
                    key={String(number)}
                    className={
                      dateString === number ? "list_item_active" : "list_item"
                    }
                  >
                    {" "}
                    {schedulesTwo.includes(number + "15:30disponível") ? (
                      <button
                        className="state"
                        onClick={() => {
                          handleDeleteSchedule(number, "15:30");
                        }}
                      >
                        Horário Criado Disponível (Clique para excluir)
                      </button>
                    ) : null}
                    {schedulesTwo.includes(number + "15:30ocupado") ? (
                      <button
                        className="occupied"
                        onClick={() => handleClickTwo(number, "15:30")}
                      >
                        Horário Ocupado por{" "}
                        <Schedule
                          date={number}
                          time={"15:30"}
                          dateToday={dateString}
                          timeToday={hoursString}
                        />
                        (Clique para ver mais detalhes)
                      </button>
                    ) : null}
                    {!schedulesTwo.includes(number + "15:30disponível") &&
                    !schedulesTwo.includes(number + "15:30ocupado") ? (
                      <button onClick={() => handleClick(number, "15:30")}>
                        Clique para criar um novo horário
                      </button>
                    ) : null}
                  </td>
                ))}
              </tr>
              <tr>
                <td>16:00</td>
                {numberDays.map((number) => (
                  <td
                    key={String(number)}
                    className={
                      dateString === number ? "list_item_active" : "list_item"
                    }
                  >
                    {" "}
                    {schedulesTwo.includes(number + "16:00disponível") ? (
                      <button
                        className="state"
                        onClick={() => {
                          handleDeleteSchedule(number, "16:00");
                        }}
                      >
                        Horário Criado Disponível (Clique para excluir)
                      </button>
                    ) : null}
                    {schedulesTwo.includes(number + "16:00ocupado") ? (
                      <button
                        className="occupied"
                        onClick={() => handleClickTwo(number, "16:00")}
                      >
                        Horário Ocupado por{" "}
                        <Schedule
                          date={number}
                          time={"16:00"}
                          dateToday={dateString}
                          timeToday={hoursString}
                        />
                        (Clique para ver mais detalhes)
                      </button>
                    ) : null}
                    {!schedulesTwo.includes(number + "16:00disponível") &&
                    !schedulesTwo.includes(number + "16:00ocupado") ? (
                      <button onClick={() => handleClick(number, "16:00")}>
                        Clique para criar um novo horário
                      </button>
                    ) : null}
                  </td>
                ))}
              </tr>
              <tr>
                <td>16:30</td>
                {numberDays.map((number) => (
                  <td
                    key={String(number)}
                    className={
                      dateString === number ? "list_item_active" : "list_item"
                    }
                  >
                    {" "}
                    {schedulesTwo.includes(number + "16:30disponível") ? (
                      <button
                        className="state"
                        onClick={() => {
                          handleDeleteSchedule(number, "16:30");
                        }}
                      >
                        Horário Criado Disponível (Clique para excluir)
                      </button>
                    ) : null}
                    {schedulesTwo.includes(number + "16:30ocupado") ? (
                      <button
                        className="occupied"
                        onClick={() => handleClickTwo(number, "16:30")}
                      >
                        Horário Ocupado por{" "}
                        <Schedule
                          date={number}
                          time={"16:30"}
                          dateToday={dateString}
                          timeToday={hoursString}
                        />
                        (Clique para ver mais detalhes)
                      </button>
                    ) : null}
                    {!schedulesTwo.includes(number + "16:30disponível") &&
                    !schedulesTwo.includes(number + "16:30ocupado") ? (
                      <button onClick={() => handleClick(number, "16:30")}>
                        Clique para criar um novo horário
                      </button>
                    ) : null}
                  </td>
                ))}
              </tr>
              <tr>
                <td>17:00</td>
                {numberDays.map((number) => (
                  <td
                    key={String(number)}
                    className={
                      dateString === number ? "list_item_active" : "list_item"
                    }
                  >
                    {" "}
                    {schedulesTwo.includes(number + "17:00disponível") ? (
                      <button
                        className="state"
                        onClick={() => {
                          handleDeleteSchedule(number, "17:00");
                        }}
                      >
                        Horário Criado Disponível (Clique para excluir)
                      </button>
                    ) : null}
                    {schedulesTwo.includes(number + "17:00ocupado") ? (
                      <button
                        className="occupied"
                        onClick={() => handleClickTwo(number, "17:00")}
                      >
                        Horário Ocupado por{" "}
                        <Schedule
                          date={number}
                          time={"17:00"}
                          dateToday={dateString}
                          timeToday={hoursString}
                        />
                        (Clique para ver mais detalhes)
                      </button>
                    ) : null}
                    {!schedulesTwo.includes(number + "17:00disponível") &&
                    !schedulesTwo.includes(number + "17:00ocupado") ? (
                      <button onClick={() => handleClick(number, "17:00")}>
                        Clique para criar um novo horário
                      </button>
                    ) : null}
                  </td>
                ))}
              </tr>
              <tr>
                <td>17:30</td>
                {numberDays.map((number) => (
                  <td
                    key={String(number)}
                    className={
                      dateString === number ? "list_item_active" : "list_item"
                    }
                  >
                    {" "}
                    {schedulesTwo.includes(number + "17:30disponível") ? (
                      <button
                        className="state"
                        onClick={() => {
                          handleDeleteSchedule(number, "17:30");
                        }}
                      >
                        Horário Criado Disponível (Clique para excluir)
                      </button>
                    ) : null}
                    {schedulesTwo.includes(number + "17:30ocupado") ? (
                      <button
                        className="occupied"
                        onClick={() => handleClickTwo(number, "17:30")}
                      >
                        Horário Ocupado por{" "}
                        <Schedule
                          date={number}
                          time={"17:30"}
                          dateToday={dateString}
                          timeToday={hoursString}
                        />
                        (Clique para ver mais detalhes)
                      </button>
                    ) : null}
                    {!schedulesTwo.includes(number + "17:30disponível") &&
                    !schedulesTwo.includes(number + "17:30ocupado") ? (
                      <button onClick={() => handleClick(number, "17:30")}>
                        Clique para criar um novo horário
                      </button>
                    ) : null}
                  </td>
                ))}
              </tr>
              <tr>
                <td>18:00</td>
                {numberDays.map((number) => (
                  <td
                    key={String(number)}
                    className={
                      dateString === number ? "list_item_active" : "list_item"
                    }
                  >
                    {" "}
                    {schedulesTwo.includes(number + "18:00disponível") ? (
                      <button
                        className="state"
                        onClick={() => {
                          handleDeleteSchedule(number, "18:00");
                        }}
                      >
                        Horário Criado Disponível (Clique para excluir)
                      </button>
                    ) : null}
                    {schedulesTwo.includes(number + "18:00ocupado") ? (
                      <button
                        className="occupied"
                        onClick={() => handleClickTwo(number, "18:00")}
                      >
                        Horário Ocupado por{" "}
                        <Schedule
                          date={number}
                          time={"18:00"}
                          dateToday={dateString}
                          timeToday={hoursString}
                        />
                        (Clique para ver mais detalhes)
                      </button>
                    ) : null}
                    {!schedulesTwo.includes(number + "18:00disponível") &&
                    !schedulesTwo.includes(number + "18:00ocupado") ? (
                      <button onClick={() => handleClick(number, "18:00")}>
                        Clique para criar um novo horário
                      </button>
                    ) : null}
                  </td>
                ))}
              </tr>
              <tr>
                <td>18:30</td>
                {numberDays.map((number) => (
                  <td
                    key={String(number)}
                    className={
                      dateString === number ? "list_item_active" : "list_item"
                    }
                  >
                    {" "}
                    {schedulesTwo.includes(number + "18:30disponível") ? (
                      <button
                        className="state"
                        onClick={() => {
                          handleDeleteSchedule(number, "18:30");
                        }}
                      >
                        Horário Criado Disponível (Clique para excluir)
                      </button>
                    ) : null}
                    {schedulesTwo.includes(number + "18:30ocupado") ? (
                      <button
                        className="occupied"
                        onClick={() => handleClickTwo(number, "18:30")}
                      >
                        Horário Ocupado por{" "}
                        <Schedule
                          date={number}
                          time={"18:30"}
                          dateToday={dateString}
                          timeToday={hoursString}
                        />
                        (Clique para ver mais detalhes)
                      </button>
                    ) : null}
                    {!schedulesTwo.includes(number + "18:30disponível") &&
                    !schedulesTwo.includes(number + "18:30ocupado") ? (
                      <button onClick={() => handleClick(number, "18:30")}>
                        Clique para criar um novo horário
                      </button>
                    ) : null}
                  </td>
                ))}
              </tr>
              <tr>
                <td>19:00</td>
                {numberDays.map((number) => (
                  <td
                    key={String(number)}
                    className={
                      dateString === number ? "list_item_active" : "list_item"
                    }
                  >
                    {" "}
                    {schedulesTwo.includes(number + "19:00disponível") ? (
                      <button
                        className="state"
                        onClick={() => {
                          handleDeleteSchedule(number, "19:00");
                        }}
                      >
                        Horário Criado Disponível (Clique para excluir)
                      </button>
                    ) : null}
                    {schedulesTwo.includes(number + "19:00ocupado") ? (
                      <button
                        className="occupied"
                        onClick={() => handleClickTwo(number, "19:00")}
                      >
                        Horário Ocupado por{" "}
                        <Schedule
                          date={number}
                          time={"19:00"}
                          dateToday={dateString}
                          timeToday={hoursString}
                        />
                        (Clique para ver mais detalhes)
                      </button>
                    ) : null}
                    {!schedulesTwo.includes(number + "19:00disponível") &&
                    !schedulesTwo.includes(number + "19:00ocupado") ? (
                      <button onClick={() => handleClick(number, "19:00")}>
                        Clique para criar um novo horário
                      </button>
                    ) : null}
                  </td>
                ))}
              </tr>
              <tr>
                <td>19:30</td>
                {numberDays.map((number) => (
                  <td
                    key={String(number)}
                    className={
                      dateString === number ? "list_item_active" : "list_item"
                    }
                  >
                    {" "}
                    {schedulesTwo.includes(number + "19:30disponível") ? (
                      <button
                        className="state"
                        onClick={() => {
                          handleDeleteSchedule(number, "19:30");
                        }}
                      >
                        Horário Criado Disponível (Clique para excluir)
                      </button>
                    ) : null}
                    {schedulesTwo.includes(number + "19:30ocupado") ? (
                      <button
                        className="occupied"
                        onClick={() => handleClickTwo(number, "19:30")}
                      >
                        Horário Ocupado por{" "}
                        <Schedule
                          date={number}
                          time={"19:30"}
                          dateToday={dateString}
                          timeToday={hoursString}
                        />
                        (Clique para ver mais detalhes)
                      </button>
                    ) : null}
                    {!schedulesTwo.includes(number + "19:30disponível") &&
                    !schedulesTwo.includes(number + "19:30ocupado") ? (
                      <button onClick={() => handleClick(number, "19:30")}>
                        Clique para criar um novo horário
                      </button>
                    ) : null}
                  </td>
                ))}
              </tr>
              <tr>
                <td>20:00</td>
                {numberDays.map((number) => (
                  <td
                    key={String(number)}
                    className={
                      dateString === number ? "list_item_active" : "list_item"
                    }
                  >
                    {" "}
                    {schedulesTwo.includes(number + "20:00disponível") ? (
                      <button
                        className="state"
                        onClick={() => {
                          handleDeleteSchedule(number, "20:00");
                        }}
                      >
                        Horário Criado Disponível (Clique para excluir)
                      </button>
                    ) : null}
                    {schedulesTwo.includes(number + "20:00ocupado") ? (
                      <button
                        className="occupied"
                        onClick={() => handleClickTwo(number, "20:00")}
                      >
                        Horário Ocupado por{" "}
                        <Schedule
                          date={number}
                          time={"20:00"}
                          dateToday={dateString}
                          timeToday={hoursString}
                        />
                        (Clique para ver mais detalhes)
                      </button>
                    ) : null}
                    {!schedulesTwo.includes(number + "20:00disponível") &&
                    !schedulesTwo.includes(number + "20:00ocupado") ? (
                      <button onClick={() => handleClick(number, "20:00")}>
                        Clique para criar um novo horário
                      </button>
                    ) : null}
                  </td>
                ))}
              </tr>
              <tr>
                <td>20:30</td>
                {numberDays.map((number) => (
                  <td
                    key={String(number)}
                    className={
                      dateString === number ? "list_item_active" : "list_item"
                    }
                  >
                    {" "}
                    {schedulesTwo.includes(number + "20:30disponível") ? (
                      <button
                        className="state"
                        onClick={() => {
                          handleDeleteSchedule(number, "20:30");
                        }}
                      >
                        Horário Criado Disponível (Clique para excluir)
                      </button>
                    ) : null}
                    {schedulesTwo.includes(number + "20:30ocupado") ? (
                      <button
                        className="occupied"
                        onClick={() => handleClickTwo(number, "20:30")}
                      >
                        Horário Ocupado por{" "}
                        <Schedule
                          date={number}
                          time={"20:30"}
                          dateToday={dateString}
                          timeToday={hoursString}
                        />
                        (Clique para ver mais detalhes)
                      </button>
                    ) : null}
                    {!schedulesTwo.includes(number + "20:30disponível") &&
                    !schedulesTwo.includes(number + "20:30ocupado") ? (
                      <button onClick={() => handleClick(number, "20:30")}>
                        Clique para criar um novo horário
                      </button>
                    ) : null}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </ContainerTable>
      </main>
      {loadingState ? <ShowLoading /> : null}
      <Footer />
    </Container>
  );
}
