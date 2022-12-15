import { Container, Main } from "./styles";
import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import { Button } from "../../components/button";
import { FaWalking } from "react-icons/fa";
import { GiBrokenHeart } from "react-icons/gi";
import { GiNestedHearts } from "react-icons/gi";
import { ButtonText } from "../../components/buttonText";
import { TiArrowBack } from "react-icons/ti";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import avatarPlaceholder from "../../assets/avatar_placeholder.svg";
import { api } from "../../services/api";

export function Favorites() {
  const [favorites, setFavorites] = useState();

  useEffect(() => {
    async function Favorite() {
      const response = await api.get(`/favorites`);
      setFavorites(response.data.favorites);
    }
    Favorite();
  }, [favorites]);

  async function deleteFavorite(professional_id) {
    if (
      confirm("Tem certeza que deseja excluir o profissional dos favoritos?")
    ) {
      await api.delete(`/favorites/${professional_id}`);
    } else {
      return;
    }
  }

  return (
    <Container>
      <Header />
      <Main>
        <div className="textButton">
          <Link to={-1}>
            <ButtonText>
              <TiArrowBack />
              retornar
            </ButtonText>
          </Link>
        </div>
        <h1>
          Seus profissionais favoritos
          <GiNestedHearts />
        </h1>
        <p>
          Abaixo estão os profissionais que você favoritou, você pode ir
          diretamente para a página deles para agendar uma consulta ou pode
          excluí-los dos favoritos!
        </p>
        <div className="main">
          {favorites &&
            favorites.map((favorite) => (
              <div className="Scheduling" key={String(favorite.id)}>
                <svg className="svg" width="1100px" height="250px">
                  <polygon
                    points="0,250 50,0 1100,0 1050,250 0,250"
                    stroke="blue"
                    strokeWidth="1"
                  />
                </svg>
                <div className="scheduling">
                  <img
                    src={
                      favorite.avatar
                        ? `${api.defaults.baseURL}/files/${favorite.avatar}`
                        : avatarPlaceholder
                    }
                    alt="imagem do profissional"
                  />
                  <div className="details">
                    <span>
                      <strong>Profissional:</strong> Dr. {favorite.name}
                    </span>
                    <span>
                      <strong>Especialidade:</strong>{" "}
                      {favorite.specialization[0].toUpperCase() +
                        favorite.specialization.substring(1)}
                    </span>
                    <span></span>
                    <span className="description">
                      <strong>Descrição:</strong> {favorite.description}
                    </span>
                    <span>
                      <Link to={`/details/${favorite.id}`}>
                        <Button>
                          Visitar página do profissional! <FaWalking />
                        </Button>
                      </Link>
                      <Button onClick={() => deleteFavorite(favorite.id)}>
                        Excluir dos favoritos! <GiBrokenHeart />
                      </Button>
                    </span>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </Main>
      <Footer />
    </Container>
  );
}
