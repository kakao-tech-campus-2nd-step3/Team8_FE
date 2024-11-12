import {
  getSinittoBankInfo,
  getSinittoInformation,
  modifySinittoBankInformation,
  modifySinittoInformation,
  registerSinittoBankInformation,
} from '../api/sinitto-information.api';
import {
  SinittoBankInfo,
  SinittoInfoRequest,
  SinittoInformation,
} from '../api/types';
import {
  useMutation,
  UseMutationResult,
  useQuery,
} from '@tanstack/react-query';

// 계좌 정보 조회
export const useGetSinittoBankInfo = () => {
  return useQuery<SinittoBankInfo, Error>({
    queryKey: ['sinitto-bank-information'],
    queryFn: () => getSinittoBankInfo(),
  });
};

// 계좌 정보 수정
export const useModifySinittoBankInformation = (): UseMutationResult<
  string,
  Error,
  SinittoBankInfo
> => {
  return useMutation({
    mutationFn: (bankInfo) => modifySinittoBankInformation(bankInfo),
    onSuccess: (data: string) => {
      alert(data);
    },
    onError: (error: Error) => {
      console.error(error);
    },
  });
};

// 계좌 정보 등록
export const useRegisterSinittoBankInformation = (): UseMutationResult<
  string,
  Error,
  SinittoBankInfo
> => {
  return useMutation({
    mutationFn: (bankInfo) => registerSinittoBankInformation(bankInfo),
    onSuccess: (data: string) => {
      alert(data);
    },
    onError: (error: Error) => {
      console.error(error);
    },
  });
};

// 본인 정보 조회
export const useGetSinittoInfomation = () => {
  return useQuery<SinittoInformation, Error>({
    queryKey: ['sinitto-information'],
    queryFn: () => getSinittoInformation(),
  });
};

// 본인 정보 수정
export const useModifySinittoInformation = (): UseMutationResult<
  string,
  Error,
  SinittoInfoRequest
> => {
  return useMutation({
    mutationFn: (sinittoInfo) => modifySinittoInformation(sinittoInfo),
    onSuccess: (data: string) => {
      alert(data);
    },
    onError: (error: Error) => {
      console.error(error);
    },
  });
};
