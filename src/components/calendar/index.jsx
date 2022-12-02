import { Container } from "./styles";
import { useState } from "react";
import { TbArrowBigLeftLines } from "react-icons/tb";
import { TbArrowBigRightLines } from "react-icons/tb";
import { Button } from "../../components/button";
import { CgClose } from "react-icons/cg";
import { GiConfirmed } from "react-icons/gi";
import { FaRegHandPointRight } from "react-icons/fa";

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
  const [modalDate, setModalDate] = useState();
  const [modalTime, setModalTime] = useState();

  const date = new Date();
  var newDate = new Date();
  const [Number, setNumber] = useState(0);

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
            <Button>
              Confirmar!
              <GiConfirmed />
            </Button>
          </p>
        </div>
      </div>
      <h1 className="title">
        {nameMonth} | <span>{year}</span>
      </h1>
      <table>
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
    </Container>
  );
}
