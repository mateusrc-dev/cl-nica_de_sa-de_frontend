import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ theme, isNew }) =>
    isNew ? "transparent" : theme.COLORS.WHITE};
  color: ${({ theme }) => theme.COLORS.BLUE_100};
  border: ${({ theme, isNew }) =>
    isNew ? `1px dashed ${theme.COLORS.BLUE_100}` : "none"};
  border-radius: 10px;
  padding-right: 10px;
  box-shadow: inset 2px 2px 10px 0px rgba(0, 0, 0, 0.5);
  button {
    border: none;
    background: none;
  }
  .button-delete {
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }
  .button-add {
    color: ${({ theme }) => theme.COLORS.BLUE_100};
  }
  input {
    height: 30px;
    width: 100%;
    padding: 12px;
    color: ${({ theme }) => theme.COLORS.BLUE_100};
    background: transparent;
    border: none;
    &::placeholder {
      color: ${({ theme }) => theme.COLORS.BLUE_200};
    }
  }
`;
