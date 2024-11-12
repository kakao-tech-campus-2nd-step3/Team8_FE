import { useParams } from 'react-router-dom';

import { useGetServiceDetail } from './useGetServiceDetail';
import { usePutAcceptHelloCall } from './usePutAcceptHelloCall';
import { useServiceDate } from './useServiceDate';
import { RouterPath } from '@/app/routes';

export const useHelloCallService = () => {
  const { helloCallId } = useParams();

  const { data: serviceData } = useGetServiceDetail(Number(helloCallId));

  const { mutate: acceptHelloCall } = usePutAcceptHelloCall(
    Number(helloCallId),
    RouterPath.SINITTO
  );

  const startDate = useServiceDate(serviceData?.startDate);
  const endDate = useServiceDate(serviceData?.endDate);

  const handleAcceptService = () => {
    acceptHelloCall();
  };

  return {
    serviceData,
    startDate,
    endDate,
    handleAcceptService,
  };
};
