import {
  modifySinittoBankInfomation,
  modifySinittoInfomation,
} from '../sinitto-information.api';
import { SinittoBankInfo, SinittoInformation } from '../types';
import { useMutation, UseMutationResult } from '@tanstack/react-query';

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

export const useModifySinittoInformation = (): UseMutationResult<
  string,
  Error,
  SinittoInformation
> => {
  return useMutation({
    mutationFn: (sinittoInfo) => modifySinittoInfomation(sinittoInfo),
    onSuccess: (data: string) => {
      alert(data);
    },
    onError: (error: Error) => {
      console.error(error);
    },
  });
};
