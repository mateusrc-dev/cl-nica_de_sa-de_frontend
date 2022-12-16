import styled from "styled-components";

export const Container = styled.div`
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
  .modal {
    width: 100%;
    position: absolute;
    z-index: 4;
    top: 0;
    left: 0;
    height: 100vh;
    background: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .searchResults{
    position: absolute;
    z-index: 4;
    top: 70px;
    left: 395px;
    background: ${({ theme }) => theme.COLORS.BACKGROUND_400};
    border-radius: 5px 5px 10px 10px;
    padding: 10px 10px 10px 10px;
    width: 350px;
    height: 200px;
    overflow-y:auto;
    .close {
      right: 10px;
      position: absolute;
      cursor: pointer;
    }
    animation: width 1s;
    @keyframes width {
      0% {
        opacity: 0;
        height: 0;
      }
      100% {
        opacity: 1;
        height: 200px;
      }
    }
    .li {
      list-style-type: none;
      display: flex;
      align-items: center;
      padding: 5px;
      background:  ${({ theme }) => theme.COLORS.BACKGROUND_1000};
      transition: all 0.3s;
      animation: left 1s;
      animation-delay: var(--delay);
    @keyframes left {
      0% {
        opacity: 0;
        transform: translateX(50px)
      }
    
      100% {
        opacity: 1;
        transform: translateX(0)
      }
    }
    }
    .li:first-child {
      border-radius: 10px 10px 0 0;
      margin-top: 30px;
    }
    .li:last-child {
      border-radius: 0 0 10px 10px;
    }
    .li:hover {
      background: ${({ theme }) => theme.COLORS.BACKGROUND_1100}; 
      color: ${({ theme }) => theme.COLORS.WHITE_100};
    }
    p {
      padding: 0 10px;
      color: ${({ theme }) => theme.COLORS.WHITE_100};
      transition: all 0.3s;
      cursor: pointer;
    }
  }
  .searchResults::-webkit-scrollbar {
  width: 10px;
  }
  .searchResults::-webkit-scrollbar-thumb {
  background: ${({ theme }) => theme.COLORS.BACKGROUND_100};
  border-radius: 50px;
  width: 0px;
  background-clip: padding-box; /*para as bordas ficarem transparentes e com isso dar a impressão que tem uma margem nos lados da borda*/
  border: 0px solid rgba(0, 0, 0, 0);
  }
  .searchResults::-webkit-scrollbar-thumb:hover {
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_100};
  border-radius: 50px;
  width: 0px;
  background-clip: padding-box; /*para as bordas ficarem transparentes e com isso dar a impressão que tem uma margem nos lados da borda*/
  border: 0px solid rgba(0, 0, 0, 0);
  }
  svg {
    color: ${({ theme }) => theme.COLORS.WHITE_100};
  }
  .trash {
    position: absolute;
    right: 15px;
    cursor: pointer;
    padding-top: 4px;
    padding-right: 5px;
  }
  .none {
    display: none;
  }
`;
