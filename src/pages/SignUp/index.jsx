import { Container, Main, Header, Footer } from "./styles";
import { api } from "../../services/api";
import { useState } from "react";
import { GiHealthNormal } from "react-icons/gi";
import { Input } from "../../components/input";
import { Button } from "../../components/button";
import { RiLockPasswordFill } from "react-icons/ri";
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlineUserAdd } from "react-icons/ai";
import { MdOutlineCreate } from "react-icons/md";
import { HiUser } from "react-icons/hi";
import { BsArrowReturnLeft } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { TfiBackLeft } from "react-icons/tfi";

export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleSignUp() {
    if (!name || !email || !password) {
      return alert("Preencha todos os campos!");
    }
    if (password.length < 6) {
      return alert("Digite uma senha com 6 ou mais caracteres!")
    }
    api
      .post("/users", { name, email, password })
      .then(() => {
        alert("Usuário cadastrado com sucesso");
        navigate("/signIn");
      })
      .catch((error) => {
        if (error.response) {
          alert(error.response.data.message);
        } else {
          alert("Não foi possível cadastrar!");
        }
      });
  }

  return (
    <Container>
      <Header>
        <Link to="/">
            retornar para a Home
            <TfiBackLeft />
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
                <Input
                  id={"name"}
                  placeholder={"Digite o seu nome!"}
                  onChange={(e) => setName(e.target.value)}
                >
                  <HiUser />
                </Input>
              </label>
              <label htmlFor="email">
                <strong>Email:</strong>
                <Input
                  id={"email"}
                  placeholder={"Digite o seu email!"}
                  onChange={(e) => setEmail(e.target.value)}
                >
                  <HiOutlineMail />
                </Input>
              </label>
              <label htmlFor="password" className="password">
                <strong>Senha:</strong>
                <Input
                  id={"password"}
                  type={"password"}
                  placeholder="Digite a sua senha (no mínimo 6 caracteres)!"
                  onChange={(e) => setPassword(e.target.value)}
                >
                  <RiLockPasswordFill />
                </Input>
              </label>
              <Button onClick={handleSignUp}>
                Criar conta!
                <AiOutlineUserAdd />
              </Button>
              <Link to="/signIn">
                  <BsArrowReturnLeft />
                  Voltar para o login
              </Link>
            </div>
          </div>
        </div>
      </Main>
      <Footer />
    </Container>
  );
}
