import React, { Fragment } from 'react';
import { Body, Container } from './styles';

export const PageLayout = ({ children }) => {
  return (
    <Container>
      <Body>
        {children}
      </Body>
    </Container>
  )
}