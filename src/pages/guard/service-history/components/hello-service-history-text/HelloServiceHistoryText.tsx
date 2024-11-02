import { Text, Box } from '@chakra-ui/react';
import styled from '@emotion/styled';

const HelloServiceHistoryText = () => {
  return (
    <>
      <Box w='100%' display='flex' justifyContent='flex-end' mt='1rem'>
        <Text fontSize={24} fontWeight={700} textAlign='right'>
          안부전화 이용 내역
        </Text>
      </Box>
      <Box display='flex' flexDir='column' w='100%' flexGrow={1}>
        <Text fontSize={14} fontWeight={700} color='#6D6D6D' textAlign='right'>
          <Highlight>완료 대기</Highlight> 상태 서비스 항목을 클릭하면 서비스
          완료 확인과 봉사자에 대한 <Highlight>평가</Highlight>를 남길 수
          있습니다.
        </Text>
        <Text
          mt={1}
          fontSize={14}
          fontWeight={700}
          color='#6D6D6D'
          textAlign='right'
        >
          <Highlight>대기중</Highlight>인 서비스 항목은 요일만 수정할 수
          있습니다. 이는 시니또에게 서비스에 대한{' '}
          <Highlight>최소한의 일관성</Highlight>을 보장하기 위함임을
          이해바랍니다.
        </Text>
      </Box>
    </>
  );
};

export default HelloServiceHistoryText;

const Highlight = styled.span`
  color: #990e0e;
`;
