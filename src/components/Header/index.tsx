import { Flex } from '@chakra-ui/react';
import Logo from './Logo';
import NotificationsNav from './NotificationsNav';
import Profile from './Profile';
import SearchBox from './SearchBox';

export default function Dashboard(): JSX.Element {
  return (
    <Flex as="header" w="100%" maxW={1480} h={20} mx="auto" mt={4} px={6} align="center">
      <Logo />
      <SearchBox />
      <Flex align="center" ml="auto">
        <NotificationsNav />
        <Profile />
      </Flex>
    </Flex>
  );
}
