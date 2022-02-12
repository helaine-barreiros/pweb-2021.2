import React from 'react';
import { Container, MenuButton, Title } from './styles';

export const Header = ({ onMenuClick }) => {
  return (
    <Container>
      <Title>Gerador de Senhas</Title>
      <MenuButton 
        src="assets/asset_header_button_icon.png" 
        alt="Botão do Menu"
        onClick={onMenuClick}
      />
    </Container>
  )
}