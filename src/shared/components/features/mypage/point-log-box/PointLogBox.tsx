import { useState } from 'react';

import PointLogImg from '../../../../assets/point-log-icon.png';
import { getPointStatusLabel } from '@/shared/hooks/point/pointStatusMapping';
import { useGetPointLogs } from '@/shared/hooks/point/useGetPointLogs';
import { Box, Image } from '@chakra-ui/react';
import styled from '@emotion/styled';

const PointLogBox = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const pageSize = 5;
  const { data, isLoading, isError } = useGetPointLogs(currentPage, pageSize);
  const totalPages = data?.totalPages || 1;

  if (isLoading) return <div>로딩 중...</div>;
  if (isError) return <div>데이터를 가져오는 데 오류가 발생했습니다.</div>;

  return (
    <UseDetailBoxLayout>
      <TextBox>포인트 내역</TextBox>
      <DetailBox>
        {data?.content.map((item, index) => (
          <DetailFactor key={index}>
            <Image
              ml='5px'
              mr='5px'
              w='50px'
              h='50px'
              borderRadius='50%'
              src={PointLogImg}
            />
            <DetailTextBox>
              <TextLayout>
                <DetailText>
                  {new Date(item.postTime).toLocaleDateString()}
                </DetailText>
                <DetailText display='flex' justifyContent='flex-end' mr={2}>
                  {getPointStatusLabel(item.status)}
                </DetailText>
              </TextLayout>
              <TextLayout>
                <DetailText>{item.content}</DetailText>
                <DetailText display='flex' justifyContent='flex-end' mr={2}>
                  {item.price}
                </DetailText>
              </TextLayout>
            </DetailTextBox>
          </DetailFactor>
        ))}
      </DetailBox>
      <Pagination>
        <PaginationButton
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 0))}
          disabled={currentPage === 0}
        >
          이전
        </PaginationButton>
        <span>
          페이지 {currentPage + 1} / {data?.totalPages}
        </span>
        <PaginationButton
          onClick={() => setCurrentPage((prev) => prev + 1)}
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
  max-width: 338px;
  height: auto;
  background-color: #2e2e2e;
  border: 1px solid #2e2e2e;
  border-radius: 10px;
  margin-top: 0.5rem;
`;

const TextBox = styled(Box)`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  max-width: 310px;
  font-size: 20px;
  font-weight: 700;
  color: #fff;
  margin: 0.5rem 0;
`;

const DetailBox = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: auto;
  max-width: 338px;
`;

const DetailFactor = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  max-width: 310px;
  min-height: 55px;
  background-color: var(--color-white);
  margin: 0.3rem 0;
  border-radius: 10px;
`;

const DetailTextBox = styled(Box)`
  margin-left: 0.3rem;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: flex-start;
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
  max-width: 310px;
  margin: 0.5rem 0;
  color: var(--color-white);
  font-size: 16px;
`;

const PaginationButton = styled.button`
  cursor: pointer;
  font-weight: bold;
`;

const DetailText = styled(Box)`
  width: 100%;
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 600;
`;
