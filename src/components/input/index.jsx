import { Container } from "./styles";

export function Input({ children, placeholder, id, type = "text", ...rest }) {
  return (
    <Container>
      {children}
      <input id={id} type={type} placeholder={placeholder} {...rest} />
    </Container>
  );
}
