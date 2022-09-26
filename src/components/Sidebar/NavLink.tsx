import { Icon, Link, LinkProps as ChakraLinkProps, Text } from '@chakra-ui/react';
import { IconType } from 'react-icons/lib';

interface INavLinkProps extends ChakraLinkProps {
  children: string;
  linkIcon: IconType;
}

export default function NavLink({ children, linkIcon, ...rest }: INavLinkProps): JSX.Element {
  return (
    <Link display="flex" alignItems="center" {...rest}>
      <Icon as={linkIcon} fontSize={20} />
      <Text ml={4} fontWeight="medium">
        {children}
      </Text>
    </Link>
  );
}
