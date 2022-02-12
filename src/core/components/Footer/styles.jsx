import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ImageGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 96px;
  margin-left: auto;
`;

export const Image = styled.img`
  height: 30px;
`;

export const Link = styled.a`
  text-decoration: underline;
  color: -webkit-link;
  cursor: pointer;
  padding-left: 8px;
`;

export const FooterText = styled.span`
  font-weight: 700;
  color: var(--gs-footer-text-color);
`;