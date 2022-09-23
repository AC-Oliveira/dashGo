import { Button, Flex, Stack } from '@chakra-ui/react';
import { Input } from '../components/Form/Inputs';

export default function Home(): JSX.Element {
  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex
        flexDirection="column"
        as="form"
        width="100%"
        maxWidth={360}
        bg="gray.800"
        p={8}
        borderRadius={8}
      >
        <Stack spacing={4}>
          <Input name="email" label="Email" type="email" />
          <Input name="password" label="Password" type="password" />
        </Stack>
        <Button colorScheme="pink" mt={8} size="lg">
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
}
