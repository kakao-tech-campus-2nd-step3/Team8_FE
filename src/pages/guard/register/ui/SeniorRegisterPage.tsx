import { useGetAllSeniorInfo } from '../../mypage';
import SeniorInfo from '../components/senior-info/SeniorInfo';
import SeniorRegisterBox from '../components/senior-register-box/SeniorRegisterBox';
import { SeniorInfoType } from '../types';
import { PageLayout } from '@/shared';
import { Box, Flex, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';

export const SeniorRegisterPage = () => {
  const { data: seniors, refetch } = useGetAllSeniorInfo();

  return (
    <PageLayout>
      <SeniorRegisterBox refetch={refetch} />
      <SeniorInfoContainer>
        <Box
          w='full'
          display='flex'
          flexDir='row'
          justifyContent='space-between'
          alignItems='center'
        >
          <Text
            color='var(--color-black)'
            fontSize='var(--font-size-xxl)'
            fontWeight='700'
          >
            등록한 시니어
          </Text>
          <Text
            color='var(--color-gray)'
            fontSize='var(--font-size-xl)'
            fontWeight='500'
          >
            {seniors?.length}명
          </Text>
        </Box>

        <Flex w='full' flexDir='column' gap='var(--space-sm)'>
          {seniors?.map((senior: SeniorInfoType) => (
            <SeniorInfo
              key={senior.seniorId}
              senior={senior}
              refetch={refetch}
            />
          ))}
        </Flex>
      </SeniorInfoContainer>
    </PageLayout>
  );
};

const SeniorInfoContainer = styled(Flex)`
  width: 100%;
  flex-direction: column;
  align-items: center;
  gap: var(--space-sm);
`;

export default SeniorRegisterPage;
