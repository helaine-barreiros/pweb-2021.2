import React, { useState } from 'react';
import { Container, Input, Button } from './styles';

export const Slider = ({ value, onChange }) => {
  const [current, setCurrent] = useState(value || 8);

  function onChangeValue(newValue){
    setCurrent(newValue);
    if (onChange)
      onChange(newValue);
  }

  return (
    <Container>
      <Button onClick={() => onChangeValue(Number(current)-1)}>-</Button>
      <Input 
        type="range" 
        min="8" 
        max="20" 
        value={Number(current) || 8} 
        onChange={(e) => onChangeValue(e.target.value)}  
      />
      <Button onClick={() => onChangeValue(Number(current)+1)}>+</Button>
    </Container>
  )
}