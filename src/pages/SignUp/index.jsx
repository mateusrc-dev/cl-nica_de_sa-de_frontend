import { Container, Main, Header, Footer } from "./styles";
import { GiHealthNormal } from "react-icons/gi";
import { Input } from "../../components/input";
import { Button } from "../../components/button";
import { RiLockPasswordFill } from "react-icons/ri";
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlineUserAdd } from "react-icons/ai";
import { MdOutlineCreate } from "react-icons/md";
import { HiUser } from "react-icons/hi";
import { BsArrowReturnLeft } from "react-icons/bs";
import { Link } from "react-router-dom";
import { TfiBackLeft } from "react-icons/tfi";

export function SignUp() {
  return (
    <Container>
      <Header>
        <Link to="/">
          <a>
            retornar para a Home
            <TfiBackLeft />
          </a>
        </Link>
      </Header>
      <Main>
        <div className="main">
          <div className="logo">
            <GiHealthNormal />
            <div className="logoText">
              <h1>fullness clinic</h1>
              <p>Sempre pensando na sua saúde!</p>
            </div>
          </div>
          <div className="content">
            <div className="loginClient">
              <h1>
                Crie a sua conta <MdOutlineCreate />
              </h1>
              <label htmlFor="name">
                <strong>Nome:</strong>
                <Input id={"name"} placeholder={"Digite o seu nome!"}>
                  <HiUser />
                </Input>
              </label>
              <label htmlFor="email">
                <strong>Email:</strong>
                <Input id={"email"} placeholder={"Digite o seu email!"}>
                  <HiOutlineMail />
                </Input>
              </label>
              <label htmlFor="password" className="password">
                <strong>Senha:</strong>
                <Input
                  id={"password"}
                  type={"password"}
                  placeholder="Digite a sua senha!"
                >
                  <RiLockPasswordFill />
                </Input>
              </label>
              <Button>
                Criar conta!
                <AiOutlineUserAdd />
              </Button>
              <Link to="/signIn">
                <a>
                  <BsArrowReturnLeft />
                  Voltar para o login
                </a>
              </Link>
            </div>
          </div>
        </div>
      </Main>
      <Footer />
    </Container>
  );
}
