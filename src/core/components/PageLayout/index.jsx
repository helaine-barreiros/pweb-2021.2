import React from 'react';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { Body, Container } from './styles';

export const PageLayout = ({ children }) => {
  return (
    <Container>
      <Body>
        <Header />
        {children}
        <Footer />
      </Body>
    </Container>
  )
}