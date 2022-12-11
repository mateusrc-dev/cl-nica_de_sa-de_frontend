import styled from "styled-components";

export const Container = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  gap: 20px;
  flex-direction: column;
  .timeAndTitle {
    display: flex;
    align-items: center;
    gap: 20px;
  }
  .time {
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    h3 {
      font-size: 14px;
      background: ${({ theme }) => theme.COLORS.BACKGROUND_400};
      color: ${({ theme }) => theme.COLORS.WHITE};
      padding: 0 5px;
      border-radius: 5px 0 0 5px;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    button {
      background: ${({ theme }) => theme.COLORS.BACKGROUND_500};
      height: 100%;
      border: none;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    button:last-child {
      border-radius: 0 5px 5px 0;
    }
    button svg {
      color: ${({ theme }) => theme.COLORS.BLUE_100};
    }
    span {
      background: ${({ theme }) => theme.COLORS.WHITE};
      border: 1px solid ${({ theme }) => theme.COLORS.WHITE};
      box-shadow: inset 2px 2px 5px 1px rgba(0, 0, 0, 0.5);
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
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
      gap: 50px;
      text-align: justify;
    }
    .modalContent p .allDetails {
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      gap: 100px;
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
    .modalContent .avatar .avatarClient {
      width: 200px;
      height: 200px;
      border-radius: 50%;
      border: 1px solid ${({ theme }) => theme.COLORS.BLUE_100};
    }
    .modalContent .scheduleDetails {
      display: flex;
      flex-direction: column;
      gap: 5px;
      white-space: nowrap;
      h2 {
        margin-bottom: 20px;
        font-style: italic;
      }
    }
    .modalContent .Client h2 {
      font-style: italic;
    }
    .modalContent .client {
      margin-top: 20px;
      display: flex;
      gap: 20px;
      align-items: center;
    }
    .modalContent .detailsClient {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
    .modalContent .button {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 20px;
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
  .table {
    margin: auto;
    border-collapse: collapse;
    width: 100%;
    max-width: 850px;
  }
  .table tbody td {
    padding: 5px;
    font-weight: bold;
  }
  .table tbody tr:nth-child(even) {
    background: ${({ theme }) => theme.COLORS.BLUE_200};
  }
  .table tbody tr:nth-child(odd) {
    background: ${({ theme }) => theme.COLORS.BACKGROUND_200};
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
    .occupied {
      background: ${({ theme }) => theme.COLORS.BACKGROUND_RED};
    }
    button {
      background: ${({ theme }) => theme.COLORS.BACKGROUND_400};
      border: none;
      transition: all 0.5s;
      color: ${({ theme }) => theme.COLORS.WHITE_100};
      border-radius: 5px 0px 10px 0px;
      padding: 5px;
      &:disabled {
        opacity: 0.8;
        background: ${({ theme }) => theme.COLORS.BACKGROUND_1100};
      }
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
    box-shadow: inset 2px 2px 5px 1px rgba(0, 0, 0, 0.5);
    .occupied {
      background: ${({ theme }) => theme.COLORS.BACKGROUND_RED};
    }
    button {
      margin: 5px 10px;
      background: ${({ theme }) => theme.COLORS.BACKGROUND_500};
      border: none;
      transition: all 0.5s;
      color: ${({ theme }) => theme.COLORS.BLUE_100};
      border-radius: 10px 0px 10px 0px;
      font-weight: bold;
      padding: 5px;
      &:disabled {
        opacity: 0.8;
        background: ${({ theme }) => theme.COLORS.BACKGROUND_1100};
      }
    }
    button:hover {
      transform: scale(1.1);
      filter: brightness(1.1);
    }
  }
`;
