import React from 'react';
import { Badge } from '../Badge';
import { Container, Label, ActionGroup, RefreshIcon } from './styles';

export const PasswordBox = ({ text, badge, onRefreshClick }) => {
  return (
    <Container>
      <Label>
        {text || 'myP@s5w0rd!'}
      </Label>
      <ActionGroup>
        <Badge>
          {badge}
        </Badge>
        <RefreshIcon
          onClick={onRefreshClick}
        />
      </ActionGroup>
    </Container>
  )
}