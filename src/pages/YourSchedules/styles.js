import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 100px auto 70px;
  grid-template-areas: "header" "content" "footer";
  main::-webkit-scrollbar {
    width: 15px;
    background: ${({ theme }) => theme.COLORS.BACKGROUND_1100};
    border-left: 1px solid ${({ theme }) => theme.COLORS.BLUE_200};
  }
  main::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.COLORS.BACKGROUND_400};
    border-radius: 0px;
    width: 0px;
    background-clip: padding-box; /*para as bordas ficarem transparentes e com isso dar a impressão que tem uma margem nos lados da borda*/
    border: 3px solid transparent;
  }
  main::-webkit-scrollbar-thumb:hover {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_500};
    border-radius: 0px;
    width: 0px;
    background-clip: padding-box; /*para as bordas ficarem transparentes e com isso dar a impressão que tem uma margem nos lados da borda*/
    border: 1px solid transparent;
  }

  main {
  width: 100%;
  height: 100%;
  grid-area: content;
  overflow-y: auto;
  padding: 0 120px;
  .modal {
    width: 100%;
    position: absolute;
    z-index: 5;
    top: 0;
    left: 0;
    height: 100vh;
    background: rgba(212, 221, 255, 0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 50px;
    .modalContent {
      position: relative;
      width: 100%;
      padding: 50px;
      background: ${({ theme }) => theme.COLORS.WHITE};
      border: 1px solid ${({ theme }) => theme.COLORS.BLUE_100};
      border-radius: 10px;
    }
    .modalContent div {
      width: 100%;
      height: 100%;
    }
    .modalContent h2 {
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .modalContent .buttons button {
      background: none;
      border: none;
    }
    .modalContent .buttons button svg {
      font-size: 30px;
      color: ${({ theme }) => theme.COLORS.BLUE_100};
    }
    .modalContent .close {
      position: absolute;
      top: 10px;
      right: 10px;
      background: none;
      border: none;
    }
    .modalContent .close svg {
      color: ${({ theme }) => theme.COLORS.BLUE_100};
      font-size: 35px;
    }
    .container {
      position: relative;
      width: 100%;
    }
    .left {
      position: absolute;
      max-width: 50px;
      height: 100%;
      left: 0;
      background: ${({ theme }) => theme.COLORS.BACKGROUND_200};
      border-radius: 10px 0 0 10px;
    }
    .right {
      position: absolute;
      max-width: 50px;
      height: 100%;
      right: 0;
      background: ${({ theme }) => theme.COLORS.BACKGROUND_100};
      border-radius: 0px 10px 10px 0px;
    }
    .schedules {
      display: flex;
      overflow-x: hidden;
      scroll-behavior: smooth;
      width: 100%;
      border-radius: 10px;
      background: ${({ theme }) => theme.COLORS.BACKGROUND_500};
      margin-top: 20px;
    }
    .Schedules {
      display: flex;
      flex-direction: row;
      gap: 20px;
    }
    .query {
      width: 250px;
      padding: 10px;
      border-radius: 10px;
      border: 2px solid ${({ theme }) => theme.COLORS.BLUE_100};
      color: ${({ theme }) => theme.COLORS.WHITE};
      background: ${({ theme }) => theme.COLORS.BACKGROUND_400};
    }
  }
  .none {
    display: none;
  }
  section {
    position: relative;
  }
  .textButton {
    margin-top: 20px;
  }
  .main {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    margin-bottom: 20px;
    align-items: flex-start;
    justify-content: space-around;
  }
  h1 {
    font-style: italic;
    margin-top: 20px;
    display: flex;
    align-items: center;
    gap: 10px;
  }
  p {
    margin-bottom: 20px;
  }
  .svg {
    position: absolute;
    display: flex;
    filter: drop-shadow(2px 2px 2px black);
  }
  .scheduling {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    width: 500px;
    height: 350px;
    background: transparent;
    img {
      width: 200px;
      height: 200px;
      border-radius: 50%;
      border: 1px solid ${({ theme }) => theme.COLORS.BLUE_100};
    }
  }
  .details {
    display: flex;
    flex-direction: column;
    width: 200px;
    .last {
      margin-bottom: 10px;
    }
    .justification {
      overflow-y: scroll;
      height: 70px;
    }
    .justification::-webkit-scrollbar {
      width: 10px;
      background: ${({ theme }) => theme.COLORS.BACKGROUND_1100};
    }
    .justification::-webkit-scrollbar-thumb {
      background: ${({ theme }) => theme.COLORS.BACKGROUND_400};
      border-radius: 0px;
      width: 0px;
      background-clip: padding-box; /*para as bordas ficarem transparentes e com isso dar a impressão que tem uma margem nos lados da borda*/
      border: 0px solid rgba(0, 0, 0, 0);
    }
    .justification::-webkit-scrollbar-thumb:hover {
      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_500};
      border-radius: 0px;
      width: 0px;
      background-clip: padding-box; /*para as bordas ficarem transparentes e com isso dar a impressão que tem uma margem nos lados da borda*/
      border: 0px solid rgba(0, 0, 0, 0);
    }
    .buttons {
      display: flex;
      flex-direction: column;
      gap: 10px;
      width: 200px;
    }
  }
}
`;

