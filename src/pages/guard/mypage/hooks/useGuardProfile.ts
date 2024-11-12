import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { RouterPath } from '@/app/routes';
import {
  formatPhoneNumber,
  parsePhoneNumber,
  validateName,
  validatePhoneNumber,
} from '@/shared';
import { UseMutationResult } from '@tanstack/react-query';

type GuardInfo = {
  name: string;
  phoneNumber: string;
};

type ModifyGuardInfoRequest = {
  name: string;
  phoneNumber: string;
};

type Props = {
  guardInfo: GuardInfo | undefined;
  modifyGuardInfoMutation: UseMutationResult<
    string,
    Error,
    ModifyGuardInfoRequest
  >;
  refetch: () => void;
};

export const useGuardProfile = ({
  guardInfo,
  modifyGuardInfoMutation,
  refetch,
}: Props) => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (isEditing) {
      setName(guardInfo?.name || '');
      setPhoneNumber(formatPhoneNumber(String(guardInfo?.phoneNumber)) || '');
    }
  }, [isEditing, guardInfo]);

  const handleSaveClick = () => {
    const modifiedGuardInfo = {
      name: name,
      phoneNumber: parsePhoneNumber(phoneNumber),
    };

    if (!validateName(name) || !validatePhoneNumber(phoneNumber)) {
      alert(
        '유효하지 않은 형식입니다.\n예) 이름 : 홍길동\n전화번호 : 010-1234-5678'
      );
      setName('');
      setPhoneNumber('');
      return;
    } else {
      modifyGuardInfoMutation.mutate(modifiedGuardInfo, {
        onSuccess: () => {
          setIsEditing(false);
          refetch();
        },
      });
    }
  };

  const handleServiceManualClick = () => {
    navigate(RouterPath.SERVICE_MANUAL);
  };

  const handleSeniorManagementClick = () => {
    navigate(RouterPath.SENIOR_REGISTER);
  };

  const handleServiceHistoryClick = () => {
    navigate(RouterPath.SERVICE_HISTORY);
  };

  return {
    name,
    phoneNumber,
    isEditing,
    setName,
    setPhoneNumber,
    setIsEditing,
    handleSaveClick,
    handleServiceManualClick,
    handleSeniorManagementClick,
    handleServiceHistoryClick,
  };
};
