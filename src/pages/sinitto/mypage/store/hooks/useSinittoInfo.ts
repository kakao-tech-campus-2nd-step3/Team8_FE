import { getSinittoInformation } from '../api';
import {
  getSinittoInformationQueryKey,
  SinittoInformation,
} from '../api/sinitto-information.api';
import { useQuery } from '@tanstack/react-query';

export const useGetSinittoInformation = () => {
  return useQuery<SinittoInformation, Error>({
    queryKey: getSinittoInformationQueryKey,
    queryFn: () => getSinittoInformation(),
  });
};
