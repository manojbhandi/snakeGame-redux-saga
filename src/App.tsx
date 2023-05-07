import React from 'react';
import { Container } from '@chakra-ui/react';
import { Heading } from '@chakra-ui/layout';
import CanvasBoard from './components/CanvasBoard';

function App() {
  return (
    <Container maxW='container.lg' centerContent>
      <Heading as='h1' size='xl'>
        SNAKE GAME
      </Heading>
      <CanvasBoard height={600} width={1000}></CanvasBoard>
    </Container>
  );
}

export default App;
