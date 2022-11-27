import { Container } from "./styles";
import { GiHealthNormal } from "react-icons/gi";

export function Footer() {
  return (
    <Container>
      <div className="logo">
        <GiHealthNormal />
        <div className="logoText">
          <h1>fullness clinic</h1>
          <p>Sempre pensando na sua saúde!</p>
        </div>
      </div>
      <span className="span">© 2022 - Todos os direitos reservados.</span>
    </Container>
  );
}
