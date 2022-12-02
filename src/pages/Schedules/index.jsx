import { Container, Main } from "./styles";
import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import { Calendar } from "../../components/calendar";

export function Schedules() {
  return (
    <Container>
      <Header />
      <Main>
        <Calendar />
      </Main>
      <Footer />
    </Container>
  );
}
