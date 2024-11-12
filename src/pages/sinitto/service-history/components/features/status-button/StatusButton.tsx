import { getStatusStyle } from '@/shared';
import { Button } from '@chakra-ui/react';

type Props = {
  status: string;
};

export const StatusButton = ({ status }: Props) => {
  const { backgroundColor, text } = getStatusStyle(status);

  return (
    <Button
      bg={backgroundColor}
      color='white'
      fontSize='md'
      fontWeight='bold'
      width='70px'
      height='40px'
      borderRadius='md'
      paddingX='var(--space-xs)'
      _focus={{ outline: 'none' }}
    >
      {text}
    </Button>
  );
};
