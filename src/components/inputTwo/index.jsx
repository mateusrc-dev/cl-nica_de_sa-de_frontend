import { Container } from "./styles";
import { BsSearch } from "react-icons/bs";
import { useInput } from '../../hooks/input'

export function InputTwo({ placeholder, value }) {
  const { handleStates } = useInput()

  function searchInput(e) {
    handleStates(e.target.value)
  }

  return (
    <Container>
      <input type="search" value={value} placeholder={placeholder}  onChange={(e) => searchInput(e)} />
      <button>
        <BsSearch />
      </button>
    </Container>
  );
}