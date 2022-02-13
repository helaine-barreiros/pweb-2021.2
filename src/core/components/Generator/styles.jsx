import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  width: 100%;
`;

export const Logo = styled.img`
  width: 200px;
  height: 200px;
`;

export const VerticalSpacer = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  width: 100%;
  padding-top: 16px;
`;