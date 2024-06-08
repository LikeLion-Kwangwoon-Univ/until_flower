import styled from 'styled-components';

export const Image = styled.div`
  width: 163px;
  height: 163px;
  background-color: lightgrey;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-top: 10px;

  .state {
    font-size: 12px;
    color: grey;
  }

  .price {
    font-size: 16px;
    font-weight: bold;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .name {
    font-size: 16px;
    font-weight: bold;
  }

  .time {
    font-size: 12px;
    color: grey;
  }
`;
