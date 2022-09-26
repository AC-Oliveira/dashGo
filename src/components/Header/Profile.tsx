import { Avatar, Box, Flex, Text } from '@chakra-ui/react';

export default function Profile(): JSX.Element {
  return (
    <Flex align="center">
      <Box mr={4} textAlign="right">
        <Text>Allan Oliveira</Text>
        <Text>allancardoso21@gmail.com</Text>
      </Box>
      <Avatar size="md" name="Allan Oliveira" src="https://github.com/AC-Oliveira.png" />
    </Flex>
  );
}
