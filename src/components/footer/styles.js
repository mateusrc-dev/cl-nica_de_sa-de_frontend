import styled from "styled-components";

export const Container = styled.footer`
  grid-area: footer;
  width: 100%;
  height: 70px;
  background: ${({ theme }) => theme.COLORS.BACKGROUND_300};
  color: ${({ theme }) => theme.COLORS.WHITE};
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 50px;
  border-top: 1px solid ${({ theme }) => theme.COLORS.WHITE};
  box-shadow: 2px -2px 10px 5px rgba(0, 0, 0, 0.5);
  padding: 0 120px;
  .span {
    font-size: 16px;
    color: ${({ theme }) => theme.COLORS.BLUE_100};
  }
  .logo {
    display: flex;
    align-items: center;
    gap: 15px;
    white-space: nowrap;
    .logoText {
      display: flex;
      flex-direction: column;
      text-align: end;
    }
    svg {
      width: 30px;
      height: 30px;
      color: ${({ theme }) => theme.COLORS.BLUE_100};
    }
    h1 {
      font-size: 24px;
      font-family: "Rubik Marker Hatch", cursive;
      color: ${({ theme }) => theme.COLORS.BLUE_100};
      font-weight: normal;
      font-style: italic;
    }
    p {
      font-size: 10px;
      color: ${({ theme }) => theme.COLORS.BLUE_100};
      margin-top: -5px;
      font-weight: bold;
      font-style: italic;
    }
  }
`;
