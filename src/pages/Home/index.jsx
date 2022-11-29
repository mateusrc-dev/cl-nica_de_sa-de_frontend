import { Container, Main } from "./styles";
import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import { GiHealthNormal } from "react-icons/gi";
import { Section } from "../../components/section";

export function Home() {
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
        <div className="sections">
          <div className="rowTwo"></div>
          <div className="section">
            <div className="text">
              <h2>Venha visitar o nosso espaço</h2>
              <p>
                Estamos lhe aguardando de <strong>braços abertos</strong>, somos
                a melhor clínica de Teresina <strong>sem dúvidas</strong>, com
                um espaço super <strong>confortável</strong>, você vai chegar
                aqui e se sentir nas nuvens, não vai se arrepender. Estamos lhe
                aguardando de <strong>braços abertos</strong>, somos a melhor
                clínica de Teresina <strong>sem dúvidas</strong>, com um espaço
                super <strong>confortável</strong>, você vai chegar aqui e se
                sentir nas nuvens, não vai se arrepender. Estamos lhe aguardando
                de <strong>braços abertos</strong>, somos a melhor clínica de
                Teresina <strong>sem dúvidas</strong>, com um espaço super{" "}
                <strong>confortável</strong>, você vai chegar aqui e se sentir
                nas nuvens, não vai se arrepender.
              </p>
            </div>
            <div className="grid">
              <div className="imgOne">
                <img
                  src="https://images.unsplash.com/photo-1631195030331-a2c5f50323fe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
                  alt="imagem do consultório"
                />
                <span>Conforto</span>
              </div>
              <div className="imgTwo">
                <img
                  src="https://images.unsplash.com/photo-1631248055158-edec7a3c072b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=861&q=80"
                  alt="imagem da clínica"
                />
                <span>Segurança</span>
              </div>
              <div className="imgThree">
                <img
                  src="https://images.unsplash.com/photo-1612375689547-b5351e63050b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  alt="imagem da clínica"
                />
                <span>Acolhimento</span>
              </div>
              <div className="imgFour">
                <img
                  src="https://images.unsplash.com/photo-1631248207065-771ae9ac32f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                  alt="imagem da clínica"
                />
                <span>Espaço amplo</span>
              </div>
            </div>
          </div>
          <div className="rowTwo"></div>
          <div className="rowTwo"></div>
          <div className="section">
            <div className="slider">
              <strong>criar um slider com um profissional de cada área</strong>
            </div>
            <div className="text">
              <h2>Os melhores profissionais</h2>
              <p>
                Estamos lhe aguardando de braços abertos, somos a melhor clínica
                de Teresina sem dúvidas, com um espaço super confortável,
                aconchegante, você vai chegar aqui e se sentir nas nuvens, não
                vai se arrepender. Estamos lhe aguardando de braços abertos,
                somos a melhor clínica de Teresina sem dúvidas, com um espaço
                super confortável, aconchegante, você vai chegar aqui e se
                sentir nas nuvens, não vai se arrepender. Estamos lhe aguardando
                de braços abertos, somos a melhor clínica de Teresina sem
                dúvidas, com um espaço super confortável, aconchegante, você vai
                chegar aqui e se sentir nas nuvens, não vai se arrepender.
              </p>
            </div>
          </div>
          <div className="rowTwo"></div>
        </div>
      </Main>
      <Footer />
    </Container>
  );
}
