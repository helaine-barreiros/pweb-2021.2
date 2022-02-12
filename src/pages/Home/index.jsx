import React from "react";
import { Button, PageLayout, PasswordBox, Slider } from "../../core/components";

export const HomePage = () => {
  return (
    <PageLayout>
      <Slider />
      <Button>
        Copiar
      </Button>
      <PasswordBox badge="muito forte" />
    </PageLayout>
  )
}
