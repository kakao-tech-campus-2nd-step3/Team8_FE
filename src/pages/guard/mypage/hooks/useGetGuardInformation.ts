import { GuardInformationResponse, getGuardInformation } from '../api';
import { guardInformationPath } from '../api/guard-information.api';
import { useQuery } from '@tanstack/react-query';

export const getGuardInformationQueryKey = [guardInformationPath()];

export const useGetGuardInformation = () => {
  return useQuery<GuardInformationResponse, Error>({
    queryKey: getGuardInformationQueryKey,
    queryFn: () => getGuardInformation(),
  });
};
