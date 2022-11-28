import styled from "styled-components";

export const Container = styled.div`
  position: relative;
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
  .columnOne {
    grid-area: columnOne;
  }
  .row {
    border-top: 3px solid ${({ theme }) => theme.COLORS.BLUE_100};
    border-left: none;
    border-right: none;
    border-bottom: 3px solid ${({ theme }) => theme.COLORS.BLUE_100};
    border-radius: 50px;
    background: ${({ theme }) => theme.COLORS.BLUE_100};
  }
  .row:first-child {
    margin-top: 40px;
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
    .tag {
      background: ${({ theme }) => theme.COLORS.BACKGROUND_400};
      color: ${({ theme }) => theme.COLORS.WHITE};
      border: 1px solid ${({ theme }) => theme.COLORS.BLUE_100};
      border-radius: 10px;
      width: 150px;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0 20px;
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
        position: relative;
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
          position: absolute;
          right: 15px;
          bottom: 5px;
          font-size: 25px;
        }
      }
    }
  }
`;
