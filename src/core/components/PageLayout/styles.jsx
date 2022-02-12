import styled from 'styled-components';

export const Container = styled.div`
  & {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
    overflow-x: auto;
  }
`;

export const Body = styled.div`
  & {
    display: flex;
    flex-direction: column;
    flex: 1;
    width: 800px;
  }
`;