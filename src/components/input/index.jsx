import { Container } from "./styles";

export function Input({ children, placeholder, id }) {
  return (
    <Container>
      {children}
      <input type="text" id={id} placeholder={placeholder} />
    </Container>
  );
}
