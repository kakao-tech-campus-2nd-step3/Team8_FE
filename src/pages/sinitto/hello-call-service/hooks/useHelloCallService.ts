import { useParams } from 'react-router-dom';

import { useGetServiceDetail, usePutAcceptHelloCall } from '../api';
import { useServiceDate } from './useServiceDate';

export const useHelloCallService = () => {
  const { helloCallId } = useParams();

  const { data: serviceData } = useGetServiceDetail(Number(helloCallId));

  const { mutate: acceptHelloCall } = usePutAcceptHelloCall(
    Number(helloCallId)
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
