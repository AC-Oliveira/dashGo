import { Box, Stack } from '@chakra-ui/react';
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from 'react-icons/ri';
import NavLink from './NavLink';
import NavSection from './NavSection';

export default function Sidebar(): JSX.Element {
  return (
    <Box as="aside" w={64} mr="8">
      <Stack spacing={12} align="flex-start">
        <NavSection title="GERAL">
          <NavLink linkIcon={RiDashboardLine}>Dashboard</NavLink>
          <NavLink linkIcon={RiContactsLine}>Usuários</NavLink>
        </NavSection>
        <NavSection title="AUTOMAÇÃO">
          <NavLink linkIcon={RiInputMethodLine}>Formulários</NavLink>
          <NavLink linkIcon={RiGitMergeLine}>Automação</NavLink>
        </NavSection>
      </Stack>
    </Box>
  );
}
