import styled from "styled-components";

export const Container = styled.div`
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
    .modalContent p {
      width: 100%;
      height: 100%;
      padding: 100px 200px;
      font-size: 24px;
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 20px;
      text-align: justify;
    }
    .modalContent p svg {
      position: static;
      font-size: 90px;
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
  .buttons {
    display: flex;
    margin-top: 8px;
    button {
      font-size: 40px;
      background: none;
      border: none;
    }
    svg {
      color: ${({ theme }) => theme.COLORS.BLUE_100};
    }
  }
  table {
    margin: auto;
    border-collapse: collapse;
    width: 100%;
    max-width: 850px;
  }
  table tbody td {
    padding: 5px;
    border: 1px solid ${({ theme }) => theme.COLORS.BLUE_100};
    font-weight: bold;
  }
  .list {
    display: flex;
    list-style: none;
    width: 100%;
    max-width: 400px;
    justify-content: space-between;
    align-items: center;
    margin: 10px auto;
    padding: 0;
    gap: 15px;
  }
  .list_date {
    margin: auto;
    display: flex;
    list-style: none;
    width: 100%;
    gap: 10px;
    max-width: 500px;
  }
  .title {
    font-style: italic;
    margin-top: 10px;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    span {
      font-size: 25px;
      font-weight: normal;
    }
  }
  .list_item {
    span {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    button {
      background: ${({ theme }) => theme.COLORS.BACKGROUND_400};
      border: none;
      transition: all 0.5s;
      color: ${({ theme }) => theme.COLORS.WHITE_100};
      border-radius: 5px 0px 30px 0px;
      padding: 5px;
    }
    button:hover {
      transform: scale(1.1);
      filter: brightness(1.1);
    }
  }
  .list_item_active {
    span {
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      font-weight: bold;
      font-style: italic;
    }
    background: ${({ theme }) => theme.COLORS.WHITE};
    border: 1px solid ${({ theme }) => theme.COLORS.WHITE};
    box-shadow: inset 2px 2px 5px 1px rgba(0, 0, 0, 0.5);
    button {
      margin: 5px 10px;
      background: ${({ theme }) => theme.COLORS.BACKGROUND_500};
      border: none;
      transition: all 0.5s;
      color: ${({ theme }) => theme.COLORS.BLUE_100};
      border-radius: 10px 0px 30px 0px;
      font-weight: bold;
      padding: 5px;
    }
    button:hover {
      transform: scale(1.1);
      filter: brightness(1.1);
    }
  }
`;
