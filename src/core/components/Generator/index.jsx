import React from 'react';
import { Button } from '../Button';
import { PasswordBox } from '../PasswordBox';
import { Container, Logo, RowContainer, VerticalSpacer } from './styles';

export const Generator = () => {
  return (
    <Container>
      <Logo src="assets/asset_lock_icon.png" />
      <RowContainer>
        <PasswordBox 
          text="myP@s5w0rd!"
          badge="Muito Forte"
        />
      </RowContainer>
      <VerticalSpacer />
      <Button>
        Copiar
      </Button>
    </Container>
  )
}