import { useGetAllSeniorInfo } from '../mypage';
import { SeniorInfo } from './components';
import SeniorRegisterBox from './components/senior-register-box/SeniorRegisterBox';
import { Box, Flex } from '@chakra-ui/react';
import styled from '@emotion/styled';

export const SeniorRegisterPage = () => {
  const { data: seniors, isLoading, isError, refetch } = useGetAllSeniorInfo();
  console.log(seniors);
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {isError}</div>;
  }

  return (
    <Container>
      <Flex
        h='100%'
        flexDir='column'
        alignItems='center'
        flexGrow={1}
        overflowY='auto'
      >
        {seniors?.map((senior) => (
          <SeniorInfo key={senior.seniorId} senior={senior} refetch={refetch} />
        ))}
      </Flex>
      <SeniorRegisterBox refetch={refetch} />
    </Container>
  );
};

const Container = styled(Box)`
  position: relative;
  height: 100vh;
`;
