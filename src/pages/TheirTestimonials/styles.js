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
  .textButton {
    margin-top: 20px;
  }
  .main {
    display: flex;
    gap: 20px;
    flex-direction: column;
    margin-bottom: 20px;
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
    fill: ${({ theme }) => theme.COLORS.WHITE};
  }
  .scheduling {
    position: relative;
    display: flex;
    align-items: center;
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
    .testimonial {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      margin-bottom: 10px;
      textarea {
        resize: none;
        padding: 10px;
        color: ${({ theme }) => theme.COLORS.BLUE_100};
        width: 820px;
        background: ${({ theme }) => theme.COLORS.WHITE};
        border: 1px solid ${({ theme }) => theme.COLORS.WHITE};
        border-radius: 10px;
        box-shadow: inset 2px 2px 10px 0px rgba(0, 0, 0, 0.5);
        &::placeholder {
          color: ${({ theme }) => theme.COLORS.BLUE_200};
        }
      }
    }
    span {
      display: flex;
      align-items: center;
      gap: 5px;
    }
    .stars button {
      background: none;
      border: none;
    }
    .stars button svg {
      color: ${({ theme }) => theme.COLORS.BLUE_100};
      transition: all 0.3s;
    }
    .stars button svg:hover {
      transform: scale(1.2);
    }
  }
`;
