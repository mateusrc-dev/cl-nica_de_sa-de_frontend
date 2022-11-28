import { Container } from "./styles";

export function ButtonText({ children }) {
  return (
    <Container>
      <button>{children}</button>
    </Container>
  );
}
