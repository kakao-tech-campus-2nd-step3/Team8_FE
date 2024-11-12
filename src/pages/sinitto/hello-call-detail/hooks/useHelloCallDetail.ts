import { useParams } from 'react-router-dom';

import { useGetServiceDetail } from './useGetServiceDetail';

export const useHelloCallDetail = () => {
  const { helloCallId } = useParams();
  const { data } = useGetServiceDetail(Number(helloCallId));

  return {
    helloCallId,
    data,
  };
};
