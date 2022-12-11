import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.COLORS.WHITE};
  border: 1px solid ${({ theme }) => theme.COLORS.WHITE};
  border-radius: 10px;
  box-shadow: inset 2px 2px 10px 0px rgba(0, 0, 0, 0.5);
  button {
    width: 10%;
    height: 100%;
    background: ${({ theme }) => theme.COLORS.BACKGROUND_300};
    border: none;
    border-radius: 0 10px 10px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }
  input {
    width: 100%;
    background: none;
    border: none;
    color: ${({ theme }) => theme.COLORS.BLUE_100};
    padding: 10px;
  }
  input::placeholder {
    color: ${({ theme }) => theme.COLORS.BLUE_200};
    font-style: italic;
    font-weight: bold;
  }
`;
