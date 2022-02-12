import styled from 'styled-components';
import { GrRefresh } from 'react-icons/gr';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 56px;
  border: 1px solid #d4d2e6;
  border-radius: 24px;
  background-color: #fff;
  box-sizing: content-box;
  transition: border .3s;
  padding-left: 24px;
  padding-right: 24px;
`;

export const ActionGroup = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: auto;
  justify-content: space-between;
  align-items: center;
`;

export const Label = styled.p`
  font-weight: 700;
  color: black;
`;

export const RefreshIcon = styled(GrRefresh)`
  cursor: pointer;
  color: black;
  font-size: 24px;
  margin-left: 24px;
`;