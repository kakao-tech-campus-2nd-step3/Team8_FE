import { useState, useCallback } from 'react';

import PointLogImg from '../../../../assets/point-log-icon.png';
import { getPointStatusLabel, useGetPointLogs } from '@/shared/hooks';
import { Box, Image, Spinner, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';

const PointLogBox = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const pageSize = 5;
  const { data, isLoading, refetch } = useGetPointLogs(currentPage, pageSize);
  const totalPages = data?.totalPages || 1;

  const handlePageChange = useCallback(
    (page: number) => {
      setCurrentPage(page);
      refetch();
    },
    [refetch]
  );

  if (isLoading) {
    return (
      <UseDetailBoxLayout>
        <Spinner size='sm' />
      </UseDetailBoxLayout>
    );
  }

  return (
    <UseDetailBoxLayout>
      <TextBox>포인트 내역</TextBox>
      <DetailBox>
        {data?.content.map((item, index) => (
          <DetailFactor key={index}>
            <TextLayout>
              <DetailText>
                {new Date(item.postTime).toLocaleDateString()}
              </DetailText>
              <DetailText display='flex' justifyContent='flex-end' mr={2}>
                {getPointStatusLabel(item.status)}
              </DetailText>
            </TextLayout>

            <TextLayout>
              <ContentText>{item.content}</ContentText>
              <DetailText display='flex' justifyContent='flex-end' mr={2}>
                <PriceText
                  color={
                    item.status === 'SPEND_COMPLETE' ||
                    item.status === 'WITHDRAW_COMPLETE'
                      ? 'blue'
                      : item.status === 'EARN' ||
                          item.status === 'CHARGE_COMPLETE'
                        ? 'red'
                        : 'black'
                  }
                >
                  {(item.status === 'SPEND_COMPLETE' ||
                  item.status === 'WITHDRAW_COMPLETE'
                    ? '-'
                    : item.status === 'EARN' ||
                        item.status === 'CHARGE_COMPLETE'
                      ? '+'
                      : '') + item.price.toLocaleString()}
                </PriceText>
              </DetailText>
            </TextLayout>
          </DetailFactor>
        ))}
      </DetailBox>
      <Pagination>
        <PaginationButton
          onClick={() => handlePageChange(Math.max(currentPage - 1, 0))}
          disabled={currentPage === 0}
        >
          이전
        </PaginationButton>
        <span>
          페이지 {currentPage + 1} / {data?.totalPages ? data.totalPages : 1}
        </span>
        <PaginationButton
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage >= totalPages - 1}
        >
          다음
        </PaginationButton>
      </Pagination>
    </UseDetailBoxLayout>
  );
};

export default PointLogBox;

const UseDetailBoxLayout = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: var(--color-white-gray);
  border-radius: 5px;
  padding: var(--space-md);
  gap: var(--space-sm);
`;

const TextBox = styled(Box)`
  width: 100%;
  font-size: 20px;
  font-weight: 700;
`;

const DetailBox = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: auto;
  gap: var(--space-xs);
`;

const DetailFactor = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: var(--color-white);
  border-radius: 5px;
  padding: var(--space-xs) var(--space-sm);
`;

const TextLayout = styled(Box)`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Pagination = styled(Box)`
  display: flex;
  justify-content: space-between;
  width: 100%;
  color: var(--color-gray);
  font-size: 16px;
`;

const PaginationButton = styled.button`
  cursor: pointer;
  font-weight: bold;
  padding: 0 var(--space-xs);
  outline: 0;
`;

const DetailText = styled(Text)`
  font-size: 14px;
  color: var(--color-gray);
`;

const ContentText = styled(Text)`
  font-size: 18px;
  font-weight: 600;
`;

const PriceText = styled(Text)`
  font-size: 18px;
  font-weight: 600;
`;
