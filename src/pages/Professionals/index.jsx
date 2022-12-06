import { Container, Main } from "./styles";
import { useState } from "react";
import { GiHealthNormal } from "react-icons/gi";
import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import { BsStarFill } from "react-icons/bs";
import { MdFavorite } from "react-icons/md";
import { MdFavoriteBorder } from "react-icons/md";
import { Button } from "../../components/button";
import { AiFillSchedule } from "react-icons/ai";
import { Link } from "react-router-dom";

export function Professionals() {
  const [heart, setHeart] = useState(false);

  function handleFavorite() {
    if (heart === false) {
      setHeart(true);
    } else if (heart === true) {
      setHeart(false);
    }
  }

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
              <li>
                <Link to="/">Sobre o nosso espaço</Link>
              </li>
              <div className="row"></div>
              <li className="active">Agendamentos com nossos profissionais</li>
            </ul>
          </nav>
        </header>

        <div className="professions">
          <ul>
            <li className="active">Todos</li>
            <li>Psicólogos</li>
            <li>Psiquiatras</li>
            <li>Nutricionistas</li>
            <li>Fisioterapeutas</li>
            <li>Dentistas</li>
          </ul>
        </div>
        <div className="tags">
          <h2>Tags</h2>
          <ul>
            <li className="active">todos</li>
            <li>depressão</li>
            <li>compulsão alimentar</li>
            <li>dieta</li>
            <li>cáries dentais</li>
            <li>ansiedade</li>
            <li>depressão</li>
            <li>compulsão alimentar</li>
            <li>dieta</li>
            <li>cáries dentais</li>
            <li>ansiedade</li>
            <li>depressão</li>
            <li>compulsão alimentar</li>
            <li>dieta</li>
            <li>cáries dentais</li>
            <li>cáries dentais</li>
            <li>ansiedade</li>
            <li>depressão</li>
            <li>compulsão alimentar</li>
            <li>dieta</li>
            <li>cáries dentais</li>
          </ul>
        </div>
        <div className="professionals">
          <div className="professional">
            <button className="favorite" onClick={() => handleFavorite()}>
              {heart ? <MdFavorite /> : <MdFavoriteBorder />}
            </button>
            <img
              src="https://github.com/mateusrc-dev.png"
              alt="imagem do profissional"
            />
            <h3>
              <span>Dr. Mateus Carvalho | Psiquiatra </span>
              <span>
                <BsStarFill /> 5.5
              </span>
            </h3>
            <p>
              Meu nome é Mateus, eu sou um psicólogo incrível, trato você super
              bem, você vai se sentir no céu ao sair de uma consulta comigo,
              como se nenhum problema existisse.
            </p>
            <Link to="/details/1">
              <Button>
                <AiFillSchedule />
                Agende um horário!
              </Button>
            </Link>
          </div>
          <div className="professional">
            <button className="favorite" onClick={() => handleFavorite()}>
              {heart ? <MdFavorite /> : <MdFavoriteBorder />}
            </button>
            <img
              src="https://github.com/mateusrc-dev.png"
              alt="imagem do profissional"
            />
            <h3>
              <span>Dr. Mateus Carvalho | Psicólogo </span>
              <span>
                <BsStarFill /> 5.5
              </span>
            </h3>
            <p>
              Meu nome é Mateus, eu sou um psicólogo incrível, trato você super
              bem, você vai se sentir no céu ao sair de uma consulta comigo,
              como se nenhum problema existisse.
            </p>
            <Button>
              <AiFillSchedule />
              Agende um horário!
            </Button>
          </div>
          <div className="professional">
            <button className="favorite">
              <MdFavorite />
            </button>
            <img
              src="https://github.com/mateusrc-dev.png"
              alt="imagem do profissional"
            />
            <h3>
              <span>Dr. Mateus Carvalho | Nutricionista </span>
              <span>
                <BsStarFill /> 5.5
              </span>
            </h3>
            <p>
              Meu nome é Mateus, eu sou um psicólogo incrível, trato você super
              bem, você vai se sentir no céu ao sair de uma consulta comigo,
              como se nenhum problema existisse.
            </p>
            <Button>
              <AiFillSchedule />
              Agende um horário!
            </Button>
          </div>
          <div className="professional">
            <button className="favorite">
              <MdFavorite />
            </button>
            <img
              src="https://github.com/mateusrc-dev.png"
              alt="imagem do profissional"
            />
            <h3>
              <span>Dr. Mateus Carvalho | Dentista </span>
              <span>
                <BsStarFill /> 5.5
              </span>
            </h3>
            <p>
              Meu nome é Mateus, eu sou um psicólogo incrível, trato você super
              bem, você vai se sentir no céu ao sair de uma consulta comigo,
              como se nenhum problema existisse.
            </p>
            <Button>
              <AiFillSchedule />
              Agende um horário!
            </Button>
          </div>
          <div className="professional">
            <button className="favorite">
              <MdFavorite />
            </button>
            <img
              src="https://github.com/mateusrc-dev.png"
              alt="imagem do profissional"
            />
            <h3>
              <span>Dr. Mateus Carvalho | Fisioterapeuta </span>
              <span>
                <BsStarFill /> 5.5
              </span>
            </h3>
            <p>
              Meu nome é Mateus, eu sou um psicólogo incrível, trato você super
              bem, você vai se sentir no céu ao sair de uma consulta comigo,
              como se nenhum problema existisse.
            </p>
            <Button>
              <AiFillSchedule />
              Agende um horário!
            </Button>
          </div>
        </div>
      </Main>
      <Footer />
    </Container>
  );
}
