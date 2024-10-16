import { useState } from 'react';

import { DAY_DATA, TIME_SLOTS, USE_TIME_DATA } from '../../data';
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
    setTime(time);
  };
  const isAddDisabled = addSlots.length >= 7;
  const isRemoveDisabled = addSlots.length <= 1;

  return (
    <ContentsBox>
      <TitleText>서비스 이용 시간</TitleText>
      {addSlots.map((_, index) => (
        <Flex w='100%' flexDir='row' gap={5} key={index}>
          <DaySelect>
            {DAY_DATA.map((day) => (
              <option key={day.value} value={day.value}>
                {day.label}
              </option>
            ))}
          </DaySelect>
          <Select placeholder='시간대를 선택해주세요.'>
            {TIME_SLOTS.map((slot) => (
              <option key={slot.value} value={slot.value}>
                {slot.label}
              </option>
            ))}
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
        {USE_TIME_DATA.map((time) => (
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
