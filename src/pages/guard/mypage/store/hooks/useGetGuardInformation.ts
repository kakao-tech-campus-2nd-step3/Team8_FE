import {
  getGuardInformation,
  getGuardInformationQueryKey,
  GuardInformation,
} from '../api/guard-information.api';
import { useQuery } from '@tanstack/react-query';

export const useGetGuardInformation = () => {
  return useQuery<GuardInformation, Error>({
    queryKey: getGuardInformationQueryKey,
    queryFn: () => getGuardInformation(),
  });
};
