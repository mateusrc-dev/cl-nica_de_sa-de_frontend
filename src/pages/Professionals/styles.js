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
  header {
    position: absolute;
    width: 100%;
    display: flex;
    background: ${({ theme }) => theme.COLORS.WHITE_100};
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.BLUE_100};
    padding: 0;
    align-items: center;
    height: 50px;
    justify-content: space-between;
    border-radius: 100%;
  }
  h1 {
    padding-left: 120px;
    display: flex;
    gap: 10px;
    font-size: 24px;
    font-family: "Rubik Marker Hatch", cursive;
    color: ${({ theme }) => theme.COLORS.BLUE_100};
    font-weight: normal;
    font-style: italic;
  }
  nav {
    padding-right: 120px;
  }
  nav ul {
    display: flex;
    gap: 10px;
  }
  nav ul li {
    list-style-type: none;
    margin-top: 5px;
  }
  nav ul li:hover {
    text-decoration: underline;
    cursor: pointer;
    font-style: italic;
  }
  .professions {
    display: flex;
    align-items: center;
    padding: 0 120px;
    background: ${({ theme }) => theme.COLORS.WHITE_100};
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.BLUE_100};
    height: 100px;
    border-radius: 30%;
  }
  .professions ul {
    margin-top: 50px;
    display: flex;
    gap: 100px;
  }
  .professions ul li {
    list-style-type: none;
  }
  .professions ul li:hover {
    text-decoration: underline;
    cursor: pointer;
    font-style: italic;
  }
`;
