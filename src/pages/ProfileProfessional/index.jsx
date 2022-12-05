import { Container, Main } from "./styles";
import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import { Input } from "../../components/input";
import { MdInsertPhoto } from "react-icons/md";
import { TfiSave } from "react-icons/tfi";
import { Button } from "../../components/button";
import { RiLockPasswordFill } from "react-icons/ri";
import { HiOutlineMail } from "react-icons/hi";
import { TagItem } from "../../components/TagItem";
import { ButtonText } from "../../components/buttonText";
import { TiArrowBack } from "react-icons/ti";

export function ProfileProfessional() {
  return (
    <Container>
      <Header />
      <Main>
        <div className="avatar">
          <ButtonText>
            <TiArrowBack className="svg" />
            retornar
          </ButtonText>
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
            <strong>Seu email:</strong>
            <Input id={"email"} placeholder={"mateus_raimundo95@outlook.com"}>
              <HiOutlineMail />
            </Input>
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
              rows="5"
            ></textarea>
          </label>
          <strong>Suas tags:</strong>
          <span className="tags">
            <TagItem placeholder={"depressão"} />
            <TagItem placeholder={"ansiedade"} />
            <TagItem placeholder={"crise"} />
            <TagItem value={"pensamentos negativos"} isNew />
          </span>
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
