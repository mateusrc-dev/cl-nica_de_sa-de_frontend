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
  .active {
    font-style: italic;
    text-decoration: underline;
  }
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
    border-radius: 10% 10% 10% 10% / 0% 0% 100% 100%;
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
    grid-template-columns: 50% 50%;
    grid-template-areas: "text images";
    gap: 20px;
    align-items: center;
  }
  .text {
    grid-area: text;
    h2 {
      font-style: italic;
      font-size: 30px;
      margin-bottom: 20px;
    }
    p {
      font-size: 20px;
      text-align: justify;
    }
  }
  .Grid {
    width: 550px;
    margin: auto;
    grid-area: images;
  }
  .grid {
    display: grid;
    align-items: flex-start;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 10px;
    grid-template-areas:
      "A B D"
      "A C D";
    img {
      max-width: 170px;
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
      margin-top: 7px;
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
      right: 10%;
      top: 10px;
    }
  }
  .sectionTwo {
    display: flex;
    gap: 20px;
    align-items: center;
  }
  .textTwo {
    h2 {
      font-style: italic;
      font-size: 30px;
      margin-bottom: 20px;
    }
    p {
      font-size: 20px;
      text-align: justify;
    }
  }
  .slider {
    margin: auto;
  }
  .image {
    position: relative;
  }
  .img {
    width: 300px;
    height: 300px;
    border: 1px solid ${({ theme }) => theme.COLORS.WHITE};
    border-radius: 10px;
    box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.5);
  }
  .image button {
    position: absolute;
    font-weight: bold;
    background: ${({ theme }) => theme.COLORS.WHITE};
    border: 1px solid ${({ theme }) => theme.COLORS.WHITE};
    box-shadow: inset 2px 2px 5px 1px rgba(0, 0, 0, 0.5);
    padding: 5px 10px;
    border-radius: 50px;
    right: 10px;
    top: 10px;
    transition: all 0.5s;
  }
  .image button:hover {
    transform: scale(1.05);
  }
  .swiper {
    width: 475px;
  }
  .swiper-slide {
    display: flex;
    justify-content: center;
  }
  .swiper-pagination-bullet-active {
    background: ${({ theme }) => theme.COLORS.WHITE};
    border: 1px solid ${({ theme }) => theme.COLORS.WHITE};
    box-shadow: inset 2px 2px 5px 1px rgba(0, 0, 0, 0.5);
    padding: 5px;
    border-radius: 50%;
  }
  .swiper-button-prev {
    color: ${({ theme }) => theme.COLORS.BACKGROUND_400};
    background: ${({ theme }) => theme.COLORS.WHITE};
    border: 1px solid ${({ theme }) => theme.COLORS.WHITE};
    box-shadow: inset 2px 2px 5px 1px rgba(0, 0, 0, 0.5);
    width: 40px;
    height: 60px;
    border-radius: 10px;
  }
  .swiper-button-next {
    color: ${({ theme }) => theme.COLORS.BACKGROUND_400};
    background: ${({ theme }) => theme.COLORS.WHITE};
    border: 1px solid ${({ theme }) => theme.COLORS.WHITE};
    box-shadow: inset 2px 2px 5px 1px rgba(0, 0, 0, 0.5);
    width: 40px;
    height: 60px;
    border-radius: 10px;
  }
}
`;