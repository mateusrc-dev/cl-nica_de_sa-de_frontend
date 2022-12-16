import { Container } from "./styles";
import { BsSearch } from "react-icons/bs";
import { useInput } from "../../hooks/input";
import { useState, useRef } from "react";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";
import { useAuthUser } from "../../hooks/authUser";
import { FaClock } from "react-icons/fa"
import { CgClose } from 'react-icons/cg'
import { CgCloseR } from 'react-icons/cg'

export function InputTwo({ placeholder, value }) {
  const [option, setOption] = useState([]);
  const navigate = useNavigate();
  const input = useRef(null);
  const { handleStates } = useInput();
  const { user } = useAuthUser();
  const [click, setClick] = useState(false)

  async function searchInput(e) {
    handleStates(e.target.value);
    if (e.target.value.length === 0) {
      setOption([]);
      setClick(false)
      return;
    } else if (e.target.value.length !== 0) {
      if (user) {
        const response = await api.get(`/search/?search=${value}`);
        setOption(response.data.Search);
        setClick(true)
      }
    }
  }

  async function SearchInput(e) {
    if (e.key === "Enter") {
      if (e.target.value.length == 0) {
        alert("Digite algo para pesquisar!");
      } else {
        if (user) {
          api.post("/search", { search: e.target.value });
          navigate("/professionals");
        } else {
          navigate("/professionals");
        }
      }
    }
  }

  async function handleSearch() {
    if (value.length == 0) {
      alert("Digite algo para pesquisar!")
    } else {
      await api.post("/search", { search: value })
      navigate("/professionals")
    }
  }

  async function handleDelete(id) {
    await api.delete(`/search/${id}`)
    const response = await api.get(`/search/?search=${value}`)
    setOption(response.data.Search)
  }

  function HandleSearch(option) {
    handleStates(option)
    setOption([])
    setClick(false)
  }

  function closeSearch() {
    setOption([])
    setClick(false)
  }

  const handleOutsideClick = (e) => {
    if (e.target.id === "modal") {
      setClick(false)
    }
  };

  const resultList = option.map((option, idx) => {
    const { id, search } = option
    const delay = `${idx + 1}00ms`
    return (
      <li className="li" key={id} style={{ '--delay': delay }}><FaClock /> <p onClick={() => HandleSearch(search)} >{search}</p> <a onClick={() => handleDelete(id)} className="trash" title="Excluir"><CgClose /></a></li>
    )
  })

  return (
    <Container>
      <input
        type="search"
        value={value}
        placeholder={placeholder}
        onKeyDown={(e) => SearchInput(e)}
        onChange={(e) => searchInput(e)}
      />
      <button onClick={handleSearch}>
        <BsSearch />
      </button>
      <div id="modal" className={click ? "modal" : null} onClick={handleOutsideClick}>
      <div className={option.length === 0  || !click ? "none" : "searchResults"}>
        <a onClick={closeSearch} className="close" title="Fechar"><CgCloseR /></a>
        <ul>
          {resultList}
        </ul>
      </div>
      </div>
    </Container>
  );
}
