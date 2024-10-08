import LoginButton from './components/login-button';
import ReviewBox from './components/review-box';
import { Box, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';

const MainPage = () => {
  return (
    <MainPageLayout>
      <FlexBox marginY='1.5rem' mb={10}>
        <Text fontSize='2rem' fontWeight='700'>
          나만의 작은 시니또
        </Text>
        <Text fontSize='1.2rem'>디지털 시대? 나도 두렵지 않아!</Text>
      </FlexBox>
      <Box>
        <ReviewBox />
      </Box>
      <Box mt={20}>
        <LoginButton />
      </Box>
    </MainPageLayout>
  );
};

export default MainPage;

const MainPageLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100%;
  margin: 1rem 0;
`;

const FlexBox = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
