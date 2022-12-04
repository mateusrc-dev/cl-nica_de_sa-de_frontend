//nessa página vai ficar os detalhes do profissional (horários livres, detalhes sobre ele, depoimentos sobre ele, etc.)
import { Container, Main } from "./styles";
import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import { Input } from "../../components/input";
import { MdInsertPhoto } from "react-icons/md";
import { TfiSave } from "react-icons/tfi";
import { Button } from "../../components/button";
import { RiLockPasswordFill } from "react-icons/ri";
import { HiOutlineMail } from "react-icons/hi";

export function ProfileProfessional() {
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
          <button className="edit">
            <MdInsertPhoto />
          </button>
        </div>
        <div className="main">
          <label htmlFor="email">
            <strong>Seu email:</strong>
            <Input
              id={"email"}
              placeholder={"mateus_raimundo95@outlook.com"}
            ><HiOutlineMail/></Input>
          </label>
          <label htmlFor="old_password">
            <strong>Senha antiga:</strong>
            <Input id={"old_password"}>
              <RiLockPasswordFill />
            </Input>
          </label>
          <label htmlFor="password">
            <strong>Nova senha:</strong>
            <Input id={"password"}>
              <RiLockPasswordFill />
            </Input>
          </label>
          <label htmlFor="description" className="textarea">
            <strong>Sua descrição:</strong>
            <textarea
              placeholder="Meu nome é Mateus, sou o melhor psicólogo de todos, cure todos os seus traumas, marque uma consulta comigo e resolva todos os seus problemas!"
              id="description"
              cols="86"
              rows="5"
            ></textarea>
          </label>
          <p>
            <strong>Criar o adicionador de tags aqui...</strong>
          </p>
          <span>
            <Button>
              Salvar alterações <TfiSave />
            </Button>
          </span>
        </div>
      </Main>
      <Footer />
    </Container>
  );
}
