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
  .active {
    font-style: italic;
    text-decoration: underline;
  }
  header {
    position: absolute;
    z-index: 2;
    width: 100%;
    display: flex;
    background: ${({ theme }) => theme.COLORS.WHITE_100};
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.BLUE_100};
    padding: 0;
    align-items: center;
    height: 50px;
    justify-content: space-between;
    border-radius: 10% 10% 10% 10% / 0% 0% 100% 100%;
    //clip-path: polygon(0% 0%, 100% 0%, 100% 0%, 95% 100%, 5% 100%, 0% 0%);
    box-shadow: 2px 2px 5px 1px rgba(0, 0, 0, 0.5);
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
    position: absolute;
    z-index: 1;
    display: flex;
    width: 100%;
    align-items: center;
    padding: 0 120px;
    background: ${({ theme }) => theme.COLORS.WHITE_100};
    border: 0px solid ${({ theme }) => theme.COLORS.BLUE_100};
    height: 100px;
    clip-path: polygon(0% 0%, 100% 0%, 100% 0%, 90% 100%, 0% 100%, 0% 0%);
    //border-radius: 0 0 50% 0%;
  }
  .professions ul {
    width: 1000px;
    margin-top: 50px;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  .professions ul li {
    list-style-type: none;
  }
  .professions ul li:hover {
    text-decoration: underline;
    cursor: pointer;
    font-style: italic;
  }
  .tags {
    background: ${({ theme }) => theme.COLORS.WHITE_100};
    border-right: 1px solid ${({ theme }) => theme.COLORS.BLUE_100};
    border-top: 1px solid ${({ theme }) => theme.COLORS.BLUE_100};
    margin-top: 100px;
    height: 350px;
    width: 300px;
    border-radius: 0 0 40% 0;
  }
  .tags h2 {
    position: absolute;
    margin-top: 20px;
    margin-left: 125px;
  }
  .tags ul {
    position: absolute;
    margin-top: 60px;
    margin-left: 70px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    overflow-y: auto;
    height: 250px;
  }
  .tags ul::-webkit-scrollbar {
    width: 18px;
  }
  .tags ul::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.COLORS.BLUE_200};
    border-radius: 20px;
    width: 1px;
    background-clip: padding-box;
    border: 5px solid rgba(0, 0, 0, 0);
  }
  .tags ul::-webkit-scrollbar-thumb:hover {
    background-color: ${({ theme }) => theme.COLORS.BLUE_100};
    border-radius: 20px;
    width: 1px;
    background-clip: padding-box;
    border: 5px solid rgba(0, 0, 0, 0);
  }
  .tags ul li {
    color: 1px solid ${({ theme }) => theme.COLORS.BLUE_100};
    list-style-type: none;
  }
  .tags ul li:hover {
    text-decoration: underline;
    cursor: pointer;
    font-style: italic;
  }
  .professionals {
    position: absolute;
    top: 120px;
    left: 320px;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }
  .professional {
    background: ${({ theme }) => theme.COLORS.WHITE_100};
    border: 1px solid ${({ theme }) => theme.COLORS.WHITE};
    box-shadow: inset 2px 2px 5px 1px rgba(0, 0, 0, 0.5);
    position: relative;
    padding: 20px;
    width: 300px;
    height: 350px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    border-radius: 5px 5px 20% 5px;
    h3 {
      font-size: 16px;
      display: flex;
      align-items: center;
      gap: 5px;
    }
    span:last-child {
      display: flex;
      align-items: center;
      font-weight: normal;
      font-style: italic;
    }
    img {
      width: 150px;
      height: 150px;
      border-radius: 50%;
    }
    p {
      display: -webkit-box;
      text-overflow: ellipsis;
      overflow: hidden;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
    .favorite {
      position: absolute;
      top: 10px;
      right: 10px;
      background: none;
      border: none;
      color: ${({ theme }) => theme.COLORS.BLUE_100};
      font-size: 30px;
      transition: all 0.3s;
    }
    .favorite:hover {
      transform: scale(1.3);
    }
  }
`;
