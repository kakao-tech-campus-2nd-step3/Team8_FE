import {
  CallBackServiceList,
  HelloCallServiceList,
  TextArea,
} from '../components';
import { CALLBACK_SCHEMA, HELLO_CALL_SCHEMA } from '../data';
import { useAcceptedCallBackData, useApplyHelloCallData } from '../hooks';
import { PageLayout } from '@/shared';
import { Spinner, Flex } from '@chakra-ui/react';
import styled from '@emotion/styled';

export const SinittoServiceHistoryPage = () => {
  const { acceptedCallBackList, isAcceptedLoading, isAcceptedError } =
    useAcceptedCallBackData();

  const { applyHelloCallList, isApplyHelloLoading } = useApplyHelloCallData();

  return (
    <PageLayout>
      <Flex flexDir='column' w='full' gap='var(--space-sm)'>
        <TextArea
          title={CALLBACK_SCHEMA.TITLE}
          status={CALLBACK_SCHEMA.STATUS}
          description={CALLBACK_SCHEMA.DESCRIPTION}
          textDirection='start'
        />
        {isAcceptedLoading ? (
          <StyledSpinnerWrapper>
            <Spinner size='lg' thickness='3px' color='blue.500' />
          </StyledSpinnerWrapper>
        ) : isAcceptedError ? (
          <NoServiceMessage>
            요청한 시니또에 할당된 콜백이 없습니다
          </NoServiceMessage>
        ) : acceptedCallBackList ? (
          <CallBackServiceList
            key={acceptedCallBackList.callbackId}
            date={acceptedCallBackList.postTime}
            name={acceptedCallBackList.seniorName}
            serviceStatus={acceptedCallBackList.status}
            callbackId={acceptedCallBackList.callbackId}
          />
        ) : (
          <NoServiceMessage>진행중인 서비스가 없어요! 😥</NoServiceMessage>
        )}
      </Flex>

      <Flex flexDir='column' w='full' gap='var(--space-sm)'>
        <TextArea
          title={HELLO_CALL_SCHEMA.TITLE}
          status={[
            HELLO_CALL_SCHEMA.STATUS_PROCESS,
            HELLO_CALL_SCHEMA.STATUS_FINISH,
          ]}
          description={[
            HELLO_CALL_SCHEMA.DESCRIPTION_PROCESS,
            HELLO_CALL_SCHEMA.DESCRIPTION_FINISH,
          ]}
          textDirection='end'
        />
        {isApplyHelloLoading ? (
          <StyledSpinnerWrapper>
            <Spinner size='lg' thickness='3px' color='blue.500' />
          </StyledSpinnerWrapper>
        ) : applyHelloCallList && applyHelloCallList.length > 0 ? (
          <Flex w='full' flexDir='column' gap='var(--space-xs)'>
            {applyHelloCallList.map((call) => (
              <HelloCallServiceList
                key={call.helloCallId}
                name={call.seniorName}
                serviceStatus={call.status}
                helloCallId={call.helloCallId}
                days={call.days}
              />
            ))}
          </Flex>
        ) : (
          <NoServiceMessage>진행중인 서비스가 없어요! 😥</NoServiceMessage>
        )}
      </Flex>
    </PageLayout>
  );
};

const StyledSpinnerWrapper = styled.div`
  display: flex;
  height: 60px;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const NoServiceMessage = styled.p`
  font-size: 1rem;
  font-weight: 700;
  color: var(--color-black);
  text-align: center;
`;
