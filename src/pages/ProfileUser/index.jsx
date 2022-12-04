//nessa página vai ficar os detalhes do profissional (horários livres, detalhes sobre ele, depoimentos sobre ele, etc.)
import { Container, Main } from "./styles";
import { Header } from "../../components/header";
import { Footer } from "../../components/footer";

export function ProfileUser() {
  return (
    <Container>
      <Header />
      <Main>
       Olá mundo!
      </Main>
      <Footer />
    </Container>
  );
}
