import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 100px auto 70px;
  grid-template-areas: "header" "content" "footer";
`;

export const Main = styled.main`
  position: relative;
  width: 100%;
  height: 100%;
  grid-area: content;
  overflow-y: auto;
  padding: 0 120px;
  .main {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    margin-bottom: 20px;
  }
  h1 {
    font-style: italic;
    margin-top: 20px;
  }
  p {
    margin-bottom: 20px;
  }
  .svg {
    position: absolute;
    display: flex;
    filter:drop-shadow(2px 2px 5px black);
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
      border: 1px solid ${({theme}) => theme.COLORS.BLUE_100}
    }
  }
  .details {
    display: flex;
    flex-direction: column;
    .last {
      margin-bottom: 10px;
    }
  }
  
`;
