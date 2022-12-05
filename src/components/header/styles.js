import styled from "styled-components";

export const Container = styled.header`
  position: absolute;
  z-index: 4;
  grid-area: header;
  width: 100%;
  height: 100px;
  background: ${({ theme }) => theme.COLORS.BACKGROUND_500};
  color: ${({ theme }) => theme.COLORS.WHITE};
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 50px;
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.WHITE};
  box-shadow: 2px 2px 10px 5px rgba(0, 0, 0, 0.5);
  padding: 0 120px;
  .modal {
    width: 100%;
    position: absolute;
    z-index: 4;
    top: 0px;
    left: 0px;
    height: 100vh;
    background: rgba(212, 221, 255, 0);
    .modalContent {
      position: relative;
      top: 2px;
      margin-left: 100%;
      left: -301px;
      width: 300px;
      height: 400px;
      background: ${({ theme }) => theme.COLORS.WHITE_100};
      clip-path: polygon(
        0% 8%,
        80% 8%,
        90% 0%,
        100% 8%,
        100% 100%,
        0 100%,
        0 20%
      );
      padding: 40px 10px;
      border-radius: 0 0 10px 10px;
    }
    .borderModal {
      background: ${({ theme }) => theme.COLORS.BLUE_100};
      clip-path: polygon(
        0% 8%,
        80% 8%,
        90% 0%,
        100% 8%,
        100% 100%,
        0 100%,
        0 20%
      );
      width: 302px;
      height: 403px;
      position: relative;
      top: 70px;
      margin-left: 100%;
      left: -445px;
      border-radius: 0 0 10px 10px;
    }
    .modalContent .links {
      display: flex;
      flex-direction: column;
      gap: 5px;
    }
    .modalContent a {
      color: ${({ theme }) => theme.COLORS.BLUE_100};
      clip-path: polygon(0% 0%, 100% 0%, 100% 0%, 80% 100%, 0% 100%, 0% 0%);
      border-radius: 5px 0 0 5px;
      font-weight: bold;
      font-style: italic;
      padding: 5px;
      width: 100%;
    }
    .modalContent a:nth-child(odd) {
      background: ${({ theme }) => theme.COLORS.BACKGROUND_200};
    }
    .modalContent a:nth-child(even) {
      background: ${({ theme }) => theme.COLORS.BACKGROUND_300};
    }
  }
  .none {
    display: none;
  }
  .avatar {
    white-space: nowrap;
    position: relative;
    background: linear-gradient(
      to right,
      rgba(67, 97, 238, 1),
      rgba(137, 158, 255, 1)
    );
    padding: 1px;
    border-radius: 10px;
  }
  .inner {
    display: flex;
    align-items: center;
    gap: 15px;
    background: ${({ theme }) => theme.COLORS.BACKGROUND_500};
    padding: 10px;
    border-radius: 10px;
  }
  .user .login {
    display: flex;
    align-items: center;
    gap: 5px;
    font-style: italic;
    color: ${({ theme }) => theme.COLORS.BLUE_100};
  }
  .user .Avatar {
    display: flex;
    align-items: center;
    gap: 5px;
    img {
      width: 50px;
      height: 50px;
      border: 1px solid ${({ theme }) => theme.COLORS.WHITE};
      border-radius: 50%;
    }
    svg {
      font-size: 20px;
    }
  }
  .welcome {
    text-align: end;
    h1 {
      font-size: 16px;
      font-weight: bold;
      font-style: italic;
      color: ${({ theme }) => theme.COLORS.BLUE_100};
    }
    h2 {
      font-weight: normal;
      font-style: italic;
      font-size: 12px;
      color: ${({ theme }) => theme.COLORS.BLUE_100};
    }
    span {
      text-decoration: none;
      font-size: 12px;
      font-weight: bold;
      color: ${({ theme }) => theme.COLORS.BLUE_100};
    }
  }
  .logo {
    display: flex;
    align-items: center;
    gap: 15px;
    white-space: nowrap;
    .logoText {
      display: flex;
      flex-direction: column;
      text-align: end;
    }
    svg {
      width: 30px;
      height: 30px;
      color: ${({ theme }) => theme.COLORS.BLUE_100};
    }
    h1 {
      font-size: 24px;
      font-family: "Rubik Marker Hatch", cursive;
      color: ${({ theme }) => theme.COLORS.BLUE_100};
      font-weight: normal;
      font-style: italic;
    }
    p {
      font-size: 10px;
      color: ${({ theme }) => theme.COLORS.BLUE_100};
      margin-top: -5px;
      font-weight: bold;
      font-style: italic;
    }
  }
  .input {
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    background: ${({ theme }) => theme.COLORS.WHITE};
    border: 1px solid ${({ theme }) => theme.COLORS.WHITE};
    border-radius: 10px;
    box-shadow: inset 2px 2px 10px 0px rgba(0, 0, 0, 0.5);
    button {
      width: 10%;
      height: 100%;
      background: ${({ theme }) => theme.COLORS.BACKGROUND_300};
      border: none;
      border-radius: 0 10px 10px 0;
      display: flex;
      align-items: center;
      justify-content: center;
      svg {
        color: ${({ theme }) => theme.COLORS.WHITE};
      }
    }
    input {
      width: 100%;
      background: none;
      border: none;
      color: ${({ theme }) => theme.COLORS.BLUE_100};
      padding: 10px;
    }
    input::placeholder {
      color: ${({ theme }) => theme.COLORS.BLUE_200};
      font-style: italic;
      font-weight: bold;
    }
  }
`;
