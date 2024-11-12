import {
  CallbackHistoryText,
  HelloServiceHistoryText,
  CallbackHistoryDetail,
  HelloServiceHistory,
} from '../components';
import { useHistoryData, usePagination } from '../hooks';
import { PageLayout } from '@/shared';
import { Box, Flex } from '@chakra-ui/react';
import styled from '@emotion/styled';

export const ServiceHistoryPage = () => {
  const pageSize = 5;
  const { currentPage, goToPreviousPage, goToNextPage } = usePagination(0, 1);
  const { callbackHistory, helloCallHistory, refetch } = useHistoryData(
    currentPage,
    pageSize
  );

  const totalPages = callbackHistory?.totalPages || 1;

  return (
    <PageLayout>
      <Flex flexDir='column' w='full' gap='var(--space-sm)'>
        <CallbackHistoryText />
        <ButtonWrapper gap='var(--space-xs)'>
          {callbackHistory &&
          callbackHistory.content &&
          callbackHistory.content.length > 0 ? (
            callbackHistory.content.map((history) => (
              <CallbackHistoryDetail
                key={history.callbackId}
                historyData={history}
              />
            ))
          ) : (
            <NoServiceMessage>서비스 내역이 없어요! 😥</NoServiceMessage>
          )}
        </ButtonWrapper>
        <Pagination>
          <PaginationButton
            onClick={goToPreviousPage}
            disabled={currentPage === 0}
          >
            이전
          </PaginationButton>
          <span>
            페이지 {currentPage + 1} / {totalPages}
          </span>
          <PaginationButton
            onClick={goToNextPage}
            disabled={currentPage >= totalPages - 1}
          >
            다음
          </PaginationButton>
        </Pagination>
      </Flex>

      <Flex flexDir='column' w='full' gap='var(--space-sm)'>
        <HelloServiceHistoryText />
        <ButtonWrapper gap='var(--space-sm)'>
          {helloCallHistory && helloCallHistory.length > 0 ? (
            helloCallHistory.map((history) => (
              <HelloServiceHistory
                key={history.helloCallId}
                historyData={history}
                refetch={refetch}
              />
            ))
          ) : (
            <NoServiceMessage>서비스 내역이 없어요! 😥</NoServiceMessage>
          )}
        </ButtonWrapper>
      </Flex>
    </PageLayout>
  );
};

const ButtonWrapper = styled(Flex)`
  width: 100%;
  flex-direction: column;
`;

const Pagination = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 3rem;
  color: var(--color-gray);
  font-size: var(--font-size-md);
`;

const PaginationButton = styled.button`
  cursor: pointer;
  padding: 0 1rem;
  font-size: var(--font-size-md);
  font-weight: bold;
`;

const NoServiceMessage = styled.p`
  font-size: 1rem;
  font-weight: 700;
  color: var(--color-black);
  text-align: center;
  margin: 20px 0;
`;
