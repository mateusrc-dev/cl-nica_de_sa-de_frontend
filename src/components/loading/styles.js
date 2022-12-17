import styled from "styled-components";

export const Container = styled.div`
  .loading {
    background: rgba(212, 221, 255, 0.3);
    position: absolute;
    z-index: 5;
    width: 100%;
    height: 100%;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    .Loading {
      width: 100px;
      height: 100px;
      border: 15px solid ${({ theme }) => theme.COLORS.BLUE_200};
      border-top-color: ${({ theme }) => theme.COLORS.BLUE_100};
      border-radius: 50%;
      animation: is-rotating 1s infinite;
    }

    @keyframes is-rotating {
      to {
        transform: rotate(1turn);
      }
    }
  }
`;
