import styled from 'styled-components';

export const Container = styled.div`
  margin-bottom: 0;
  position: relative;
  display: block;
  min-height: 1.5rem;
  padding-left: 2rem;
`;

export const Input = styled.input`
  & {
    box-sizing: border-box;
    padding: 0;
    cursor: pointer;
    appearance: auto;
    box-sizing: border-box;
    margin: 3px 3px 3px 4px;
    padding: initial;
    border: initial;
    background-color: initial;
    width: 1.5rem;
    height: 1.5rem;
    position: absolute;
    left: 0;
    overflow: visible;
  }
`;

export const Label = styled.label`
  display: block;
  font-weight: 600;
  font-size: 1.1em;
  text-align: left;
  line-height: 1.5;
  white-space: nowrap;
  margin-right: 20px;
  margin-bottom: 0;
  width: 50px;
  cursor: pointer;
`;