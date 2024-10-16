import { getSinittoInformation } from '../api';
import {
  getSinittoInformationQueryKey,
  modifySinittoBankInfomation,
  SinittoBankInfo,
  SinittoInformation,
} from '../api/sinitto-information.api';
import {
  useMutation,
  UseMutationResult,
  useQuery,
} from '@tanstack/react-query';

export const useGetSinittoInformation = () => {
  return useQuery<SinittoInformation, Error>({
    queryKey: getSinittoInformationQueryKey,
    queryFn: () => getSinittoInformation(),
  });
};

export const useModifySinittoBankInfomation = (): UseMutationResult<
  string,
  Error,
  SinittoBankInfo
> => {
  return useMutation({
    mutationFn: (bankInfo) => modifySinittoBankInfomation(bankInfo),
    onSuccess: (data: string) => {
      alert(data);
    },
    onError: (error: Error) => {
      console.error(error);
    },
  });
};
