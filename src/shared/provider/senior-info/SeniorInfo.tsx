import { createContext, useContext, ReactNode } from 'react';

import { AllSeniorInfoResponse, useGetAllSeniorInfo } from '@/pages';
import { UseQueryResult } from '@tanstack/react-query';

type AllSeniorInfoType = UseQueryResult<AllSeniorInfoResponse, Error>;

const AllSeniorInfo = createContext<AllSeniorInfoType | undefined>(undefined);

export const AllSeniorInfoProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const allSeniorInfo = useGetAllSeniorInfo();

  return (
    <AllSeniorInfo.Provider value={allSeniorInfo}>
      {children}
    </AllSeniorInfo.Provider>
  );
};

export const useAllSeniorInfo = (): AllSeniorInfoType => {
  const context = useContext(AllSeniorInfo);
  if (context === undefined) {
    throw new Error(
      'useAllSeniorInfo hook은 AllSeniorInfoProvider 내부에서 사용되어야 합니다.'
    );
  }
  return context;
};
