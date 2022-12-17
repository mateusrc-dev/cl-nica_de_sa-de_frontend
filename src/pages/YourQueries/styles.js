import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 100px auto 70px;
  grid-template-areas: "header" "content" "footer";
  overflow: hidden;
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
    overflow-y: auto;
    width: 100%;
    height: 100%;
    grid-area: content;
    padding: 0 120px;
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
  .section {
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
    margin-top: 10px;
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
    left: -20px;
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
    max-width: 200px;
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
      flex-direction: row;
      gap: 10px;
      width: 200px;
    }
    .complaint {
      overflow-y: scroll;
      height: 80px;
      width: 250px;
      margin-top: 10px;
      margin-bottom: 10px;
    }
    .complaint::-webkit-scrollbar {
      width: 10px;
      background: ${({ theme }) => theme.COLORS.BACKGROUND_1100};
    }
    .complaint::-webkit-scrollbar-thumb {
      background: ${({ theme }) => theme.COLORS.BACKGROUND_400};
      border-radius: 0px;
      width: 0px;
      background-clip: padding-box; /*para as bordas ficarem transparentes e com isso dar a impressão que tem uma margem nos lados da borda*/
      border: 0px solid rgba(0, 0, 0, 0);
    }
    .complaint::-webkit-scrollbar-thumb:hover {
      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_500};
      border-radius: 0px;
      width: 0px;
      background-clip: padding-box; /*para as bordas ficarem transparentes e com isso dar a impressão que tem uma margem nos lados da borda*/
      border: 0px solid rgba(0, 0, 0, 0);
    }
  }
`;
