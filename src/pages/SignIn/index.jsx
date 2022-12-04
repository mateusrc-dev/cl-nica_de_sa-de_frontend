import { Container, Main, Header, Footer } from "./styles";
import { GiHealthNormal } from "react-icons/gi";
import { BiSelectMultiple } from "react-icons/bi";
import { Input } from "../../components/input";
import { Button } from "../../components/button";
import { RiLockPasswordFill } from "react-icons/ri";
import { HiOutlineMail } from "react-icons/hi";
import { FiLogIn } from "react-icons/fi";

export function SignIn() {
  return (
    <Container>
      <Header />
      <Main>
        <div className="main">
          <div className="logo">
            <GiHealthNormal />
            <div className="logoText">
              <h1>fullness clinic</h1>
              <p>Sempre pensando na sua saúde!</p>
            </div>
          </div>
          <div className="clientOrProfessional">
            <div className="table">
              <div className="header">
                <button className="client">Paciente</button>
                <button className="professional">Profissional</button>
              </div>
              <div className="content">
                <div className="choice none">
                  <BiSelectMultiple />
                  <h2>
                    Escolha acima se você vai logar como paciente ou
                    profissional
                  </h2>
                </div>
                <div className="loginClient">
                  <h1>Faça seu login</h1>
                  <label htmlFor="email">
                    <strong>Email:</strong>
                    <Input id={"email"} placeholder={"Digite o seu email!"}>
                      <HiOutlineMail />
                    </Input>
                  </label>
                  <label htmlFor="password" className="password">
                    <strong>Senha:</strong>
                    <Input id={"password"} placeholder="Digite a sua senha">
                      <RiLockPasswordFill />
                    </Input>
                  </label>
                  <Button>
                    Fazer login
                    <FiLogIn />
                  </Button>
                  <a>Crie a sua conta</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Main>
      <Footer />
    </Container>
  );
}
