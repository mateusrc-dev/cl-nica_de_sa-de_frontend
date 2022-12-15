import { Container, Main } from "./styles";
import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import { Button } from "../../components/button";
import { TiCancel } from "react-icons/ti";
import { AiFillSchedule } from "react-icons/ai";
import { ButtonText } from "../../components/buttonText";
import { TiArrowBack } from "react-icons/ti";
import { Link } from "react-router-dom";
import { api } from "../../services/api";
import { useState, useEffect } from "react";
import { useAuthProfessional } from "../../hooks/authProfessional";
import avatarPlaceholder from "../../assets/avatar_placeholder.svg";
import moment from "moment";

export function YourQueries() {
  const { professional } = useAuthProfessional();
  const [yourQueries, setYourQueries] = useState([]);

  const today = new Date();
  const Day = String(today.getDate()).padStart(2, "0");
  const Year = today.getFullYear();
  const Month = String(today.getMonth() + 1).padStart(2, "0");
  const dateString = `${Year}-${Month}-${Day}`;

  const Hours = today.getHours();
  const Minutes = today.getMinutes();
  const hoursString = `${Hours}${Minutes}`;

  useEffect(() => {
    async function fetchQueries() {
      const response = await api.get(`/schedules`);
      setYourQueries(response.data.schedules);
    }
    fetchQueries();
  }, [yourQueries]);

  async function confirmPositive(id) {
    const availability = "ocupado";
    const status = "consulta realizada";
    await api.put(`/schedules/${status}?availability=${availability}&id=${id}`);
    alert("Status da consulta atualizada com sucesso");
  }

  async function confirmNegative(id) {
    const availability = "ocupado";
    const status = "consulta não realizada";
    await api.put(`/schedules/${status}?availability=${availability}&id=${id}`);
    alert("Status da consulta atualizada com sucesso");
  }

  async function handleClick(id) {
    if (confirm("Tem certeza que deseja cancelar?")) {
      const justification = prompt("Escreva uma justificativa!");
      const status = "desmarcado por professional!";
      await api.put(
        `/schedulesCancel/${id}/?status=${status}&justification=${justification}`
      );
      alert("Consulta desmarcada!");
    } else {
      return
    }
  }

  return (
    <Container>
      <Header />
      <Main>
        <section>
          <div className="textButton">
            <Link to={-1}>
              <ButtonText>
                <TiArrowBack />
                retornar
              </ButtonText>
            </Link>
          </div>
          <h1>
            Suas consultas
            <AiFillSchedule />
          </h1>
          <p>
            Abaixo estão todas as suas consultas, você pode{" "}
            <strong>desmarcar</strong> suas consultas caso for necessário!
          </p>
          <div className="main">
            {yourQueries.map((querie) => (
              <div className="Scheduling">
                <svg class="svg" width="500px" height="250px">
                  <polygon
                    points="0,50 50,0 500,0 500,200 450,250 0,250 0,50"
                    stroke="blue"
                    stroke-width="0.5"
                    fill="white"
                  />
                </svg>
                <div className="scheduling">
                  <img
                    src={
                      querie.avatar
                        ? `${api.defaults.baseURL}/files/${querie.avatar}`
                        : avatarPlaceholder
                    }
                    alt="imagem do paciente"
                  />
                  <div className="details">
                    <span>
                      <strong>Paciente:</strong> {querie.name}
                    </span>
                    <span className="complaint">
                      <strong>Queixa do paciente:</strong> {querie.queixas}
                    </span>
                    <span>
                      <strong>Data da consulta:</strong> {querie.date}
                    </span>
                    <span>
                      <strong>Horário da consulta:</strong> {querie.time}hrs
                    </span>
                    <span>
                      <strong>Duração da consulta:</strong> {querie.duration}
                    </span>
                    <span className={querie.justification ? "null" : "last"}>
                      <strong>Status:</strong> {querie.status}
                    </span>
                    {querie.justification ? (
                      <span className="last">
                        <strong>Justificativa:</strong> {querie.justification}
                      </span>
                    ) : null}
                    {moment(querie.date).isBefore(dateString) ||
                    (querie.time.replace(":", "") < hoursString &&
                      moment(querie.date).isSame(dateString)) ? (
                      <span className="buttons">
                        {querie.justification ? null : (
                          <span>A consulta aconteceu?</span>
                        )}
                        {querie.justification ? null : (
                          <span>
                            <Button onClick={() => confirmPositive(querie.id)}>
                              Sim!
                            </Button>
                          </span>
                        )}
                        {querie.justification ? null : (
                          <span>
                            <Button onClick={() => confirmNegative(querie.id)}>
                              Não!
                            </Button>
                          </span>
                        )}
                      </span>
                    ) : (
                      <span>
                        {querie.justification ? null : (
                          <Button onClick={() => handleClick(querie.id)}>
                            Cancelar consulta! <TiCancel />
                          </Button>
                        )}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </Main>
      <Footer />
    </Container>
  );
}
