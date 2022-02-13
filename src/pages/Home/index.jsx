import React from "react";
import { Checkbox, Generator, PageLayout, Slider } from "../../core/components";
import { RowContainer, Paragraph, VerticalSpacer } from "./styles";

export const HomePage = () => {
  return (
    <PageLayout>
      <VerticalSpacer />
      <Generator />
      <VerticalSpacer />
      <RowContainer>
        <Paragraph>
          Tamanho da senha: 34
        </Paragraph>
        <Slider />
      </RowContainer>
      <VerticalSpacer />
      <RowContainer>
        <Paragraph>
          Caracteres utilizados:
        </Paragraph>
        <Checkbox 
          id="uppercase" 
          text="ABC"
        />
        <Checkbox 
          id="lowercase" 
          text="abc"
        />
        <Checkbox 
          id="numbers" 
          text="123"
        />
        <Checkbox 
          id="specialchars" 
          text="!@#$%*()_+"
        />
      </RowContainer>
      <VerticalSpacer />
    </PageLayout>
  )
}
