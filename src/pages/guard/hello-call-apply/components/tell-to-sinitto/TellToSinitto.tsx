import { useMessage } from '../../hooks';
import { Flex, Text, Textarea } from '@chakra-ui/react';

type Props = {
  initialMessage: string;
};

export const TellToSinitto = ({ initialMessage }: Props) => {
  const { message, setMessage } = useMessage(initialMessage);

  return (
    <Flex direction='column' width='100%'>
      <Text fontSize='xl' fontWeight='900'>
        시니또에게 전할 내용
      </Text>
      <Flex mt={3}>
        <Textarea
          height='10rem'
          placeholder='어르신에 대한 내용을 입력해주세요'
          value={message}
          onChange={setMessage}
        />
      </Flex>
    </Flex>
  );
};
