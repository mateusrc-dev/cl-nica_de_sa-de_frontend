import { Container } from "./styles";
import {useState} from "react"
import {api} from "../../services/api"
import moment from "moment"

export function Schedule({ date, time, dateToday, timeToday }) {
  const [scheduleOccupied, setScheduleOccupied] = useState([{}]);

  async function handleSchedules() {
    const response = await api.get(
      `/schedulesProfessionals/?date=${date}&time=${time}`
    );
    setScheduleOccupied(response.data.schedules);
  }

  handleSchedules();

  console.log(Number(timeToday))

  return (
    <Container>
      <span className="nameClient">{scheduleOccupied[0]["name"]}</span>
      {scheduleOccupied[0]["justification"] ? <span className="cancel">Desmarcado!</span> : null}
      {scheduleOccupied[0]["status"] === "consulta realizada" ? <span className="confirm">Consulta realizada!</span> : null}
      {scheduleOccupied[0]["status"] === "consulta não realizada" ? <span className="confirm">Consulta não realizada!</span> : null}
      {(((moment(date).isBefore(dateToday)) || (Number(String(time).replace(":", "")) < Number(timeToday)) && (moment(date).isSame(dateToday))) && ((scheduleOccupied[0]["status"] === "por realizar"))) ? <span className="confirm">Aguardando confirmação...</span>: null}
    </Container>
  );
}
