import { useRef } from 'react';
import DatePicker from 'react-datepicker';

import styled from '@emotion/styled';
import { ko } from 'date-fns/locale/ko';

type Props = {
  selectDate?: Date | null;
  selectedDate?: Date | null;
  minDate?: Date | null;
  dayType: 'start' | 'end';
  onSelectedDateChange: (date: Date | null) => void;
};

export const CustomDatePicker = ({
  selectDate,
  selectedDate,
  onSelectedDateChange,
  dayType,
  minDate,
}: Props) => {
  const datePickerRef = useRef<DatePicker | null>(null);

  return (
    <DatePickerContainer>
      <DatePicker
        locale={ko}
        ref={datePickerRef}
        className='custom-datepicker'
        placeholderText={
          dayType === 'start' ? '시작 날짜 선택' : '종료 날짜 선택'
        }
        dateFormat='yyyy년 MM월 dd일'
        selected={selectDate || selectedDate}
        onChange={(date: Date | null) => {
          onSelectedDateChange(date);
        }}
        minDate={minDate || undefined}
        {...(dayType === 'start'
          ? { selectsStart: true }
          : { selectsEnd: true })}
      />
    </DatePickerContainer>
  );
};

const DatePickerContainer = styled.div`
  display: flex;
  flex-direction: row;

  .custom-datepicker {
    color: var(--color-black);
    border: 1px solid #e2e8e0;
    border-radius: 4px;
    padding: 8px 16px;
    background-color: white;
    width: 100%;
    height: 100%;
    font-size: 16px;
    outline: none;
  }
`;
