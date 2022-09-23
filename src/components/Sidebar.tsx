import { Box, Icon, Link, Stack, Text } from '@chakra-ui/react';
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from 'react-icons/ri';

export default function Sidebar(): JSX.Element {
  return (
    <Box as="aside" w={64}>
      <Text fontWeight="bold" color="gray.400" fontSize="small">
        GERAL
      </Text>
      <Stack>
        <Link display="flex" alignItems="center">
          <Icon as={RiDashboardLine} fontSize={20} />
          <Text>Dashboard</Text>
        </Link>
        <Link display="flex" alignItems="center">
          <Icon as={RiContactsLine} fontSize={20} />
          <Text>Usuários</Text>
        </Link>
      </Stack>
      <Text fontWeight="bold" color="gray.400" fontSize="small" mt={8}>
        Automação
      </Text>
      <Stack>
        <Link display="flex" alignItems="center">
          <Icon as={RiInputMethodLine} fontSize={20} />
          <Text>Formulários</Text>
        </Link>
        <Link display="flex" alignItems="center">
          <Icon as={RiGitMergeLine} fontSize={20} />
          <Text>Automação</Text>
        </Link>
      </Stack>
    </Box>
  );
}
