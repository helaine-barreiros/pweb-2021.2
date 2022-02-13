import React, { useState } from 'react';
import { Container, Input, Label } from './styles';

export const Checkbox = ({ value, text, id, onChange }) => {
  const [current, setCurrent] = useState(value || false);

  function onChangeValue(){
    setCurrent(!current);
    if (onChange)
      onChange(!current);
  }

  return (
    <Container>
      <Label htmlFor={id}>
        {text}
        <Input 
          id={id}
          type="checkbox" 
          value={current} 
          onChange={onChangeValue}
        />
      </Label>
    </Container>
  )
}