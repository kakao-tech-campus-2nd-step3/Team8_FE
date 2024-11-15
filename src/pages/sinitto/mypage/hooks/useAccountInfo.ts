import { useState, useEffect } from 'react';

import {
  useGetSinittoBankInfo,
  useModifySinittoBankInformation,
  useRegisterSinittoBankInformation,
} from '@/pages';
import { validateAccountNumber } from '@/shared';

export const useAccountInfo = () => {
  const { data: sinittoBankInfo, refetch } = useGetSinittoBankInfo();
  const [isEditingAccount, setIsEditingAccount] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);
  const [accountNumber, setAccountNumber] = useState(
    sinittoBankInfo?.accountNumber || ''
  );
  const [bankName, setBankName] = useState(sinittoBankInfo?.bankName || '');

  const modifyBankInfoMutation = useModifySinittoBankInformation();
  const registerBankInfoMutation = useRegisterSinittoBankInformation();

  useEffect(() => {
    if (isEditingAccount || isRegistering) {
      setAccountNumber(sinittoBankInfo?.accountNumber || '');
      setBankName(sinittoBankInfo?.bankName || '');
    }
  }, [isEditingAccount, isRegistering, sinittoBankInfo]);

  const handleSaveClick = () => {
    if (validateAccountNumber(accountNumber, bankName)) {
      modifyBankInfoMutation.mutate(
        { accountNumber, bankName },
        {
          onSuccess: () => {
            setIsEditingAccount(false);
            refetch();
          },
        }
      );
    } else {
      setAccountNumber('');
      setBankName('');
      return;
    }
  };

  const registerBank = () => {
    if (!accountNumber || !bankName) {
      alert('은행 정보와 계좌번호를 기입해주세요.');
      return;
    }
    registerBankInfoMutation.mutate(
      { accountNumber, bankName },
      {
        onSuccess: () => {
          setIsRegistering(false);
          refetch();
        },
      }
    );
  };

  return {
    accountData: {
      accountNumber,
      bankName,
      sinittoBankInfo,
    },
    states: {
      isEditingAccount,
      isRegistering,
    },
    handlers: {
      setAccountNumber,
      setBankName,
      setIsEditingAccount,
      setIsRegistering,
      handleSaveClick,
      registerBank,
    },
  };
};
