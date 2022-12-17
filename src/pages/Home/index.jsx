import { Container } from "./styles";
import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import { GiHealthNormal } from "react-icons/gi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { useAuthProfessional } from "../../hooks/authProfessional";

export function Home() {
  const { professional } = useAuthProfessional();
  return (
    <Container>
      <Header />
      <main>
        <header>
          <h1>
            <GiHealthNormal /> fullness clinic
          </h1>
          <nav>
            <ul>
              <li className="active">Sobre o nosso espaço</li>
              <div className="row"></div>
              {!professional ? (
                <li>
                  <Link to="/professionals">
                    Agendamentos com nossos profissionais
                  </Link>
                </li>
              ) : (
                <li>
                  <Link to="/professionals">Ver todos os profissionais</Link>
                </li>
              )}
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
                Teresina <strong>sem dúvidas</strong>, com um espaço super
                <strong>confortável</strong>, você vai chegar aqui e se sentir
                nas nuvens, não vai se arrepender.
              </p>
            </div>
            <div className="Grid">
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
          </div>
          <div className="rowTwo"></div>
          <div className="rowTwo"></div>
          <div className="sectionTwo">
            <div className="slider">
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000 }}
                loop={true}
              >
                <SwiperSlide>
                  <div className="image">
                    <img
                      className="img"
                      src="https://github.com/mateusrc-dev.png"
                      alt="foto do profissional"
                    />
                    <button>
                      <Link to="/details/1">Mateus Carvalho | Psicólogo</Link>
                    </button>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="image">
                    <img
                      className="img"
                      src="https://github.com/mateusrc-dev.png"
                      alt="foto do profissional"
                    />
                    <button>
                      <Link to="/details/1">
                        Fernando Gonçalves | Nutricionista
                      </Link>
                    </button>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="image">
                    <img
                      className="img"
                      src="https://github.com/mateusrc-dev.png"
                      alt="foto do profissional"
                    />
                    <button>
                      <Link to="/details/1">Ítalo Marsili | Psiquiatra</Link>
                    </button>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="image">
                    <img
                      className="img"
                      src="https://github.com/mateusrc-dev.png"
                      alt="foto do profissional"
                    />
                    <button>
                      <Link to="/details/1">Samia Marsili | Pediatra</Link>
                    </button>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="textTwo">
              <h2>Os melhores profissionais</h2>
              <p>
                Nosso espaço tem os <strong>melhores profissionais</strong> da
                cidade. Eles são formados nas
                <strong>melhores universidades dos Estados Unidos</strong> e
                chamamos justamente os melhores para trabalhar no nosso espaço
                porque <strong>queremos oferecer o melhor para você.</strong>
                Nosso espaço tem os <strong>melhores profissionais</strong> da
                cidade. Eles são formados nas
                <strong>melhores universidades dos Estados Unidos</strong> e
                chamamos justamente os melhores para trabalhar no nosso espaço
                porque <strong>queremos oferecer o melhor para você.</strong>
                Nosso espaço tem os <strong>melhores profissionais</strong> da
                cidade. Eles são formados nas
                <strong>melhores universidades dos Estados Unidos</strong> e
                chamamos justamente os melhores para trabalhar no nosso espaço
                porque <strong>queremos oferecer o melhor para você.</strong>
              </p>
            </div>
          </div>
          <div className="rowTwo"></div>
        </div>
      </main>
      <Footer />
    </Container>
  );
}
