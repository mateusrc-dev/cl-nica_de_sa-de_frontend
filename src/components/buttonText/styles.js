import styled from "styled-components";

export const Container = styled.div`
  button {
    background: none;
    color: ${({ theme }) => theme.COLORS.BLUE_100};
    border: none;
    font-size: 20px;
    font-style: italic;
    display: flex;
    align-items: center;
  }
  button:hover {
    text-decoration: underline;
  }
`;
