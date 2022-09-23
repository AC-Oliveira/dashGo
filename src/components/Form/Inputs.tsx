import {
  FormControl,
  FormLabel,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
} from '@chakra-ui/react';

interface IInput extends ChakraInputProps {
  name: string;
  label?: string;
}

export function Input({ name, label, ...rest }: IInput): JSX.Element {
  return (
    <FormControl>
      {!!label && <FormLabel>{label}</FormLabel>}
      <ChakraInput
        id={name}
        focusBorderColor="pink.500"
        variant="filled"
        bgColor="gray.900"
        _hover={{ bgColor: 'gray.900' }}
        {...rest}
      />
    </FormControl>
  );
}
