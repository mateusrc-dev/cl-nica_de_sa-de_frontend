import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 100px auto 70px;
  grid-template-areas: "header" "content" "footer";
`;

export const Main = styled.main`
  width: 100%;
  height: 100%;
  grid-area: content;
  overflow-y: auto;
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
    height: 250px;
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
    .last {
      margin-bottom: 10px;
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
`;
