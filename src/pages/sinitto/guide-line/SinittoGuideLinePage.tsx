import { useParams } from 'react-router-dom';

import { useGetGuideline } from './api/hooks';
import { GuidelineResponse } from './api/types';
import { CATEGORIES } from './data';
import { Category } from './types';
import { useGetCallback } from '@/shared/api/hooks';
import { handleCallbackError } from '@/shared/utils';
import { Container } from '@chakra-ui/react';
import { Spinner } from '@chakra-ui/react';
import styled from '@emotion/styled';

type GuideLineParams = {
  callBackId: string;
  guideLineId: string;
};

export const SinittoGuideLinePage = () => {
  const { callBackId = '', guideLineId = '' } = useParams<GuideLineParams>();
  const guideLineInfo =
    CATEGORIES.find((item: Category) => item.id === guideLineId)?.name || null;

  const {
    data: callBack,
    isLoading: isCallBackLoading,
    isError: isCallBackError,
    error: callBackError,
  } = useGetCallback(callBackId);
  const seniorId =
    !isCallBackLoading && callBack ? callBack.seniorId : undefined;

  const {
    data: guideLine,
    isLoading: isGuideLineLoading,
    isError: isGuideLineError,
  } = useGetGuideline(Number(seniorId), guideLineId);

  handleCallbackError(isCallBackError, callBackError);

  return (
    <Wrapper>
      {isCallBackLoading || isGuideLineLoading ? (
        <Spinner size='xl' />
      ) : (
        <>
          <Title>
            <EmphasisSpan>{guideLineInfo}</EmphasisSpan> 가이드라인
          </Title>
          {isGuideLineError && (
            <p>데이터를 불러오는 중에 오류가 발생했습니다.</p>
          )}
          {guideLine &&
            (guideLine.length == 0 ? (
              <p>등록된 가이드라인이 없습니다.</p>
            ) : (
              guideLine.map((data: GuidelineResponse, index: number) => (
                <Container
                  key={index}
                  title={data.title}
                  content={data.content}
                />
              ))
            ))}
        </>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 45px;
`;

const Title = styled.h2`
  width: 100%;
  text-align: left;
  margin-bottom: 20px;
  font-size: var(--font-size-xxl);
  font-weight: 700;
`;

const EmphasisSpan = styled.span`
  color: #c69090;
`;
