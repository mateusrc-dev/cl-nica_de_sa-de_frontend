import styled from "styled-components";

export const Container = styled.div`
  .Loading {
    position: fixed;
    z-index: 5;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 50%;
    top: 50%;
    width: 100px;
    height: 100px;
    animation: opacity 1s;
    h1 {
      font-weight: bold;
      font-style: italic;
    }
  }

  @keyframes opacity {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;
