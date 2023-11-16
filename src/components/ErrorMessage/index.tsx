import React from 'react';

import { Container, ErrorText } from './styles';

interface Props{
  description: string;
}

export function ErrorMessage({description}:Props) {
  
  return (
    <Container>
      <ErrorText>{description}</ErrorText>
    </Container>
  );
}