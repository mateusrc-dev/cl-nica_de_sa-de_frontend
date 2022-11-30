import { Container, Main } from "./styles";
import { GiHealthNormal } from "react-icons/gi";
import { Header } from "../../components/header";
import { Footer } from "../../components/footer";

export function Professionals() {
  return (
    <Container>
      <Header />
      <Main>
        <header>
          <h1>
            <GiHealthNormal /> fullness clinic
          </h1>
          <nav>
            <ul>
              <li>Sobre o nosso espaço</li>
              <div className="row"></div>
              <li>Agendamentos com nossos profissionais</li>
            </ul>
          </nav>
        </header>
        <div className="professions">
          <ul>
            <li>Psicólogos</li>
            <li>Psiquiatras</li>
            <li>Nutricionistas</li>
            <li>Fisioterapeutas</li>
            <li>Odontologia</li>
          </ul>
        </div>
      </Main>
      <Footer />
    </Container>
  );
}
