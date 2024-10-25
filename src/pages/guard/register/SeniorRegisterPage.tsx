import { useGetAllSeniorInfo } from '../mypage';
import { SeniorInfo } from './components';
import SeniorRegisterBox from './components/senior-register-box/SeniorRegisterBox';
import { Box, Flex } from '@chakra-ui/react';
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
      <SeniorInfoContainer>
        {seniors?.map((senior) => (
          <SeniorInfo key={senior.seniorId} senior={senior} refetch={refetch} />
        ))}
      </SeniorInfoContainer>
      <SeniorRegisterBox refetch={refetch} />
    </Container>
  );
};

const Container = styled(Box)`
  position: relative;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const SeniorInfoContainer = styled(Flex)`
  flex-grow: 1;
  overflow-y: auto;
  height: 70vh;
  flex-direction: column;
  align-items: center;
`;

export default SeniorRegisterPage;
