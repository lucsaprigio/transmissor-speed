import React from 'react';
import ReactLoading from 'react-loading';

import { Container } from './styles.js'

export function Loading() {
  return (
    <Container>
      <ReactLoading type="spin" color={'#00008B'} />
    </Container>
  )
}