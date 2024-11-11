import { Text, Box, Flex } from '@chakra-ui/react';
import styled from '@emotion/styled';

const CallbackHistoryText = () => {
  return (
    <Flex w='full' flexDir='column' gap='var(--space-xs)'>
      <Box w='full' display='flex'>
        <Text fontSize={24} fontWeight={700}>
          콜백 서비스 이용 내역
        </Text>
      </Box>
      <Box display='flex' alignItems='center' w='100%' flexGrow={1}>
        <Text fontSize={14} fontWeight={700} color='#6D6D6D'>
          <Highlight>완료 대기</Highlight> 상태인 서비스 항목을 클릭하여
          봉사자가 서비스를 완료했음을 확인해주세요!
        </Text>
      </Box>
    </Flex>
  );
};

export default CallbackHistoryText;

const Highlight = styled.span`
  color: #990e0e;
`;
