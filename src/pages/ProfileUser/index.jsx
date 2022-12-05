//nessa página vai ficar os detalhes do profissional (horários livres, detalhes sobre ele, depoimentos sobre ele, etc.)
import { Container, Main } from "./styles";
import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import { Input } from "../../components/input";
import { MdInsertPhoto } from "react-icons/md";
import { TfiSave } from "react-icons/tfi";
import { Button } from "../../components/button";

export function ProfileUser() {
  return (
    <Container>
      <Header />
      <Main>
        <div className="avatar">
          <img
            className="img"
            src="https://github.com/mateusrc-dev.png"
            alt="foto do usuário"
          />
          <label htmlFor="avatar" className="edit">
            <MdInsertPhoto />
            <input type="file" id="avatar" />
          </label>
        </div>
        <form className="main">
          <label htmlFor="email">
            <strong>Seu email</strong>
            <Input
              id={"email"}
              placeholder={"mateus_raimundo95@outlook.com"}
            ></Input>
          </label>
          <label htmlFor="old_password">
            <strong>Senha antiga:</strong>
            <Input id={"old_password"}></Input>
          </label>
          <label htmlFor="password">
            <strong>Nova senha:</strong>
            <Input id={"password"}></Input>
          </label>
          <label htmlFor="description" className="textarea">
            <strong>Sua queixa:</strong>
            <textarea
              placeholder="Estou sentindo muita ansiedade, tenho que passar no concurso e não aguento mais reprovar e morar na casa dos meus pais!"
              id="description"
              rows="5"
            ></textarea>
          </label>
          <span>
            <Button>
              Salvar alterações <TfiSave />
            </Button>
          </span>
        </form>
      </Main>
      <Footer />
    </Container>
  );
}
