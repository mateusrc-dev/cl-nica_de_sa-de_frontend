import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  svg {
    color: ${({ theme }) => theme.COLORS.GRAY_400};
    cursor: pointer;
    transition: transform 0.5s;
  }
  svg:hover {
    transform: scale(1.0)
  }
`;