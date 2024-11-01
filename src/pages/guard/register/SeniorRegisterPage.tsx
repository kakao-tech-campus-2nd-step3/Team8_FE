import { useGetAllSeniorInfo } from '../mypage';
import { SeniorInfo } from './components';
import SeniorRegisterBox from './components/senior-register-box/SeniorRegisterBox';
import { Box, Flex, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';

export const SeniorRegisterPage = () => {
  const { data: seniors, isLoading, isError, refetch } = useGetAllSeniorInfo();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  return (
    <Container>
      <SeniorRegisterBox refetch={refetch} />
      <SeniorInfoContainer mt={2}>
        <Box
          mt={2}
          w='370px'
          display='flex'
          flexDir='row'
          justifyContent='space-between'
          alignItems='center'
        >
          <Text color='var(--color-black)' fontSize='24px' fontWeight='700'>
            등록한 시니어
          </Text>
          <Text color='var(--color-black)' fontSize='20px' fontWeight='700'>
            총 {seniors?.length}명
          </Text>
        </Box>

        {seniors?.map((senior) => (
          <SeniorInfo key={senior.seniorId} senior={senior} refetch={refetch} />
        ))}
      </SeniorInfoContainer>
    </Container>
  );
};

const Container = styled(Box)`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SeniorInfoContainer = styled(Flex)`
  width: 100%;
  max-width: 370px;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
`;

export default SeniorRegisterPage;
