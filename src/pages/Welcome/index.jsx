import { useAuthUser } from "../../hooks/authUser";
import { useAuthProfessional } from "../../hooks/authProfessional";
import { Container, Main } from "./styles";
import { useNavigate } from "react-router-dom";
import { GiHealthNormal } from "react-icons/gi";
import { useEffect } from "react";

export function Welcome() {
  const { user } = useAuthUser();
  const { professional } = useAuthProfessional();
  const navigate = useNavigate();

  function handleHours() {
    const hours = new Date();
    let Hours;
    if (hours.getHours() >= 0 && hours.getHours() <= 12) {
      Hours = "Bom dia";
    } else if (hours.getHours() > 12 && hours.getHours() <= 18) {
      Hours = "Boa tarde";
    } else {
      Hours = "Boa noite";
    }
    return Hours;
  }

  const Time = handleHours();

  useEffect(() => {
    function handleTime() {
      setTimeout(() => {
        navigate("/");
      }, 8000);
    }
    handleTime();
  }, []);

  return (
    <Container>
      <Main>
        <div className="welcome">
          <h1>{Time}</h1>
        </div>
        <h2 className="nameUser">
          Seja bem vindo(a) a
          <span className="clinicName">
            <GiHealthNormal className="svg" />
            fulness clinic
          </span>
          {user ? user.name : professional.name}
          !!
        </h2>
      </Main>
    </Container>
  );
}
