import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Input = styled.input`
  &[type=range i] {
    -webkit-appearance: auto;
    appearance: auto;
    cursor: default;
    color: #9d968e;
    padding: initial;
    border: initial;
    margin: 2px;
    cursor: pointer;
  }

  &{
    -webkit-appearance: none;
    width: 335px;
    height: 4px;
    border-radius: 2px;
    cursor: pointer;
  }
`;

export const Button = styled.button`
  & {
    margin-right: 16 px;
    border: 1px solid #7d77a6;
    color: #7d77a6;
    background-color: transparent;
    outline: none;
    box-shadow: none;
    cursor: pointer;
    width: 2.5rem;
    height: 2.5rem;
    justify-content: center;
    align-items: center;
    padding: 0;
    border-radius: 50%;
    transition: all .1s ease-in;
    font-size: 1.5rem;
  }
  &:hover {
    border: 1px solid #7d67a6;
    color: #7d67a6;
  }
`;

