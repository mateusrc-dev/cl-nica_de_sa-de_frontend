import { Container, Main } from "./styles";
import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import { Button } from "../../components/button";
import { TiCancel } from "react-icons/ti";
import { BiSave } from "react-icons/bi";
import { FiEdit2 } from "react-icons/fi";
import { useState, useEffect } from "react";
import { BsStarFill } from "react-icons/bs";
import { BsStar } from "react-icons/bs";
import { ButtonText } from "../../components/buttonText";
import { TiArrowBack } from "react-icons/ti";
import { Link } from "react-router-dom";
import { api } from "../../services/api";
import avatarPlaceholder from "../../assets/avatar_placeholder.svg";

export function TheirTestimonials() {
  const [assessments, setAssessments] = useState([]);
  const [testimony, setTestimony] = useState("");
  console.log(assessments)

  async function handleStars(number, id) {
    console.log(number)
    console.log(id)
    await api.put(`assessmentsUser/${id}?note=${number}`);
  }

  async function handleUpdateTestimony(id) {
    await api.put(`/assessmentsUser?testimony=${testimony}&id=${id}`);
    alert("Depoimento atualizado com sucesso!");
    setTestimony("");
    window.location.reload();
  }

  async function handleDeleteTestimony(id) {
    if (confirm("Tem certeza que deseja deletar seu depoimento?")) {
      await api.delete(`/assessmentsUser?id=${id}`);
    } else {
      return
    }
    alert("Depoimento deletado!");
  }

  useEffect(() => {
    async function fetchAssessments() {
      const response = await api.get(`/assessmentsUser`);
      setAssessments(response.data.testimony);
    }
    fetchAssessments();
  }, [assessments]);

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
          Seus depoimentos
          <FiEdit2 />
        </h1>
        <p>
          Abaixo estão todos os seus depoimentos, você pode editar eles ou
          deletá-los se desejar!
        </p>
        <div className="main">
          {assessments &&
            assessments.map((assessment) => (
              <div className="Scheduling">
                <svg class="svg" width="1100px" height="250px">
                  <polygon
                    points="0,250 50,0 1100,0 1050,250 0,250"
                    stroke="blue"
                    stroke-width="1"
                  />
                </svg>
                <div className="scheduling">
                  <img
                    src={
                      assessment.avatar
                        ? `${api.defaults.baseURL}/files/${assessment.avatar}`
                        : avatarPlaceholder
                    }
                    alt="foto do profissional"
                  />
                  <div className="details">
                    <span>
                      <strong>Profissional:</strong> Dr. {assessment.name}
                    </span>
                    <span>
                      <strong>Especialidade:</strong>{" "}
                      {assessment.specialization[0].toUpperCase() +
                        assessment.specialization.substring(1)}
                    </span>
                    <span>
                      <strong>Sua nota:</strong>
                      <span className="stars">
                        {assessment.note === 1 ? (
                          <span className="stars">
                            <button
                              onClick={() => handleStars(1, assessment.id)}
                            >
                              <BsStarFill />
                            </button>
                            <button
                              onClick={() => handleStars(2, assessment.id)}
                            >
                              <BsStar />
                            </button>
                            <button
                              onClick={() => handleStars(3, assessment.id)}
                            >
                              <BsStar />
                            </button>
                            <button
                              onClick={() => handleStars(4, assessment.id)}
                            >
                              <BsStar />
                            </button>
                            <button
                              onClick={() => handleStars(5, assessment.id)}
                            >
                              <BsStar />
                            </button>
                          </span>
                        ) : null}
                        {assessment.note === 2 ? (
                          <span className="stars">
                            <button
                              onClick={() => handleStars(1, assessment.id)}
                            >
                              <BsStarFill />
                            </button>
                            <button
                              onClick={() => handleStars(2, assessment.id)}
                            >
                              <BsStarFill />
                            </button>
                            <button
                              onClick={() => handleStars(3, assessment.id)}
                            >
                              <BsStar />
                            </button>
                            <button
                              onClick={() => handleStars(4, assessment.id)}
                            >
                              <BsStar />
                            </button>
                            <button
                              onClick={() => handleStars(5, assessment.id)}
                            >
                              <BsStar />
                            </button>
                          </span>
                        ) : null}
                        {assessment.note === 3 ? (
                          <span className="stars">
                            <button
                              onClick={() => handleStars(1, assessment.id)}
                            >
                              <BsStarFill />
                            </button>
                            <button
                              onClick={() => handleStars(2, assessment.id)}
                            >
                              <BsStarFill />
                            </button>
                            <button
                              onClick={() => handleStars(3, assessment.id)}
                            >
                              <BsStarFill />
                            </button>
                            <button
                              onClick={() => handleStars(4, assessment.id)}
                            >
                              <BsStar />
                            </button>
                            <button
                              onClick={() => handleStars(5, assessment.id)}
                            >
                              <BsStar />
                            </button>
                          </span>
                        ) : null}
                        {assessment.note === 4 ? (
                          <span className="stars">
                            <button
                              onClick={() => handleStars(1, assessment.id)}
                            >
                              <BsStarFill />
                            </button>
                            <button
                              onClick={() => handleStars(2, assessment.id)}
                            >
                              <BsStarFill />
                            </button>
                            <button
                              onClick={() => handleStars(3, assessment.id)}
                            >
                              <BsStarFill />
                            </button>
                            <button
                              onClick={() => handleStars(4, assessment.id)}
                            >
                              <BsStarFill />
                            </button>
                            <button
                              onClick={() => handleStars(5, assessment.id)}
                            >
                              <BsStar />
                            </button>
                          </span>
                        ) : null}
                        {assessment.note === 5 ? (
                          <span className="stars">
                            <button
                              onClick={() => handleStars(1, assessment.id)}
                            >
                              <BsStarFill />
                            </button>
                            <button
                              onClick={() => handleStars(2, assessment.id)}
                            >
                              <BsStarFill />
                            </button>
                            <button
                              onClick={() => handleStars(3, assessment.id)}
                            >
                              <BsStarFill />
                            </button>
                            <button
                              onClick={() => handleStars(4, assessment.id)}
                            >
                              <BsStarFill />
                            </button>
                            <button
                              onClick={() => handleStars(5, assessment.id)}
                            >
                              <BsStarFill />
                            </button>
                          </span>
                        ) : null}
                      </span>
                    </span>
                    <span className="testimonial">
                      <strong>Seu depoimento:</strong>
                      <textarea
                        placeholder={assessment.testimony}
                        onChange={(e) => setTestimony(e.target.value)}
                        cols="96"
                        rows="3"
                      ></textarea>
                    </span>
                    <span>
                      <Button
                        onClick={() => handleUpdateTestimony(assessment.id)}
                      >
                        Salvar as alterações! <BiSave />
                      </Button>
                      <Button onClick={() => handleDeleteTestimony(assessment.id)}>
                        Deletar depoimento! <TiCancel />
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
