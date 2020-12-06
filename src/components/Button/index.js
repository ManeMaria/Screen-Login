import React from 'react';

import { Container } from './styles';

function Button({children}) {
  return (
      <Container type='submit'>
        {children}
      </Container>
  );
}

export default Button;