import { Container, Main } from "./styles";
import { useState, useEffect } from "react";
import { api } from "../../services/api";
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
import { useInput } from "../../hooks/input";
import avatarPlaceholder from "../../assets/avatar_placeholder.svg";

export function Professionals() {
  const [heart, setHeart] = useState(false);
  const { professional } = useAuthProfessional();

  const [tags, setTags] = useState([]);
  const [tagsSelected, setTagsSelected] = useState([]);
  const [specializationSelected, setSpecializationSelected] = useState("");
  const [professionals, setProfessionals] = useState([]);
  const { search } = useInput();

  function handleTagSelected(tagName) {
    if (tagName === "all") {
      setTagsSelected([]);
      return;
    }

    const Selected = tagsSelected.includes(tagName);
    if (Selected) {
      const filterTags = tagsSelected.filter((tag) => tag !== tagName);
      setTagsSelected(filterTags);
    } else {
      setTagsSelected((prevState) => [...prevState, tagName]);
    }
  }

  function handleSpecializationSelected(specializationName) {
    if (specializationName === specializationSelected) {
      setSpecializationSelected("");
      return;
    }
    setSpecializationSelected(specializationName);
  }

  useEffect(() => {
    async function fetchTags() {
      const response = await api.get(
        `/tags/?specialization=${specializationSelected}`
      );
      setTags(response.data);
    }
    fetchTags();
  }, [specializationSelected]);

  useEffect(() => {
    async function fetchProfessionals() {
      const response = await api.get(
        `/professionals?name=${search}&specialization=${specializationSelected}&tags=${String(
          tagsSelected
        )}`
      );
      setProfessionals(response.data);
    }
    fetchProfessionals();
  }, [search, tagsSelected, specializationSelected]);

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
            <li
              className={
                specializationSelected.length === 0
                  ? "active"
                  : "null"
              }
              onClick={() => handleSpecializationSelected([])}
            >
              todos
            </li>
            <li
              className={
                specializationSelected === "psicólogo" ? "active" : null
              }
              onClick={() => handleSpecializationSelected("psicólogo")}
            >
              Psicólogos
            </li>
            <li
              className={
                specializationSelected === "psiquiatra" ? "active" : null
              }
              onClick={() => handleSpecializationSelected("psiquiatra")}
            >
              Psiquiatras
            </li>
            <li
              className={
                specializationSelected === "nutricionista" ? "active" : null
              }
              onClick={() => handleSpecializationSelected("nutricionista")}
            >
              Nutricionistas
            </li>
            <li
              className={
                specializationSelected === "fisioterapeuta" ? "active" : null
              }
              onClick={() => handleSpecializationSelected("fisioterapeuta")}
            >
              Fisioterapeutas
            </li>
            <li
              className={
                specializationSelected.includes("dentista") ? "active" : null
              }
              onClick={() => handleSpecializationSelected("dentista")}
            >
              Dentistas
            </li>
          </ul>
        </div>
        <div className="tags">
          <h2>Tags</h2>
          <ul>
            <li
              className={
                tagsSelected.includes("all") || tagsSelected.length === 0
                  ? "active"
                  : "null"
              }
              onClick={() => handleTagSelected("all")}
            >
              todos
            </li>
            {tags &&
              tags.map((tag) => (
                <li
                  className={tagsSelected.includes(tag.name) ? "active" : null}
                  key={String(tag.id)}
                  onClick={() => handleTagSelected(tag.name)}
                >
                  {tag.name}
                </li>
              ))}
          </ul>
        </div>
        <div className="professionals">
          {professionals.map(Professional => (
            <div className="professional" key={String(Professional.id)}>
              {!professional ? (
                <button className="favorite" onClick={() => handleFavorite()}>
                  {heart ? <MdFavorite /> : <MdFavoriteBorder />}
                </button>
              ) : null}
              <img
                src={Professional.avatar ? `${api.defaults.baseURL}/files/${Professional.avatar}` : avatarPlaceholder}
                alt="imagem do profissional"
              />
              <h3>
                <span>{Professional.name} | {Professional.specialization[0].toUpperCase() + Professional.specialization.substring(1)} </span>
                <span>
                  <BsStarFill /> 5.5
                </span>
              </h3>
              <p>
                {Professional.description}
              </p>
              <Link to={`/details/${Professional.id}`}>
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
            ))
          }
        </div>
      </Main>
      <Footer />
    </Container>
  );
}
