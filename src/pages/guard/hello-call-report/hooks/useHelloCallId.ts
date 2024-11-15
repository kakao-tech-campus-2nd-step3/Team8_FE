import { useParams } from 'react-router-dom';

type Params = {
  helloCallId: string;
};

export const useHelloCallId = (): number => {
  const { helloCallId } = useParams<Params>();
  return Number(helloCallId);
};
