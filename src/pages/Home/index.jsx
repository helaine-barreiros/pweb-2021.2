import React from "react";
import { Button, PageLayout, PasswordBox } from "../../core/components";

export const HomePage = () => {
  return (
    <PageLayout>
      <Button>
        Copiar
      </Button>
      <PasswordBox badge="muito forte" />
    </PageLayout>
  )
}
