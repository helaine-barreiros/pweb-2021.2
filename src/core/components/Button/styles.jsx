import styled from 'styled-components';

export const Container = styled.div.attrs(props => props)`
  & {
    display: inline-flex;
    align-items: center;
    text-align: center;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 11px;
    font-weight: 800;
    align-items: center;
    justify-content: center;
    border: 2px solid transparent;
    border-radius: 28px;
    box-shadow: 0 8px 32px -8px rgb(0 112 246 / 40%), 0 16px 32px -16px rgb(7 29 43 / 16%);
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
    cursor: pointer;
    line-height: 14px;
    letter-spacing: 1px;
    padding: 0 24px;
    height: 40px;
    width: ${props => props.width};
    background-color: var(--gs-background-color-surface-1);
    color: #fff;
  }
  &:active {
    background-color: var(--gs-background-color-surface-2);
  }
`;