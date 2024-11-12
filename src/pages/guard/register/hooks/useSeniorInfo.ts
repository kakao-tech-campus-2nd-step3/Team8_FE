import { useState } from 'react';

import { SeniorRegisterValues as SeniorRegisterRequest } from '../api/types/senior-register.type';
import {
  formatPhoneNumber,
  parsePhoneNumber,
  validateName,
  validatePhoneNumber,
} from '@/shared';
import { UseMutationResult } from '@tanstack/react-query';

type SeniorInfoType = {
  seniorName: string;
  seniorPhoneNumber: string;
  seniorId: number;
};

type Props = {
  senior: SeniorInfoType;
  deleteMutation: UseMutationResult<string, Error, number>;
  editMutation: UseMutationResult<
    string,
    Error,
    { seniorId: number; seniorInfo: SeniorRegisterRequest }
  >;
};

export const useSeniorInfo = ({
  senior,
  deleteMutation,
  editMutation,
}: Props) => {
  const [isEditing, setIsEditing] = useState(false);
  const [seniorName, setSeniorName] = useState(senior.seniorName);
  const [seniorPhoneNumber, setSeniorPhoneNumber] = useState(
    formatPhoneNumber(senior.seniorPhoneNumber)
  );

  const deleteSenior = () => {
    const isConfirmed = window.confirm('해당 시니어를 삭제하시겠습니까?');
    if (isConfirmed) {
      deleteMutation.mutate(senior.seniorId);
    }
  };

  const editSenior = () => {
    if (!validateName(seniorName) || !validatePhoneNumber(seniorPhoneNumber)) {
      alert(
        '유효하지 않은 형식입니다.\n예) 이름 : 홍길동\n전화번호 : 010-1234-5678'
      );
      setSeniorName('');
      setSeniorPhoneNumber('');
      return;
    } else {
      editMutation.mutate({
        seniorId: senior.seniorId,
        seniorInfo: {
          seniorName,
          seniorPhoneNumber: parsePhoneNumber(seniorPhoneNumber),
        },
      });
      setIsEditing(false);
    }
  };

  return {
    isEditing,
    seniorName,
    seniorPhoneNumber,
    setIsEditing,
    setSeniorName,
    setSeniorPhoneNumber,
    deleteSenior,
    editSenior,
  };
};
