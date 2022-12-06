import { Container, Main } from "./styles";
import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import { Calendar } from "../../components/calendar";
import { GoAlert } from "react-icons/go";
import { FaRegHandPointRight } from "react-icons/fa";
import { ButtonText } from "../../components/buttonText";
import { TiArrowBack } from "react-icons/ti";
import { Link } from "react-router-dom";

export function Schedules() {
  return (
    <Container>
      <Header />
      <Main>
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
              <FaRegHandPointRight /> Clique nas <strong>setas</strong> no <strong>canto esquerdo superior</strong> da tabela para transitar
              pelas semanas.
            </li>
            <li>
              <FaRegHandPointRight /> Observe a <strong>data e o horário</strong> e clique no horário desejado
              para criá-lo.
            </li>
          </ul>
        </div>
        <Calendar />
      </Main>
      <Footer />
    </Container>
  );
}
