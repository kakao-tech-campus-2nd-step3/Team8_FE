import { getStatusStyle } from '@/shared/utils/statusUtils';
import { Button, Text } from '@chakra-ui/react';

type StatusContainerProps = {
  status: string;
  onClick?: () => void;
};

const ServiceStatus = ({ status, onClick }: StatusContainerProps) => {
  const { backgroundColor, text } = getStatusStyle(status);

  return (
    <Button
      onClick={onClick}
      width='70px'
      height='40px'
      borderRadius='5px'
      fontSize='md'
      fontWeight='bold'
      backgroundColor={backgroundColor}
      _focus={{ outline: 'none' }}
      _hover={{
        backgroundColor: `${backgroundColor}CC`,
      }}
      px='var(--space-xs)'
      display='flex'
      alignItems='center'
      justifyContent='center'
    >
      <Text color='black' fontSize='sm'>
        {text}
      </Text>
    </Button>
  );
};

export default ServiceStatus;
