import { useState } from 'react';

import { useGetCallbackHistory, useGetHelloHistoryList } from './api';
import {
  CallbackHistoryText,
  HelloServiceHistoryText,
  CallbackHistoryDetail,
  HelloServiceHistory,
} from './components';
import { PageLayout } from '@/shared';
import { Box, Flex } from '@chakra-ui/react';
import styled from '@emotion/styled';

export const ServiceHistoryPage = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const pageSize = 5;
  const { data: callbackHistory } = useGetCallbackHistory(
    currentPage,
    pageSize
  );
  const { data: helloCallHistory, refetch } = useGetHelloHistoryList();

  const totalPages = callbackHistory?.totalPages || 1;

  return (
    <PageLayout>
      <CallbackHistoryText />
      <ButtonWrapper>
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
        <Pagination>
          <PaginationButton
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 0))}
            disabled={currentPage === 0}
          >
            이전
          </PaginationButton>
          <span>
            페이지 {currentPage + 1} / {totalPages}
          </span>
          <PaginationButton
            onClick={() => setCurrentPage((prev) => prev + 1)}
            disabled={currentPage >= totalPages - 1}
          >
            다음
          </PaginationButton>
        </Pagination>
      </ButtonWrapper>
      <HelloServiceHistoryText />
      <ButtonWrapper>
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
    </PageLayout>
  );
};

const ButtonWrapper = styled(Flex)`
  width: 100%;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

const Pagination = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 3rem;
  border-radius: 10px;
  margin: 0.5rem 0;
  color: var(--color-black);
  font-size: 18px;
  font-weight: bold;
`;

const PaginationButton = styled.button`
  cursor: pointer;
  font-weight: bold;
  padding: 0 1rem;
`;
const NoServiceMessage = styled.p`
  font-size: 1rem;
  font-weight: 700;
  color: var(--color-black);
  text-align: center;
  margin: 20px 0;
`;
