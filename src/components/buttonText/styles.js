import styled from "styled-components";

export const Container = styled.div`
  button {
    background: none;
    color: ${({ theme }) => theme.COLORS.BLUE_100};
    border: none;
    font-size: 20px;
    display: flex;
    align-items: center;
    gap: 5px;
    svg {
      font-size: 30px;
      color: ${({ theme }) => theme.COLORS.BLUE_100};
    }
  }
  button:hover {
    text-decoration: underline;
    font-style: italic;
  }
`;
