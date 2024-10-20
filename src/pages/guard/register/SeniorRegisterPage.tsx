import { SeniorInfo } from './components';
import SeniorRegisterBox from './components/senior-register-box/SeniorRegisterBox';
import { SENIOR_DATA } from './data';
import { Box, Flex } from '@chakra-ui/react';
import styled from '@emotion/styled';

export const SeniorRegisterPage = () => {
  return (
    <Container>
      <Flex
        h='100%'
        flexDir='column'
        alignItems='center'
        flexGrow={1}
        overflowY='auto'
      >
        {SENIOR_DATA.map((senior) => (
          <SeniorInfo key={senior.id} senior={senior} />
        ))}
      </Flex>
      <SeniorRegisterBox />
    </Container>
  );
};

const Container = styled(Box)`
  position: relative;
  height: 100vh;
`;
