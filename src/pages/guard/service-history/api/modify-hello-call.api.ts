import { fetchInstance } from '@/shared/api/instance';

export type ModifyHelloCallRequest = {
  startDate: string;
  endDate: string;
  timeSlots: {
    dayName: string;
    startTime: string;
    endTime: string;
  }[];
  price: number;
  serviceTime: number;
  requirement: string;
};

const modifyHelloCallPath = (callId: number) =>
  `/api/hellocalls/guards/${callId}`;

export const modifyHelloCall = async (
  callId: number,
  helloCall: ModifyHelloCallRequest
) => {
  const response = await fetchInstance.put(
    modifyHelloCallPath(callId),
    helloCall
  );
  return response.data;
};
