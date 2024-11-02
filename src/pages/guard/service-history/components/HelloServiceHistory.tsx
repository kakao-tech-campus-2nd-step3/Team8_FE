import { Text } from '@chakra-ui/react';
import styled from '@emotion/styled';

const HelloServiceHistory = () => {
  return (
    <HistoryContainer>
      <HistoryInfo>
        <Text fontSize='16px' fontWeight='700'>
          8월15일-8월30일
        </Text>
        <Text fontSize='16px' fontWeight='700'>
          김숙자
        </Text>
        <StatusButton status='완료'>완료</StatusButton>
      </HistoryInfo>
      <DayContainer>
        <Day>월</Day>
        <Day>화</Day>
        <Day>수</Day>
        <Day>목</Day>
        <Day>금</Day>
      </DayContainer>
      <InfoEditContainer>
        <EditButton>수정하기</EditButton>
        <DeleteButton>삭제하기</DeleteButton>
      </InfoEditContainer>
    </HistoryContainer>
  );
};

export default HelloServiceHistory;

const HistoryContainer = styled.div`
  width: 100%;
  height: auto;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--color-white-gray);
  border: 1px solid solid var(--color-white-gray);
  border-radius: 10px;
`;

const HistoryInfo = styled.div`
  display: flex;
  flex-direction: row;
  width: 95%;
  justify-content: space-between;
  align-items: center;
`;

const DayContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 1rem;
  height: auto;
`;

const Day = styled.button`
  width: 45px;
  height: 45px;
  background-color: var(--color-primary);
  font-size: 16px;
  color: var(--color-white);
  border-radius: 5px;
`;

const InfoEditContainer = styled.div`
  width: 95%;
  height: auto;
  display: flex;
  justify-content: space-between;
`;

const EditButton = styled.button`
  width: 45%;
  height: 2rem;
  background-color: #81b6ff;
  color: var(--color-white);
  border-radius: 5px;
  font-size: 1rem;
  font-weight: bold;
`;

const DeleteButton = styled.button`
  width: 45%;
  height: 2rem;
  background-color: #ff4d68;
  color: var(--color-white);
  border-radius: 5px;
  font-size: 1rem;
  font-weight: bold;
`;

const ReviewButton = styled.button`
  width: 95%;
  height: 2rem;
  background-color: #b28bff;
  color: var(--color-white);
  border-radius: 5px;
  font-size: 1rem;
  font-weight: bold;
`;

const StatusButton = styled.button<{ status: string }>`
  width: 5rem;
  height: 2rem;
  font-size: 1rem;
  font-weight: 600;
  background-color: ${({ status }) =>
    status === '완료' ? '#B4D6CD' : '#ffda76'};
  border: 1px solid
    ${({ status }) => (status === '완료' ? '#B4D6CD' : '#ffda76')};
  border-radius: 10px;
  cursor: pointer;
`;
