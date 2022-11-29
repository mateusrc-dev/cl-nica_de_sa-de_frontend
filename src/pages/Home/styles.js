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
  .row {
    border: 1px solid ${({ theme }) => theme.COLORS.BLUE_100};
    border-left: none;
    border-top: none;
    border-bottom: none;
    height: 30px;
  }
  .rowTwo {
    border-top: 3px solid ${({ theme }) => theme.COLORS.BLUE_100};
    border-left: none;
    border-right: none;
    border-bottom: 3px solid ${({ theme }) => theme.COLORS.BLUE_100};
    border-radius: 50px;
    background: ${({ theme }) => theme.COLORS.BLUE_100};
    margin: 20px 0;
  }
  header {
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
  .sections {
    padding: 0 120px;
  }
  .section {
    display: grid;
    grid-template-columns: 60% 40%;
    grid-template-areas: "text images";
    gap: 20px;
  }
  .text {
    grid-area: text;
    h2 {
      font-style: italic;
      font-size: 30px;
      margin-bottom: 20px;
    }
    p {
      font-size: 25px;
      text-align: justify;
    }
  }
  .grid {
    grid-area: images;
    display: grid;
    align-items: flex-start;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-template-areas:
      "A B"
      "A D"
      "C D";
    img {
      width: 220px;
      height: auto;
      border-radius: 10px;
      object-fit: cover;
      filter: brightness(0.5);
      transition: all 1s;
      position: relative;
    }
    img:hover {
      transform: scale(1.1);
      filter: brightness(1);
    }
    .imgOne {
      position: relative;
      grid-area: A;
    }
    .imgTwo {
      position: relative;
      grid-area: B;
    }
    .imgThree {
      position: relative;
      grid-area: C;
    }
    .imgFour {
      position: relative;
      grid-area: D;
    }
    span {
      position: absolute;
      font-weight: bold;
      background: ${({ theme }) => theme.COLORS.WHITE};
      color: ${({ theme }) => theme.COLORS.BLUE_100};
      border: 1px solid ${({ theme }) => theme.COLORS.WHITE};
      box-shadow: inset 2px 2px 5px 1px rgba(0, 0, 0, 0.5);
      padding: 5px 10px;
      border-radius: 50px;
      right: 40px;
      top: 10px;
    }
  }
`;
