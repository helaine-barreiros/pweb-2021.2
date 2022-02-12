import styled from 'styled-components';

export const Container = styled.div`
  & {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-top: 16px;
  }
`;

export const Title = styled.h1`
  display: block;
  align-items: flex-end;
  font-size: 1.8rem!important;
  color: var(--gs-header-text-color);
`;

export const MenuButton = styled.img`
  margin-left: auto;
  width: 40px;
  height: 40px;
  cursor: pointer;
`;
