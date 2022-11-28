import { Container } from "./styles";

export function Section({ children }) {
  return (
    <Container>
      <div className="row"></div>
      <main>{children}</main>
      <div className="row"></div>
    </Container>
  );
}
