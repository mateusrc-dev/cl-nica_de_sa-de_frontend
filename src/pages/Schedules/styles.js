import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 100px auto 70px;
  grid-template-areas: "header" "content" "footer";
`;

export const Main = styled.main`
  display: flex;
  width: 100%;
  justify-content: space-around;
  padding: 0 50px;
  gap: 10px;
  .columnOne {
    width: 350px;
    border-right: 1px solid ${({ theme }) => theme.COLORS.BLUE_100};
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.BLUE_100};
    border-left: 1px solid ${({ theme }) => theme.COLORS.BLUE_100};
    height: 400px;
    padding: 10px;
    background: ${({ theme }) => theme.COLORS.BACKGROUND_1100};
    border-radius: 0px 0px 200px 10px;
    box-shadow: 5px 5px 5px 1px rgba(0, 0, 0, 0.5);
    h1 {
      display: flex;
      align-items: center;
      gap: 10px;
      font-style: italic;
      margin-top: 10px;
      margin-bottom: 10px;
    }
    p {
      font-size: 20px;
      font-style: italic;
      margin-bottom: 10px;
    }
    ul {
      list-style: none;
      text-align: justify;
    }
  }
  width: 100%;
  height: 100%;
  grid-area: content;
  overflow-y: auto;
`;
