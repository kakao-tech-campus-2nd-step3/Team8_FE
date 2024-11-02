import { fetchInstance } from '@/shared/api/instance';

export type HelloCallHistory = {
  helloCallId: number;
  seniorName: string;
  days: [string];
  status: string;
};

export type HelloCallHistoryListResponse = HelloCallHistory[];

const getHelloCallHistoryPath = () => '/api/hellocalls/guards/lists';

export const getHelloCallHistoryQueryKey = () => [getHelloCallHistoryPath()];

export const getHelloCallHistory =
  async (): Promise<HelloCallHistoryListResponse> => {
    const response = await fetchInstance.get<HelloCallHistory[]>(
      getHelloCallHistoryPath()
    );
    console.log(response.data);
    return response.data;
  };
