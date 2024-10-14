import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useGetServiceList } from './api';
import { CallRequest } from './components';
import { RouterPath } from '@/app/routes/path';
import { LoadingView, VisibilityLoader } from '@/shared/components';
import { Flex, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';

const HelloCallListPage = () => {
  const [isLastPageReached, setIsLastPageReached] = useState(false);

  const { data, isError, isLoading, hasNextPage, fetchNextPage, error } =
    useGetServiceList();

  const navigate = useNavigate();

  const allContent = data?.pages.flatMap((page) => page.content) ?? [];

  const handlerNavigate = (helloCallId: number) => {
    navigate(`${RouterPath.HELLO_CALL_SERVICE}/${helloCallId}`);
  };

  useEffect(() => {
    if (isError && error instanceof Error && error.message.includes('500')) {
      setIsLastPageReached(true);
    }
  }, [isError, error]);

  if (isLoading && !data) return <LoadingView />;
  if (isError && !isLastPageReached) return <Text>에러가 발생했습니다.</Text>;
  if (!data) return null;

  return (
    <HelloCallListLayout>
      <Flex w='100%' justifyContent='end'>
        <Text>새로고침</Text>
      </Flex>
      {allContent.map((item) => (
        <CallRequest
          key={item.helloCallId}
          seniorName={item.seniorName}
          days={item.days}
          onClick={() => handlerNavigate(item.helloCallId)}
        />
      ))}
      {hasNextPage && !isLoading && !isLastPageReached && (
        <VisibilityLoader callback={fetchNextPage} />
      )}
      {(!hasNextPage || isLastPageReached) && (
        <Text>더 이상 요청이 없어요 🥲</Text>
      )}
      {isLoading && hasNextPage && !isLastPageReached && <LoadingView />}
    </HelloCallListLayout>
  );
};

export default HelloCallListPage;

const HelloCallListLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  gap: 1rem;
  margin: 3rem 1.5rem;
`;
