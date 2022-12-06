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
  width: 100%;
  height: 100%;
  overflow-y: auto;
  padding: 0 0 0 120px;
  display: grid;
  grid-template-columns: 60% 40%;
  grid-template-areas: "columnOne columnTwo";
  .modal {
    width: 100%;
    position: absolute;
    z-index: 4;
    top: 0;
    left: 0;
    height: 100vh;
    background: rgba(212, 221, 255, 0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    .modalContent {
      position: relative;
      width: 100%;
      margin: 50px;
      background: ${({ theme }) => theme.COLORS.WHITE};
      border: 1px solid ${({ theme }) => theme.COLORS.BLUE_100};
      border-radius: 10px;
    }
    .modalContent div {
      width: 100%;
      height: 100%;
      padding: 100px 200px;
      font-size: 24px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 20px;
      text-align: justify;
    }
    .modalContent div textarea {
      resize: none;
      padding: 20px;
      color: ${({ theme }) => theme.COLORS.BLUE_100};
      background: ${({ theme }) => theme.COLORS.WHITE};
      border: 1px solid ${({ theme }) => theme.COLORS.WHITE};
      border-radius: 10px;
      box-shadow: inset 2px 2px 10px 0px rgba(0, 0, 0, 0.5);
      &::placeholder {
        color: ${({ theme }) => theme.COLORS.BLUE_200};
      }
    }
    .modalContent div svg {
      position: static;
      font-size: 90px;
    }
    .modalContent .stars {
      display: flex;
      gap: 10px;
      button {
        background: none;
        border: none;
        transition: all 0.3s;
      }
      button:hover {
        transform: scale(1.3);
      }
    }
    .modalContent .stars svg {
      position: static;
      font-size: 30px;
      color: ${({ theme }) => theme.COLORS.BLUE_100};
    }
    .modalContent .close {
      position: absolute;
      top: 10px;
      right: 10px;
      background: none;
      border: none;
    }
    .modalContent .close svg {
      color: ${({ theme }) => theme.COLORS.BLUE_100};
      font-size: 35px;
    }
    .modalContent button svg {
      position: static;
    }
  }
  .none {
    display: none;
  }
  .columnOne {
    grid-area: columnOne;
    margin-top: 25px;
  }
  h2 {
    display: flex;
    align-items: center;
    gap: 20px;
    margin-top: 20px;
    span {
      display: flex;
      align-items: center;
    }
    button {
      display: flex;
      background: none;
      border: none;
      gap: 5px;
      color: ${({ theme }) => theme.COLORS.BLUE_100};
      font-size: 30px;
    }
  }
  .main {
    display: flex;
    align-items: center;
    gap: 20px;
    margin-top: 20px;
    margin-bottom: 20px;
    img {
      width: 250px;
      height: 250px;
      border: 1px solid ${({ theme }) => theme.COLORS.BLUE_100};
      border-radius: 50%;
    }
    .Description {
      display: flex;
      max-height: 250px;
      width: 100%;
    }
    .description {
      display: flex;
      overflow-y: auto;
      flex-direction: column;
      gap: 20px;
      .favorite {
        background: none;
        border: none;
        font-size: 25px;
        margin-right: 10px;
        color: ${({ theme }) => theme.COLORS.BLUE_100};
        transition: all 0.5s;
      }
      .favorite:hover {
        transform: scale(1.2);
      }
    }
    .description::-webkit-scrollbar {
      width: 18px;
    }
    .description::-webkit-scrollbar-thumb {
      background: ${({ theme }) => theme.COLORS.BLUE_200};
      border-radius: 20px;
      width: 1px;
      background-clip: padding-box;
      border: 5px solid rgba(0, 0, 0, 0);
    }
    .description::-webkit-scrollbar-thumb:hover {
      background-color: ${({ theme }) => theme.COLORS.BLUE_100};
      border-radius: 20px;
      width: 1px;
      background-clip: padding-box;
      border: 5px solid rgba(0, 0, 0, 0);
    }
    .description p {
      font-size: 20px;
      font-weight: 800;
      text-align: justify;
    }
    h1 {
      white-space: nowrap;
      font-style: italic;
      display: flex;
      justify-content: space-between;
    }
    .tags {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
    }
  }
  .container {
    position: relative;
    width: 100%;
  }
  .left {
    position: absolute;
    width: 50px;
    height: 100%;
    left: 0;
    background: ${({ theme }) => theme.COLORS.BACKGROUND_200};
    border-radius: 10px 0 0 10px;
  }
  .right {
    position: absolute;
    width: 50px;
    height: 100%;
    right: 0;
    background: ${({ theme }) => theme.COLORS.BACKGROUND_100};
    border-radius: 0px 10px 10px 0px;
  }
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
  .columnTwo {
    grid-area: columnTwo;
    padding-left: 30px;
    button {
      font-size: 30px;
      background: none;
      border: none;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
    button:first-child {
      margin-bottom: -7px;
    }
    .buttons {
      margin-top: 30px;
      display: flex;
      flex-direction: column;
    }
    .depositions {
      margin-top: -20px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      h2 {
        color: ${({ theme }) => theme.COLORS.WHITE};
      }
    }
    .Buttons {
      display: flex;
      gap: 10px;
    }
    .containerDepositions {
      border-left: 1px solid ${({ theme }) => theme.COLORS.WHITE};
      box-shadow: 2px 2px 10px 5px rgba(0, 0, 0, 0.5);
      background: ${({ theme }) => theme.COLORS.BACKGROUND_500};
      height: 100%;
      padding: 10px;
      .Depositions {
        height: 453px;
        display: flex;
        flex-direction: column;
        overflow-y: hidden;
        scroll-behavior: smooth;
        width: 100%;
        border-radius: 10px;
      }
      .Deposition {
        display: flex;
        flex-direction: column;
        .none {
          display: none;
        }
      }

      .Container {
        position: relative;
        width: 100%;
      }
      .top {
        position: absolute;
        width: 100%;
        height: 50px;
        top: 0;
        background: ${({ theme }) => theme.COLORS.BACKGROUND_1000};
        border-radius: 10px 10px 0 0;
      }
      .bottom {
        position: absolute;
        width: 100%;
        height: 50px;
        bottom: 0;
        background: ${({ theme }) => theme.COLORS.BACKGROUND_1100};
        border-radius: 0 0 10px 10px;
      }
      .testimony {
        background: ${({ theme }) => theme.COLORS.WHITE};
        border: 1px solid ${({ theme }) => theme.COLORS.WHITE};
        box-shadow: inset 2px 2px 10px 5px rgba(0, 0, 0, 0.5);
        border-radius: 10px;
        display: flex;
        gap: 20px;
        align-items: center;
        padding: 20px;
        margin-bottom: 10px;
        img {
          width: 100px;
          height: 100px;
          border-radius: 50%;
          border: 1px solid ${({ theme }) => theme.COLORS.BLUE_100};
        }
        span:nth-child(1) {
          font-style: italic;
        }
        span:nth-child(2) {
          font-style: italic;
          margin-left: 20px;
          font-weight: bold;
          font-size: 20px;
        }
        p {
          text-align: justify;
        }
        .edit {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-left: 90%;
          font-size: 25px;
        }
        .edit:hover {
          border: 1px solid ${({ theme }) => theme.COLORS.BLUE_100};
          border-radius: 5px;
        }
      }
      .createTestimony {
        background: ${({ theme }) => theme.COLORS.WHITE};
        border: 1px solid ${({ theme }) => theme.COLORS.WHITE};
        box-shadow: inset 2px 2px 10px 5px rgba(0, 0, 0, 0.5);
        border-radius: 10px;
        display: flex;
        gap: 20px;
        align-items: center;
        padding: 20px;
        margin-bottom: 10px;
        font-style: italic;
        text-align: justify;
        button {
          background: ${({ theme }) => theme.COLORS.BLUE_100};
          font-size: 16px;
        }
        svg {
          font-size: 100px;
        }
      }
    }
  }
`;
