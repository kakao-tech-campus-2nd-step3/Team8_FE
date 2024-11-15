import { useParams } from 'react-router-dom';

export type CallBackDetailParams = {
  callBackId: string;
};

export const useCallbackDetailParams = () => {
  const { callBackId = '' } = useParams<CallBackDetailParams>();
  return { callBackId };
};
