import { useEffect, useState } from 'react';

import { useModifySinittoInformation } from '@/pages';
import {
  parsePhoneNumber,
  useSinittoInfo,
  validatePhoneNumber,
  validateName,
  formatPhoneNumber,
} from '@/shared';

export const useSinittoProfile = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  const { data: seniorInfo, refetch } = useSinittoInfo();
  const modifySinittoInfoMutation = useModifySinittoInformation();

  useEffect(() => {
    if (isEditing) {
      setName(seniorInfo?.name || '');
      setPhoneNumber(formatPhoneNumber(String(seniorInfo?.phoneNumber)) || '');
    }
  }, [isEditing, seniorInfo]);

  const saveModifiedInfo = () => {
    if (!validateName(name) || !validatePhoneNumber(phoneNumber)) {
      alert(
        '유효하지 않은 형식입니다.\n예) 이름 : 홍길동\n전화번호 : 010-1234-5678'
      );
      setName('');
      setPhoneNumber('');
      return;
    } else {
      const modifiedSinittoInfo = {
        name: name,
        phoneNumber: parsePhoneNumber(phoneNumber),
      };
      modifySinittoInfoMutation.mutate(modifiedSinittoInfo, {
        onSuccess: () => {
          setIsEditing(false);
          refetch();
        },
      });
    }
  };

  return {
    profileData: {
      name,
      phoneNumber,
      seniorInfo,
    },
    states: {
      isEditing,
    },
    handlers: {
      setName,
      setPhoneNumber,
      setIsEditing,
      saveModifiedInfo,
    },
  };
};
