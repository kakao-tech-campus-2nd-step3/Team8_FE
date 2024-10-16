import { useState } from 'react';

import { Box, Button, Flex, Select, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';

type Props = {
  setTime: (time: number) => void;
  setCount: (count: number) => void;
};

export const ServiceTime = ({ setTime, setCount }: Props) => {
  const [addSlots, setAddSlots] = useState([{ day: '', time: '' }]);
  const [selectedTime, setSelectedTime] = useState<number | null>(null);

  const handleAddSlot = () => {
    if (addSlots.length < 7) {
      const newSlots = [...addSlots, { day: '', time: '' }];
      setAddSlots(newSlots);
      setCount(newSlots.length);
    }
  };

  const handleRemoveSlot = () => {
    if (addSlots.length > 1) {
      const newSlots = addSlots.slice(0, -1);
      setAddSlots(newSlots);
      setCount(newSlots.length);
    }
  };

  const handleTimeSelect = (time: number) => {
    setSelectedTime(time);
    setTime(time); // Update the selected time
  };
  const isAddDisabled = addSlots.length >= 7;
  const isRemoveDisabled = addSlots.length <= 1;

  return (
    <ContentsBox>
      <TitleText>서비스 이용 시간</TitleText>
      {addSlots.map((_, index) => (
        <Flex w='100%' flexDir='row' gap={5} key={index}>
          <DaySelect>
            <option value='monday'>월</option>
            <option value='tuesday'>화</option>
            <option value='wednesday'>수</option>
            <option value='thursday'>목</option>
            <option value='friday'>금</option>
            <option value='saturday'>토</option>
            <option value='sunday'>일</option>
          </DaySelect>
          <Select placeholder='시간대를 선택해주세요.'>
            <option value='1'>09:00 ~ 11:00</option>
            <option value='2'>10:00 ~ 12:00</option>
            <option value='3'>11:00 ~ 13:00</option>
            <option value='4'>12:00 ~ 14:00</option>
            <option value='5'>13:00 ~ 15:00</option>
            <option value='6'>14:00 ~ 16:00</option>
            <option value='7'>15:00 ~ 17:00</option>
            <option value='8'>16:00 ~ 18:00</option>
            <option value='9'>17:00 ~ 19:00</option>
            <option value='10'>18:00 ~ 20:00</option>
            <option value='11'>19:00 ~ 21:00</option>
            <option value='12'>20:00 ~ 22:00</option>
            <option value='13'>21:00 ~ 23:00</option>
          </Select>
        </Flex>
      ))}
      <ButtonBox>
        <ActionButton
          onClick={handleAddSlot}
          disabled={isAddDisabled}
          isAddButton={true}
        >
          <Text color={isAddDisabled ? '#afafaf' : '#007BFF'}>
            <b>+</b> 추가
          </Text>
        </ActionButton>
        <ActionButton
          onClick={handleRemoveSlot}
          disabled={isRemoveDisabled}
          isAddButton={false}
        >
          <Text color={isRemoveDisabled ? '#afafaf' : '#ff5c5c'}>
            <b>-</b> 삭제
          </Text>
        </ActionButton>
      </ButtonBox>
      <ButtonBox>
        {[3, 5, 10, 15].map((time) => (
          <TimeButton
            key={time}
            onClick={() => handleTimeSelect(time)}
            variant={selectedTime === time ? 'solid' : 'outline'}
          >
            {time}분
          </TimeButton>
        ))}
      </ButtonBox>
    </ContentsBox>
  );
};

const ContentsBox = styled(Box)`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.2rem;
`;

const TitleText = styled(Text)`
  font-size: var(--font-size-xl);
  font-weight: 900;
`;

const DaySelect = styled.select`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  padding: 0 0.75rem;
  border: 1px solid #e2e8e0;
  border-radius: 0.375rem;
`;

const ButtonBox = styled(Flex)`
  justify-content: center;
  align-items: center;
  gap: 1rem;

  margin-top: 1rem;
`;

const ActionButton = styled.button<{ disabled: boolean; isAddButton: boolean }>`
  padding: 0 1rem;
  border-radius: 0.375rem;
  background-color: transparent;
  align-items: center;
  cursor: pointer;
  outline: none;

  color: ${({ disabled, isAddButton }) =>
    disabled ? '#afafaf' : isAddButton ? '#007BFF' : '#ff5c5c'};

  &:disabled {
    cursor: not-allowed;
  }

  &:focus {
    outline: none;
  }
`;

const TimeButton = styled(Button)`
  background-color: var(--color-white);
  color: var(--color-gray);
  border: 1px solid #e2e8e0;
  font-weight: 700;
  border-radius: 0.5rem;
  text-align: center;
  margin-bottom: 10px;

  &:hover {
    background-color: var(--color-primary);
    color: var(--color-white);
    border: 1px solid var(--color-primary);
  }
`;
