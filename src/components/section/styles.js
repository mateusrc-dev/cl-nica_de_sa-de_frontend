import styled from "styled-components";

export const Container = styled.section`
  .row {
    border-top: 3px solid ${({ theme }) => theme.COLORS.BLUE_100};
    border-left: none;
    border-right: none;
    border-bottom: 3px solid ${({ theme }) => theme.COLORS.BLUE_100};
    border-radius: 50px;
    background: ${({ theme }) => theme.COLORS.BLUE_100};
  }
`;
