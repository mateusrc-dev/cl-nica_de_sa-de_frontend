import { Container } from "./styles";
import {useState} from "react"
import {api} from "../../services/api"

export function Schedule({ date, time, dateToday }) {
  const [scheduleOccupied, setScheduleOccupied] = useState([{}]);

  async function handleSchedules() {
    const response = await api.get(
      `/schedulesProfessionals/?date=${date}&time=${time}`
    );
    setScheduleOccupied(response.data.schedules);
  }

  handleSchedules();

  return (
    <Container>
      <span className="nameClient">{scheduleOccupied[0]["name"]}</span>
      {scheduleOccupied[0]["justification"] ? <span className="cancel">Desmarcado!</span> : null}
      {scheduleOccupied[0]["status"] === "consulta realizada" ? <span className="confirm">Consulta realizada!</span> : null}
      {scheduleOccupied[0]["status"] === "consulta não realizada" ? <span className="confirm">Consulta não realizada!</span> : null}
      {date < dateToday && scheduleOccupied[0]["status"] === "por realizar" ? <span className="confirm">Aguardando confirmação...</span>: null}
    </Container>
  );
}
