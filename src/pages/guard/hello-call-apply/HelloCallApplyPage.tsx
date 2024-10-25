import { TimeSlot } from './api/types';
import {
  NoticeArea,
  SelectSenior,
  ServicePeriod,
  ServiceTotal,
  ServiceUsingTime,
  TellToSinitto,
} from './components';
import { ServiceApply } from './components/service-apply/ServiceApply';
import { useHelloCallState } from './hooks';
import styled from '@emotion/styled';

export type TimeSlots = {
  selectedTime?: number | null;
} & TimeSlot;

export const HelloCallApplyPage = () => {
  const {
    timeSlotsArray,
    setTimeSlotsArray,
    serviceTime,
    setServiceTime,
    startDate,
    setStartDate,
    endDate,
    setEndDate,
    price,
    setPrice,
    selectedSeniorId,
    setSelectedSeniorId,
    message,
    setMessage,
  } = useHelloCallState();

  return (
    <HelloCallApplyPageLayout>
      <NoticeArea />
      <SelectSenior setSelectedSeniorId={setSelectedSeniorId} />
      <ServiceUsingTime
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
      <TellToSinitto message={message} setMessage={setMessage} />
      <ServiceApply
        startDate={startDate}
        endDate={endDate}
        timeSlotsArray={timeSlotsArray}
        serviceTime={serviceTime}
        price={price}
        selectedSeniorId={selectedSeniorId}
      />
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
