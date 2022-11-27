import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding: 0;
  display: grid;
  grid-template-rows: 100px auto 70px;
  grid-template-areas: "header" "content" "footer";
`;

export const Main = styled.div`
  grid-area: content;
  height: 100%;
  overflow-y: auto;
  span {
    font-size: 24px;
    font-weight: 800;
    text-align: justify;
  }
`;
