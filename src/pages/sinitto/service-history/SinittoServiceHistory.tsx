import { useEffect, useState } from 'react';

import axios from 'axios';

import { useGetAcceptedCallBackList, useGetApplyHelloCallList } from './api';
import {
  CallBackServiceList,
  HelloCallServiceList,
  TextArea,
} from './components';
import { CALLBACK_SCHEMA, HELLO_CALL_SCHEMA } from './data';
import { Spinner } from '@chakra-ui/react';
import styled from '@emotion/styled';

export const SinittoServiceHistoryPage = () => {
  const [isAcceptedError, setIsAcceptedError] = useState(false);

  const {
    data: acceptedCallBackList,
    isLoading: isAcceptedLoading,
    error: acceptedError,
  } = useGetAcceptedCallBackList();

  const { data: applyHelloCallList, isLoading: isApplyHelloLoading } =
    useGetApplyHelloCallList();

  useEffect(() => {
    if (
      axios.isAxiosError(acceptedError) &&
      acceptedError.response?.status === 404
    ) {
      setIsAcceptedError(true);
    }
  }, [acceptedError]);

  return (
    <ServiceHistoryLayout>
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
        applyHelloCallList.map((call) => (
          <HelloCallServiceList
            key={call.helloCallId}
            name={call.seniorName}
            serviceStatus={call.status}
            helloCallId={call.helloCallId}
            days={call.days}
          />
        ))
      ) : (
        <NoServiceMessage>진행중인 서비스가 없어요! 😥</NoServiceMessage>
      )}
    </ServiceHistoryLayout>
  );
};

const ServiceHistoryLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0 2rem;
`;

const StyledSpinnerWrapper = styled.div`
  display: flex;
  height: 60px;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 10px 0;
`;

const NoServiceMessage = styled.p`
  font-size: 1rem;
  font-weight: 700;
  color: var(--color-black);
  text-align: center;
  margin: 20px 0;
`;
