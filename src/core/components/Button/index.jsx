import React from 'react';
import { Container } from './styles';

export const Button = ({ children, width = '40px' }) => {
  return (
    <Container width={width} href="#">
      {children}
    </Container>
  )
}