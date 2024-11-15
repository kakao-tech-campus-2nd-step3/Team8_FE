import { createContext, useContext, ReactNode } from 'react';

import { useGetSinittoInfo } from '@/pages/sinitto/sinitto-main/hooks';
import { SinittoInfoResponse } from '@/pages/sinitto/sinitto-main/types';
import { UseQueryResult } from '@tanstack/react-query';

type SinittoInfoType = UseQueryResult<SinittoInfoResponse, Error>;

const SinittoInfo = createContext<SinittoInfoType | undefined>(undefined);

export const SinittoInfoProvider = ({ children }: { children: ReactNode }) => {
  const sinittoInfo = useGetSinittoInfo();

  return (
    <SinittoInfo.Provider value={sinittoInfo}>{children}</SinittoInfo.Provider>
  );
};

export const useSinittoInfo = (): SinittoInfoType => {
  const context = useContext(SinittoInfo);
  if (context === undefined) {
    throw new Error(
      'useSinittoInfo hook은 SinittoInfoProvider 내부에서 사용되어야 합니다.'
    );
  }
  return context;
};
