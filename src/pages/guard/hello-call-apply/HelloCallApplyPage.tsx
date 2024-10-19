import { useState } from 'react';

import { TimeSlot } from './api/types';
import {
  NoticeArea,
  SelectSenior,
  ServicePeriod,
  ServiceTime,
  ServiceTotal,
  TellToSinitto,
} from './components';
import { Button, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';

export type TimeSlots = {
  selectedTime?: number | null;
} & TimeSlot;

export const HelloCallApplyPage = () => {
  const [timeSlotsArray, setTimeSlotsArray] = useState<TimeSlots[]>([]);
  const [serviceTime, setServiceTime] = useState(0);
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [price, setPrice] = useState<number | null>(null);

  console.log(timeSlotsArray);
  return (
    <HelloCallApplyPageLayout>
      <NoticeArea />
      <SelectSenior />
      <ServiceTime
        setTimeSlotsArray={setTimeSlotsArray}
        setServiceTime={setServiceTime}
      />
      <ServicePeriod
        startDate={startDate}
        setStartDate={setStartDate}
        endDate={endDate}
        setEndDate={setEndDate}
      />
      <ServiceTotal
        startDate={startDate}
        endDate={endDate}
        timeSlotsArray={timeSlotsArray}
        serviceTime={serviceTime}
        setPrice={setPrice}
      />
      <TellToSinitto />
      <Button w='90%' mt={5} backgroundColor='var(--color-primary)'>
        <Text color='var(--color-white)'>{price} point로 신청하기</Text>
      </Button>
    </HelloCallApplyPageLayout>
  );
};

const HelloCallApplyPageLayout = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 1rem 1.5rem;
`;
