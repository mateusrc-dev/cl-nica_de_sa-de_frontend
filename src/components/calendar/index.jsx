import { Container } from "./styles";

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
  var date = new Date();
  var newDate = new Date();

  newDate.setDate(date.getDate());

  const dayWeek = newDate.getDay();
  const day = newDate.getDate();
  const year = newDate.getFullYear();
  const month = newDate.getMonth();
  const nameMonth = monthNames[month];
  const week = weekNames[dayWeek];
  const first = newDate.getDate() - newDate.getDay();
  const dateString = `${day}/${month}/${year}`;

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
      const day = next.getDate();
      const month = next.getMonth();
      const year = next.getFullYear();
      const numberWeek = `${day}/${month}/${year}`;
      numbersWeek.push(numberWeek);
    }
    return numbersWeek;
  }

  const weekDays = getWeeks();
  const numberDays = getNumber();

  function handleClick(dt, tm) {
    console.log(dt, tm);
  }

  return (
    <Container>
      <h1 className="title">{nameMonth}</h1>
      <h2 className="subtitle">{year}</h2>
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
            <td></td>
            {numberDays.map((number) => (
              <td
                className={
                  dateString === number ? "list_item_active" : "list_item"
                }
              >
                <span>{number.padStart(10, "0")}</span>
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
