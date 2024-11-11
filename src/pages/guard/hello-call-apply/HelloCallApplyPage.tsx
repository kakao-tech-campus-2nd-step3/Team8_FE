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
import { PageLayout } from '@/shared';
import { Divider } from '@chakra-ui/react';

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
    <PageLayout>
      <NoticeArea />
      <Divider />
      <SelectSenior setSelectedSeniorId={setSelectedSeniorId} />
      <Divider />

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
      <Divider />

      <TellToSinitto message={message} setMessage={setMessage} />
      <ServiceApply
        startDate={startDate}
        endDate={endDate}
        timeSlotsArray={timeSlotsArray}
        serviceTime={serviceTime}
        price={price}
        selectedSeniorId={selectedSeniorId}
      />
    </PageLayout>
  );
};
