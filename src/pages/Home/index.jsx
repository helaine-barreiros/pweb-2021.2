import React from "react";
import { Button, Checkbox, PageLayout, PasswordBox, Slider } from "../../core/components";

export const HomePage = () => {
  return (
    <PageLayout>
      <Slider />
      <Checkbox text="Teste" id="teste" />
      <Button>
        Copiar
      </Button>
      <PasswordBox 
        badge="muito forte" 
      />
    </PageLayout>
  )
}
