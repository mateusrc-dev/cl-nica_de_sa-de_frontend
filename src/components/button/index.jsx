import { Container } from "./styles";

export function Button({ children, loading }) {
  return (
    <Container type="button" disabled={loading}>
      {loading ? "Carregando..." : children}
    </Container>
  );
}
