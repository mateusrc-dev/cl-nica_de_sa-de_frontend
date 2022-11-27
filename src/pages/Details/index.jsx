//nessa página vai ficar os detalhes do profissional (horários livres, detalhes sobre ele, depoimentos sobre ele, etc.)
import { Container } from "./styles";

export function Details() {
  return (
    <Container>
      <h1>Olá planeta terra! hehe! :) </h1>
      <span>
        Meu nome é Mateus, eu sou um psicólogo incrível, trato você super bem,
        você vai se sentir no céu ao sair de uma consulta comigo, como se nenhum
        problema existisse.
      </span>
      <br/>
      <button>Agende uma consulta</button>
    </Container>
  );
}