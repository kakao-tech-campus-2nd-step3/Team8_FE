import { Text, Box } from '@chakra-ui/react';
import styled from '@emotion/styled';

const HelloServiceHistoryText = () => {
  return (
    <>
      <Box w='15rem' display='flex' justifyContent='flex-end' mt='1rem'>
        <Text fontSize={24} fontWeight={700} textAlign='right'>
          안부전화 서비스 이용 내역
        </Text>
      </Box>
      <Box display='flex' justifyContent='flex-end' w='15rem' flexGrow={1}>
        <Text fontSize={14} fontWeight={700} color='#6D6D6D' textAlign='right'>
          <Highlight>완료 대기</Highlight> 상태 서비스 항목을 클릭하면 서비스
          완료 확인과 봉사자에 대한 <Highlight>평가</Highlight>를 남길 수
          있습니다.
        </Text>
      </Box>
    </>
  );
};

export default HelloServiceHistoryText;

const Highlight = styled.span`
  color: #990e0e;
`;
