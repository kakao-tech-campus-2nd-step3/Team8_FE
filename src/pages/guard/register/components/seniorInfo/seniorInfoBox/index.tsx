import { SeniorInfoType } from '../../../types';
import { Box, Flex, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';

const SeniorInfo = ({ senior }: { senior: SeniorInfoType }) => {
  return (
    <SeniorInfoContainer
      flexDir='column'
      alignItems='center'
      justifyContent='center'
    >
      <Box display='flex' flexDir='column' w='100%' maxW='300px'>
        <Text fontSize='0.9rem' fontWeight={700} mb={2}>
          {senior.title}
        </Text>
        <InfoBox mb={1}>
          <InfoText>성함</InfoText>
          <InfoText>{senior.name}</InfoText>
        </InfoBox>
        <InfoBox mb={1}>
          <InfoText>전화번호</InfoText>
          <InfoText>{senior.phoneNumber}</InfoText>
        </InfoBox>
      </Box>
    </SeniorInfoContainer>
  );
};

const SeniorInfoContainer = styled(Flex)`
  width: 100%;
  max-width: 330px;
  height: 6rem;
  min-height: 6rem;
  background-color: #f6e4e4;
  border: 1px solid #f6e4e4;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin: 0.5rem 0;
`;

const InfoText = styled(Text)`
  font-size: 0.8rem;
  color: #2e2e2e;
`;

const InfoBox = styled(Box)`
  width: 100%;
  max-width: 300px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export default SeniorInfo;
