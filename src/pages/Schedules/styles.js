import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 100px auto 70px;
  grid-template-areas: "header" "content" "footer";

  main::-webkit-scrollbar {
    width: 10px;
    background: ${({ theme }) => theme.COLORS.BACKGROUND_1100};
  }
  main::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.COLORS.BACKGROUND_400};
    border-radius: 0px;
    width: 0px;
    background-clip: padding-box; /*para as bordas ficarem transparentes e com isso dar a impressão que tem uma margem nos lados da borda*/
    border: 0px solid rgba(0, 0, 0, 0);
  }
  main::-webkit-scrollbar-thumb:hover {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_500};
    border-radius: 0px;
    width: 0px;
    background-clip: padding-box; /*para as bordas ficarem transparentes e com isso dar a impressão que tem uma margem nos lados da borda*/
    border: 0px solid rgba(0, 0, 0, 0);
  }
  main {
    display: flex;
    width: 100%;
    justify-content: space-around;
    padding: 0 50px;
    gap: 10px;
    height: 100%;
    grid-area: content;
    overflow-y: auto;
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
  }
`;
