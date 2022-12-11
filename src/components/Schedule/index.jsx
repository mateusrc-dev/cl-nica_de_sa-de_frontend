import { Container } from "./styles";
import {useState} from "react"
import {api} from "../../services/api"

export function Schedule({ date, time }) {
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
      <span>{scheduleOccupied[0]["name"]}</span>
    </Container>
  );
}
