import styled from "styled-components";

export const Container = styled.span`
  background: ${({ theme }) => theme.COLORS.WHITE};
  color: ${({ theme }) => theme.COLORS.BLUE_100};
  border: 1px solid ${({ theme }) => theme.COLORS.BLUE_100};
  border-radius: 10px;
  width: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  box-shadow: inset 2px 2px 5px 1px rgba(0, 0, 0, 0.5);
`;
