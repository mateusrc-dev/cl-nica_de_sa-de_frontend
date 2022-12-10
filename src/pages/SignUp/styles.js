import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding: 0;
  display: grid;
  grid-template-rows: 50px auto 50px;
  grid-template-areas: "header" "content" "footer";
`;

export const Main = styled.main`
  .main {
    grid-area: content;
    width: 100%;
    height: 100%;
    overflow-y: auto;
    display: flex;
    align-items: center;
    gap: 100px;
    justify-content: center;
    background:  ${({ theme }) => theme.COLORS.BACKGROUND_000};
    background-size: 300% 300%;
    animation: colors 15s ease infinite alternate-reverse;
  }
  @keyframes colors {
    0% {
      background-position: 0% 50%;
    }

    50% {
      background-position: 50% 100%;
    }

    75% {
      background-position: 100% 50%;
    }

    100% {
      background-position: 50% 0%;
    }
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
      width: 100px;
      height: 100px;
      color: ${({ theme }) => theme.COLORS.BLUE_100};
    }
    h1 {
      font-size: 50px;
      font-family: "Rubik Marker Hatch", cursive;
      color: ${({ theme }) => theme.COLORS.BLUE_100};
      font-weight: normal;
      font-style: italic;
    }
    p {
      font-size: 20px;
      color: ${({ theme }) => theme.COLORS.BLUE_100};
      margin-top: -5px;
      font-weight: bold;
      font-style: italic;
    }
  }
  .content {
    width: 500px;
    height: 400px;
    padding: 50px;
    border: 1px solid ${({ theme }) => theme.COLORS.BLUE_100};
    display: flex;
    align-items: center;
    justify-content: center;
    .choice {
      padding: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 20px;
      h2 {
        font-size: 20px;
        font-style: italic;
        text-align: justify;
      }
      svg {
        font-size: 200px;
      }
    }
    .loginClient {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 20px;
      h1 {
        gap: 5px;
        font-size: 20px;
        display: flex;
        align-items: center;
      }
      a {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 5px;
      }
    }
    .none {
      display: none;
    }
  }
`;

export const Header = styled.header`
   grid-area: header;
  width: 100%;
  height: 50px;
  background: ${({ theme }) => theme.COLORS.BACKGROUND_500};
  display: flex;
  align-items: center;
  a {
    margin: 50px;
    display: flex;
    align-items: center;
    gap: 10px;
    color: ${({ theme }) => theme.COLORS.BLUE_100};
  }
  a:hover {
    font-style: italic;
    text-decoration: underline;
  }
`;

export const Footer = styled.header`
  grid-area: footer;
  width: 100%;
  height: 50px;
  background: ${({ theme }) => theme.COLORS.BACKGROUND_300};
`;
