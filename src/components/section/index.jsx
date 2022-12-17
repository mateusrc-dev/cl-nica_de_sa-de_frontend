import { Container } from "./styles";

export function Section({ children }) {
  return (
    <Container>
      <div className="row"></div>
      {children}
      <div className="row"></div>
    </Container>
  );
}
