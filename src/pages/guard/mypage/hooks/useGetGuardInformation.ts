import { getGuardInformation, guardInformationPath } from '../apis';
import { GuardInformationResponse } from '../types';
import { useQuery } from '@tanstack/react-query';

export const getGuardInformationQueryKey = [guardInformationPath];

export const useGetGuardInformation = () => {
  return useQuery<GuardInformationResponse, Error>({
    queryKey: getGuardInformationQueryKey,
    queryFn: () => getGuardInformation(),
  });
};
