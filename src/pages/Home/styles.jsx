import styled from 'styled-components';

export const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Paragraph = styled.p`
  display: inline-block;
  font-size: 1.4rem;
  line-height: 1.5rem;
  white-space: nowrap;
  margin: 0 20px 0 0;
`;

export const VerticalSpacer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding-top: 48px;
`;