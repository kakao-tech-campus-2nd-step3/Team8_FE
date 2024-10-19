import { useEffect, useState } from 'react';

import { DAY_DATA, TIME_SLOTS, USE_TIME_DATA } from '../../data';
import { TimeSlots, useSlots } from '@/pages';
import { Box, Button, Flex, Select, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';

type Props = {
  setServiceTime: (time: number) => void;
  setTimeSlotsArray: (slot: TimeSlots[]) => void;
};

export const ServiceUsingTime = ({
  setServiceTime,
  setTimeSlotsArray,
}: Props) => {
  const [selectedTime, setSelectedTime] = useState<number | null>(null);
  const [startTime, setStartTime] = useState<string>('');
  const [endTime, setEndTime] = useState<string>('');
  const [days, setDays] = useState<string[]>([]);

  const { slots: addSlots, addSlot, removeSlot } = useSlots();

  useEffect(() => {
    const updatedSlots: TimeSlots[] = addSlots.map((_, index) => ({
      dayName: days[index] || '',
      startTime,
      endTime,
      selectedTime,
    }));
    setTimeSlotsArray(updatedSlots);
  }, [addSlots, selectedTime, startTime, endTime, setTimeSlotsArray, days]);

  const handleDaySelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value;

    const selectedSlot = TIME_SLOTS.find(
      (slot) => slot.value === selectedValue
    );

    if (selectedSlot) {
      const [start, end] = selectedSlot.label.split(' ~ ');

      setStartTime(start);
      setEndTime(end);
    }
  };

  const handleDayChange = (
    e: React.ChangeEvent<HTMLSelectElement>,
    index: number
  ) => {
    const selectedDay = e.target.value;
    setDays((prevDays) => {
      const newDays = [...prevDays];
      newDays[index] = selectedDay;
      return newDays;
    });
  };

  const handleTimeSelect = (time: number) => {
    setSelectedTime(time);
    setServiceTime(time);
  };

  const isAddDisabled = addSlots.length >= 7;
  const isRemoveDisabled = addSlots.length <= 1;

  return (
    <ContentsBox>
      <TitleText>서비스 이용 시간</TitleText>
      {addSlots.map((_, index) => (
        <Flex w='100%' flexDir='row' gap={5} key={index}>
          <DaySelect
            value={days[index] || ''}
            onChange={(e) => handleDayChange(e, index)}
          >
            {DAY_DATA.map((day) => (
              <option key={day.value} value={day.value}>
                {day.label}
              </option>
            ))}
          </DaySelect>
          <Select
            placeholder='시간대를 선택해주세요.'
            onChange={(e) => handleDaySelect(e)}
          >
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
          onClick={addSlot}
          disabled={isAddDisabled}
          isAddButton={true}
        >
          <Text color={isAddDisabled ? '#afafaf' : '#007BFF'}>
            <b>+</b> 추가
          </Text>
        </ActionButton>
        <ActionButton
          onClick={removeSlot}
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
            isSelected={selectedTime === time}
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

const TimeButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== 'isSelected',
})<{ isSelected: boolean }>`
  background-color: ${({ isSelected }) =>
    isSelected ? 'var(--color-primary)' : 'var(--color-white)'};
  color: ${({ isSelected }) =>
    isSelected ? 'var(--color-white)' : 'var(--color-gray)'};
  border: ${({ isSelected }) =>
    isSelected ? '1px solid var(--color-primary)' : '1px solid #e2e8e0'};
  font-weight: 700;
  border-radius: 0.5rem;
  text-align: center;
  margin-bottom: 10px;

  &:hover {
    background-color: ${({ isSelected }) =>
      isSelected ? 'var(--color-primary)' : 'var(--color-hover)'};
    color: ${({ isSelected }) =>
      isSelected ? 'var(--color-white)' : 'var(--color-hover)'};
    border: ${({ isSelected }) =>
      isSelected
        ? '1px solid var(--color-primary)'
        : '1px solid var(--color-hover)'};
  }
`;
