import { memo, VFC } from "react";
import {
    Container,
    Stack,
    Text
  } from '@chakra-ui/react';
  

export const Footer: VFC = memo(() => {
    return (
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        mt="auto">
        <Text textAlign="center">© 2022 kyami portfolio. All rights reserved</Text>
      </Container>
    );
})