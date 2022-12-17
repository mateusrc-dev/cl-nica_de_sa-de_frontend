import { Container } from "./styles";
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
import { Link } from "react-router-dom";
import { useAuthProfessional } from "../../hooks/authProfessional";
import { useState, useEffect } from "react";
import { api } from "../../services/api";
import avatarPlaceholder from "../../assets/avatar_placeholder.svg";

export function ProfileProfessional() {
  const { professional, updateProfileProfessional } = useAuthProfessional();
  const professional_id = professional.id;
  const [name, setName] = useState(professional.name);
  const [email, setEmail] = useState(professional.email);
  const [description, setDescription] = useState(professional.description);
  const [specialization, setSpecialization] = useState(
    professional.specialization
  );
  const [passwordOld, setPasswordOld] = useState("");
  const [passwordNew, setPasswordNew] = useState("");
  const avatarUrl = professional.avatar
    ? `${api.defaults.baseURL}/files/${professional.avatar}`
    : avatarPlaceholder;
  const [avatar, setAvatar] = useState(avatarUrl);
  const [avatarFile, setAvatarFile] = useState(null);
  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");

  function handleAddTag() {
    if (newTag.length === 0) {
      alert("Digite algo para adicionar uma nova tag!");
      return;
    }
    setTags((prevState) => [...prevState, newTag]);
    setNewTag("");
  }

  async function handleUpdateProfessional() {
    if (newTag) {
      alert(
        "Você deixou uma tag no campo para adicionar, mas não clicou em adicionar. Clique para adicionar ou deixe o campo vazio!"
      );
      return;
    }
    if (tags.length === 0) {
      alert(
        "Adicione alguma tag antes de atualizar seu perfil, é muito importante inserir suas tags para você aparecer na pesquisa dos profissionais!"
      );
      return;
    }
    const updated = {
      id: professional_id,
      name,
      email,
      description,
      specialization,
      tags,
      password: passwordNew,
      old_password: passwordOld,
    };
    const userUpdated = Object.assign(professional, updated)
    await updateProfileProfessional({ professional, avatarFile });
  }

  function handleChangeAvatar(event) {
    const file = event.target.files[0];
    setAvatarFile(file);
    const imagePreview = URL.createObjectURL(file);
    setAvatar(imagePreview);
  }

  function handleRemoveTag(deleted) {
    setTags((prevState) => prevState.filter((tag) => tag !== deleted));
  }

  useEffect(() => {
    async function handleTags() {
      const response = await api.get(`/tags/${professional.id}`);
      let name;
      let tags = [];
      for (var i = 0; i < response.data.length; i++) {
        name = response.data[i]["name"];
        tags.push(name);
      }
      setTags(tags);
    }
    handleTags();
  }, []);

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
          <img className="img" src={avatar} alt="foto do usuário" />
          <label htmlFor="avatar" className="edit">
            <MdInsertPhoto className="svg" />
            <input type="file" id="avatar" onChange={handleChangeAvatar} />
          </label>
        </div>
        <form className="main">
          <label htmlFor="name">
            <strong>Seu nome:</strong>
            <Input
              id={"name"}
              placeholder={name}
              onChange={(e) => setName(e.target.value)}
            >
              <HiOutlineMail />
            </Input>
          </label>
          <label htmlFor="email">
            <strong>Seu email:</strong>
            <Input
              id={"email"}
              placeholder={email}
              onChange={(e) => setEmail(e.target.value)}
            >
              <HiOutlineMail />
            </Input>
          </label>
          <label htmlFor="specialization">
            <strong>Sua especialização:</strong>
            <select
              name="select"
              id="specialization"
              onChange={(e) => setSpecialization(e.target.value)}
              defaultValue={specialization}
            >
              <option value="nenhum">Nenhum</option>
              <option value="psicólogo">Psicólogo</option>
              <option value="psiquiatra">Psiquiatra</option>
              <option value="nutricionista">Nutricionista</option>
              <option value="fisioterapeuta">Fisioterapeuta</option>
              <option value="dentista">Dentista</option>
            </select>
          </label>
          <label htmlFor="old_password">
            <strong>Senha antiga:</strong>
            <Input
              id={"old_password"}
              type="password"
              onChange={(e) => setPasswordOld(e.target.value)}
            >
              <RiLockPasswordFill />
            </Input>
          </label>
          <label htmlFor="password">
            <strong>Nova senha:</strong>
            <Input
              id={"password"}
              type="password"
              onChange={(e) => setPasswordNew(e.target.value)}
            >
              <RiLockPasswordFill />
            </Input>
          </label>
          <label htmlFor="description" className="textarea">
            <strong>Sua descrição:</strong>
            <textarea
              placeholder={
                description
                  ? description
                  : "Você ainda não inseriu sua descrição, seja criativo, fale da sua experiência, qual seu foco, quais problemas você gosta de trabalhar, qual seu público alvo, suas especializações, etc..."
              }
              id="description"
              rows="5"
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </label>
          <strong>Suas tags:</strong>
          <span className="tags">
            {tags.map((tag, index) => (
              <TagItem
                key={String(index)}
                placeholder={tag}
                onClick={() => {
                  handleRemoveTag(tag);
                }}
              />
            ))}
            <TagItem
              placeholder={"Nova tag"}
              isNew
              value={newTag}
              onChange={(e) => setNewTag(e.target.value)}
              onClick={handleAddTag}
            />
          </span>
          <span>
            <Button onClick={handleUpdateProfessional}>
              Salvar alterações <TfiSave />
            </Button>
          </span>
        </form>
      </main>
      <Footer />
    </Container>
  );
}
