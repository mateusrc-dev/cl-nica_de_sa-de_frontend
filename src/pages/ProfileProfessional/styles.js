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
  padding: 0 120px;
  display: flex;
  gap: 40px;
  align-items: flex-start;
  .avatar {
    margin-top: 50px;
    position: relative;
    width: 300px;
    height: 300px;
    img {
      width: 300px;
      height: 300px;
      border-radius: 50%;
      border: 1px solid ${({ theme }) => theme.COLORS.BLUE_100};
      box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.5);
    }
    .edit {
      position: absolute;
      background: ${({ theme }) => theme.COLORS.BACKGROUND_400};
      border: 1px solid ${({ theme }) => theme.COLORS.WHITE};
      box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.5);
      width: 100px;
      height: 100px;
      border-radius: 50%;
      bottom: 0;
      right: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: all 0.5s;
    }
    .edit:hover {
      transform: scale(1.2);
      filter: brightness(0.7);
    }
    input {
      display: none;
    }
    svg {
      color: ${({ theme }) => theme.COLORS.WHITE};
      font-size: 50px;
    }
  }
  .main {
    margin-top: 50px;
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 50px;
    .tags {
      display: flex;
      gap: 10px;
      flex-wrap: wrap;
      margin-bottom: 20px;
    }
    .textarea {
      display: flex;
      align-items: flex-start;
      flex-direction: column;
      textarea {
        width: 100%;
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
    }
  }
`;
