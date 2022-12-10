import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding: 0;
  display: flex;
`;

export const Main = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 100px;
  justify-content: center;
  background: ${({ theme }) => theme.COLORS.BACKGROUND_000};
  background-size: 300% 300%;
  animation: colors 15s ease infinite alternate-reverse;
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
  .svg {
    font-size: 20px;
  }
  svg {
    font-size: 250px;
  }
  .nameUser {
    display: flex;
    gap: 10px;
    font-size: 30px;
    animation: nameUser 1s ease;
  }
  @keyframes nameUser {
    0% {
      transform: translateY(30px);
      opacity: 0;
    }

    100% {
      transform: translateY(0px);
      opacity: 1;
    }
  }
  .welcome h1 {
    font-size: 100px;
    display: flex;
    align-items: center;
    gap: 20px;
    font-style: italic;
    animation: welcome 1s ease;
  }
  @keyframes welcome {
    0% {
      transform: scale(1.5);
      opacity: 0;
    }

    100% {
      transform: scale(1.0);
      opacity: 1;
    }
  }
  .clinicName {
    display: flex;
    align-items: center;
    font-family: "Rubik Marker Hatch", cursive;
    font-weight: normal;
    font-style: italic;
    gap: 5px;
  }
`;
