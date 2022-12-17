import { Container } from "./styles";
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
import { api } from "../../services/api";
import avatarPlaceholder from "../../assets/avatar_placeholder.svg";

export function ProfileUser() {
  const { user, updateProfileUser } = useAuthUser();
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [queixa, setQueixa] = useState(user.queixas);
  const [passwordOld, setPasswordOld] = useState("");
  const [passwordNew, setPasswordNew] = useState("");
  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;
  const [avatar, setAvatar] = useState(avatarUrl)
  const [avatarFile, setAvatarFile] = useState(null)

  async function handleUpdateUser() {
    const updated = {
      name,
      email,
      queixas: queixa,
      password: passwordNew,
      old_password: passwordOld,
    };
    const userUpdated = Object.assign(user, updated)
    await updateProfileUser({ user: userUpdated, avatarFile });
  }

  function handleChangeAvatar(event) {
    const file = event.target.files[0];
    setAvatarFile(file);
    const imagePreview = URL.createObjectURL(file);
    setAvatar(imagePreview)
  }

  return (
    <Container>
      <Header />
      <main>
        <div className="avatar">
          <Link to={-1}>
            <ButtonText>
              <TiArrowBack />
              retornar
            </ButtonText>
          </Link>
          <img
            className="img"
            src={avatar}
            alt="foto do usuário"
          />
          <label htmlFor="avatar" className="edit">
            <MdInsertPhoto className="svg" />
            <input type="file" id="avatar" onChange={handleChangeAvatar}/>
          </label>
        </div>
        <form className="main">
          <label htmlFor="name">
            <strong>Seu nome</strong>
            <Input
              id={"name"}
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
      </main>
      <Footer />
    </Container>
  );
}
