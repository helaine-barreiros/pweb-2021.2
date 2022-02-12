import React, { Fragment } from 'react';
import { Container, FooterText, Image, ImageGroup, Link } from './styles';

export const Footer = () => {
  return (
    <Container>
      <FooterText>
        Disciplina de Programação III ©
      </FooterText>
      <ImageGroup>
        <Link title="Universidade de Pernambuco" href="http://upe.br">
          <Image src="assets/asset_upe_blazon_logo.png" />
        </Link>
        <Link title="Universidade de Pernambuco" href="http://upe.br/garanhuns">
          <Image src="assets/asset_upe_multicampi_logo.png" />
        </Link>
      </ImageGroup>
    </Container>
  )
}