import { useCallback, useMemo, useState } from 'react';

import {
  CallbackHistoryText,
  HelloServiceHistoryText,
  CallbackHistoryDetail,
  HelloServiceHistory,
} from '../components';
import { useHistoryData } from '../hooks';
import { PageLayout } from '@/shared';
import { Box, Flex } from '@chakra-ui/react';
import styled from '@emotion/styled';

export const ServiceHistoryPage = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const pageSize = 5;
  const serverPageSize = 20;
  const serverPage = Math.floor((currentPage * pageSize) / serverPageSize);
  // 서버에서 가져올 때는 20개
  const { callbackHistory, helloCallHistory, refetch } = useHistoryData(
    serverPage,
    serverPageSize
  );
  // 현재 페이지에 해당하는 콜백 내역만 return
  const currentPageData = useMemo(() => {
    if (!callbackHistory?.content) return [];
    const startIndex = (currentPage * pageSize) % serverPageSize; // currentPage = 0, 1 일 때 startIndex = 0, 5
    return callbackHistory.content.slice(startIndex, startIndex + pageSize); // 가져온 20개 콜백 내역 배열을 필터링
  }, [callbackHistory?.content, currentPage, pageSize]);

  const totalPages = Math.ceil(
    (callbackHistory?.totalElements || 0) / pageSize
  );

  const pageChange = useCallback(
    (page: number) => {
      setCurrentPage(page);
      const newServerPage = Math.floor((page * pageSize) / serverPageSize);
      if (newServerPage !== serverPage) {
        refetch();
      }
    },
    [refetch, serverPage]
  );

  return (
    <PageLayout>
      <Flex flexDir='column' w='full' gap='var(--space-sm)'>
        <CallbackHistoryText />
        <ButtonWrapper gap='var(--space-xs)'>
          {currentPageData.length > 0 ? (
            currentPageData.map((history) => (
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
            onClick={() => pageChange(Math.max(currentPage - 1, 0))}
            disabled={currentPage === 0}
          >
            이전
          </PaginationButton>
          <span>
            페이지 {currentPage + 1} / {totalPages}
          </span>
          <PaginationButton
            onClick={() => pageChange(currentPage + 1)}
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
