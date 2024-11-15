import {
  NoticeArea,
  SelectSenior,
  ServiceApply,
  ServicePeriod,
  ServiceTotal,
  ServiceUsingTime,
  TellToSinitto,
} from '../components';
import { useHelloCallState, useMessage } from '../hooks';
import { PageLayout } from '@/shared';
import { Divider } from '@chakra-ui/react';

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
  } = useHelloCallState();

  const { message } = useMessage('');

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

      <TellToSinitto initialMessage={message} />
      <ServiceApply
        startDate={startDate}
        endDate={endDate}
        timeSlotsArray={timeSlotsArray}
        serviceTime={serviceTime}
        price={price}
        selectedSeniorId={selectedSeniorId}
        requirement={message}
      />
    </PageLayout>
  );
};
