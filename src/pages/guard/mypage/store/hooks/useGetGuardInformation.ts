import {
  getGuardInformation,
  getGuardInformationQueryKey,
  GuardInformationResponse,
} from '../api/guard-information.api';
import { useQuery } from '@tanstack/react-query';

export const useGetGuardInformation = () => {
  return useQuery<GuardInformationResponse, Error>({
    queryKey: getGuardInformationQueryKey,
    queryFn: () => getGuardInformation(),
  });
};
