import styled from "styled-components";

export const Container = styled.button`
  background-color: ${({ theme }) => theme.COLORS.BLUE_100};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-weight: 600;
  font-size: 16px;
  width: 100%;
  white-space: nowrap;
  svg {
    width: 20px;
    height: 20px;
  }
  &:disabled {
    opacity: 0.5;
  }
`;