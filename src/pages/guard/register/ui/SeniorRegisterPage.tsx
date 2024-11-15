import { lazy } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import { useGetAllSeniorInfo } from '../../mypage';
import { SeniorInfoType } from '../types';
import { PageLayout } from '@/shared';
import { Box, Flex, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';

const SeniorInfo = lazy(() => import('../components/senior-info/SeniorInfo'));

const SeniorRegisterBox = lazy(
  () => import('../components/senior-register-box/SeniorRegisterBox')
);

export const SeniorRegisterPage = () => {
  const { data: seniors, isLoading, refetch } = useGetAllSeniorInfo();

  const renderSkeletons = () => {
    return Array(5)
      .fill(0)
      .map((_, index) => (
        <SeniorInfoSkeletonContainer key={`skeleton-${index}`}>
          <Flex flexDir='column' w='100%' gap='var(--space-xs)'>
            <Box
              display='flex'
              flexDir='row'
              w='100%'
              justifyContent='space-between'
              alignItems='center'
            >
              <Box flex='1'>
                <Skeleton width={200} height={24} />
              </Box>
              <Flex align='center' gap='var(--space-xxs)'>
                <Skeleton width={30} height={30} />
                <Skeleton width={30} height={30} />
                <Skeleton width={30} height={30} />
              </Flex>
            </Box>
            <Box>
              <Skeleton width={100} height={20} />
            </Box>
          </Flex>
        </SeniorInfoSkeletonContainer>
      ));
  };

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
            {isLoading ? <Skeleton width={30} /> : `${seniors?.length}명`}
          </Text>
        </Box>

        <Flex w='full' flexDir='column' gap='var(--space-sm)'>
          {isLoading
            ? renderSkeletons()
            : seniors?.map((senior: SeniorInfoType) => (
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

const SeniorInfoSkeletonContainer = styled(Flex)`
  width: 100%;
  flex-direction: column;
  background-color: var(--color-white);
  border: 2px solid var(--color-white-gray);
  border-radius: 10px;
  padding: var(--space-md);
`;

export default SeniorRegisterPage;
