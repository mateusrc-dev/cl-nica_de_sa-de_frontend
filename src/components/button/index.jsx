import { Container } from "./styles";

export function Button({ children, loading, ...rest }) {
  return (
    <Container type="button" disabled={loading} {...rest}>
      {loading ? "Carregando..." : children}
    </Container>
  );
}
