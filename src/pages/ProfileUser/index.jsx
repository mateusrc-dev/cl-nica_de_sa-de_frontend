//nessa página vai ficar os detalhes do profissional (horários livres, detalhes sobre ele, depoimentos sobre ele, etc.)
import { Container, Main } from "./styles";
import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import { Input } from "../../components/input";
import { MdInsertPhoto } from "react-icons/md";
import { TfiSave } from "react-icons/tfi";
import { Button } from "../../components/button";
import { ButtonText } from "../../components/buttonText";
import { TiArrowBack } from "react-icons/ti";
import { Link } from "react-router-dom";
import { useAuthUser } from "../../hooks/authUser";
import { useState } from "react";

export function ProfileUser() {
  const { user, updateProfileUser } = useAuthUser();
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [queixa, setQueixa] = useState(user.queixas);
  const [passwordOld, setPasswordOld] = useState("");
  const [passwordNew, setPasswordNew] = useState("");


  async function handleUpdateUser() {
    const user = {
      name,
      email,
      queixas: queixa,
      password: passwordNew,
      old_password: passwordOld,
    };
    await updateProfileUser({ user });
  }

  return (
    <Container>
      <Header />
      <Main>
        <div className="avatar">
          <Link to={-1}>
            <ButtonText>
              <TiArrowBack />
              retornar
            </ButtonText>
          </Link>
          <img
            className="img"
            src="https://github.com/mateusrc-dev.png"
            alt="foto do usuário"
          />
          <label htmlFor="avatar" className="edit">
            <MdInsertPhoto className="svg" />
            <input type="file" id="avatar" />
          </label>
        </div>
        <form className="main">
          <label htmlFor="email">
            <strong>Seu nome</strong>
            <Input
              id={"email"}
              placeholder={name}
              onChange={(e) => setName(e.target.value)}
            ></Input>
          </label>
          <label htmlFor="email">
            <strong>Seu email</strong>
            <Input
              id={"email"}
              placeholder={email}
              onChange={(e) => setEmail(e.target.value)}
            ></Input>
          </label>
          <label htmlFor="old_password">
            <strong>Senha antiga:</strong>
            <Input
              id={"old_password"}
              onChange={(e) => setPasswordOld(e.target.value)}
              type="password"
            ></Input>
          </label>
          <label htmlFor="password">
            <strong>Nova senha:</strong>
            <Input
              id={"password"}
              onChange={(e) => setPasswordNew(e.target.value)}
              type="password"
            ></Input>
          </label>
          <label htmlFor="description" className="textarea">
            <strong>Sua queixa:</strong>
            <textarea
              placeholder={
                queixa
                  ? queixa
                  : "Você ainda não inseriu sua queixa, digite aqui sua principal queixa, quanto mais detalhes, melhor! ;)"
              }
              onChange={(e) => setQueixa(e.target.value)}
              id="description"
              rows="5"
            ></textarea>
          </label>
          <span>
            <Button onClick={handleUpdateUser}>
              Salvar alterações <TfiSave />
            </Button>
          </span>
        </form>
      </Main>
      <Footer />
    </Container>
  );
}
