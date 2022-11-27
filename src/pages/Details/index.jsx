//nessa página vai ficar os detalhes do profissional (horários livres, detalhes sobre ele, depoimentos sobre ele, etc.)
import { Container, Main } from "./styles";
import { Button } from "../../components/button";
import { AiFillSchedule } from "react-icons/ai";
import { Header } from "../../components/header";
import { Footer } from "../../components/footer";

export function Details() {
  return (
    <Container>
      <Header />
      <Main>
        <h1>Olá planeta terra! hehe! :) </h1>
        <span>
          Meu nome é Mateus, eu sou um psicólogo incrível, trato você super bem,
          você vai se sentir no céu ao sair de uma consulta comigo, como se
          nenhum problema existisse.
        </span>
        <br />
        <Button>
          <AiFillSchedule />
          Agende sua consulta!
        </Button>
      </Main>
      <Footer />
    </Container>
  );
}
