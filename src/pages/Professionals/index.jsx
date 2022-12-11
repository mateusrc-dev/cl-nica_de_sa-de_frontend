import { Container, Main } from "./styles";
import { useState, useEffect } from "react";
import { api } from "../../services/api"
import { GiHealthNormal } from "react-icons/gi";
import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import { BsStarFill } from "react-icons/bs";
import { MdFavorite } from "react-icons/md";
import { MdFavoriteBorder } from "react-icons/md";
import { Button } from "../../components/button";
import { AiFillSchedule } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useAuthProfessional } from "../../hooks/authProfessional";

export function Professionals() {
  const [heart, setHeart] = useState(false);
  const { professional } = useAuthProfessional();

  const [tags, setTags] = useState([])
  const [tagsSelected, setTagsSelected] = useState([])
  const [specializationSelected, setSpecializationSelected] = useState([])

  function handleTagSelected(tagName) {
    if (tagName === "all") {
      setTagsSelected([])
      return
    }

    const Selected = tagsSelected.includes(tagName)
    if (Selected) {
      const filterTags = tagsSelected.filter(tag => tag !== tagName)
      setTagsSelected(filterTags)
    } else {
      setTagsSelected(prevState => [...prevState, tagName])
    }
  }

  function handleSpecializationSelected(specializationName) {
    if (specializationName === "all") {
      setSpecializationSelected([])
      return
    }

    const Selected = specializationSelected.includes(specializationName)
    if (Selected) {
      const filterSpecialization = specializationSelected.filter(specialization => specialization !== specializationName)
      setSpecializationSelected(filterSpecialization)
    } else {
      setSpecializationSelected(prevState => [...prevState, specializationName])
    }
  }

  useEffect(() => {
    async function fetchTags() {
      const response = await api.get("/tags")
      setTags(response.data)
    }
    fetchTags()
  }, [])

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
              {professional ? (
                <li className="active">Ver todos os profissionais</li>
              ) : (
                <li className="active">
                  Agendamentos com nossos profissionais
                </li>
              )}
            </ul>
          </nav>
        </header>

        <div className="professions">
          <ul>
            <li className={specializationSelected.includes("all") || specializationSelected.length === 0 ? "active" : "null"} onClick={() => handleSpecializationSelected("all")}>todos</li>
            <li className={specializationSelected.includes("psicólogo") ? "active" : null} onClick={() => handleSpecializationSelected("psicólogo")}>Psicólogos</li>
            <li className={specializationSelected.includes("psiquiatra") ? "active" : null} onClick={() => handleSpecializationSelected("psiquiatra")}>Psiquiatras</li>
            <li className={specializationSelected.includes("nutricionista") ? "active" : null} onClick={() => handleSpecializationSelected("nutricionista")}>Nutricionistas</li>
            <li className={specializationSelected.includes("fisioterapeuta") ? "active" : null} onClick={() => handleSpecializationSelected("fisioterapeuta")}>Fisioterapeutas</li>
            <li className={specializationSelected.includes("dentista") ? "active" : null} onClick={() => handleSpecializationSelected("dentista")}>Dentistas</li>
          </ul>
        </div>
        <div className="tags">
          <h2>Tags</h2>
          <ul>
            <li className={tagsSelected.includes("all") || tagsSelected.length === 0 ? "active" : "null"} onClick={() => handleTagSelected("all")}>todos</li>
            {
              tags && tags.map(tag => (
                  <li className={tagsSelected.includes(tag.name) ? "active" : null}key={String(tag.id)} onClick={() => handleTagSelected(tag.name)}>{tag.name}</li>
                ))
            }
          </ul>
        </div>
        <div className="professionals">
          <div className="professional">
            {!professional ? (
              <button className="favorite" onClick={() => handleFavorite()}>
                {heart ? <MdFavorite /> : <MdFavoriteBorder />}
              </button>
            ) : null}
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
              {!professional ? (
                <Button>
                  <AiFillSchedule />
                  Agende um horário!
                </Button>
              ) : (
                <Button>Veja os detalhes do profissional!</Button>
              )}
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
