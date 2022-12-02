import styled from "styled-components";

export const Container = styled.div`
  .buttons {
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: center;
    button {
      font-size: 30px;
      background: none;
      border: none;
    }
    svg {
      color: ${({ theme }) => theme.COLORS.BLUE_100};
    }
  }
  .list {
    display: flex;
    list-style: none;
    width: 100%;
    max-width: 400px;
    justify-content: space-between;
    align-items: center;
    margin: 10px auto;
    padding: 0;
    gap: 15px;
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
    text-align: center;
    margin-bottom: 10px;
  }
  .subtitle {
    text-align: center;
    margin-bottom: 10px;
  }
  .list_item {
    button {
      background: none;
      border: none;
    }
  }
  .list_item_active {
    background: ${({ theme }) => theme.COLORS.WHITE};
    border: 1px solid ${({ theme }) => theme.COLORS.WHITE};
    box-shadow: inset 2px 2px 5px 1px rgba(0, 0, 0, 0.5);
    button {
      background: none;
      border: none;
    }
  }
  .list_item span {
    text-align: center;
    display: block;
    position: relative;
    z-index: 2;
    font-style: italic;
    font-weight: bold;
  }
`;
