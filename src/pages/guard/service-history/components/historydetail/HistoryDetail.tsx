import { useState } from 'react';

import { HistoryItem } from '../../types';
import { Box, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';

const HistoryDetail = ({ date, name, status }: HistoryItem) => {
  const [currentStatus, setCurrentStatus] = useState(status);

  const handleButtonClick = () => {
    if (currentStatus === '완료대기') {
      setCurrentStatus('완료');
    } else {
      alert('이미 완료 확인한 서비스입니다.');
    }
  };

  return (
    <Box
      display='flex'
      w='15rem'
      justifyContent='space-between'
      alignItems='center'
      mb={2}
    >
      <Text fontSize='0.8rem' fontWeight={600} mr={1}>
        {date}
      </Text>
      <Text fontSize='0.8rem' fontWeight={600}>
        {name}
      </Text>
      <StatusButton onClick={handleButtonClick} status={currentStatus}>
        {currentStatus}
      </StatusButton>
    </Box>
  );
};

const StatusButton = styled.button<{ status: string }>`
  width: 3rem;
  height: 1.5rem;
  font-size: 0.7rem;
  font-weight: 600;
  background-color: ${({ status }) =>
    status === '완료' ? '#B4D6CD' : '#ffda76'};
  border: 1px solid
    ${({ status }) => (status === '완료' ? '#B4D6CD' : '#ffda76')};
  border-radius: 10px;
  cursor: pointer;
`;

export default HistoryDetail;
