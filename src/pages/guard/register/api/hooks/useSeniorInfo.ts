import { useState } from 'react';

import { SeniorRegisterValues as SeniorRegisterRequest } from '../types/senior-register.type';
import { UseMutationResult } from '@tanstack/react-query';

type SeniorInfoType = {
  seniorName: string;
  seniorPhoneNumber: string;
  seniorId: number;
};

type UseSeniorInfoProps = {
  senior: SeniorInfoType;
  deleteMutation: UseMutationResult<string, Error, number>;
  editMutation: UseMutationResult<
    string,
    Error,
    { seniorId: number; seniorInfo: SeniorRegisterRequest }
  >;
};

type UseSeniorInfoReturn = {
  isEditing: boolean;
  seniorName: string;
  seniorPhoneNumber: string;
  setIsEditing: (value: boolean) => void;
  setSeniorName: (value: string) => void;
  setSeniorPhoneNumber: (value: string) => void;
  deleteSenior: () => void;
  editSenior: () => void;
};

export const useSeniorInfo = ({
  senior,
  deleteMutation,
  editMutation,
}: UseSeniorInfoProps): UseSeniorInfoReturn => {
  const [isEditing, setIsEditing] = useState(false);
  const [seniorName, setSeniorName] = useState(senior.seniorName);
  const [seniorPhoneNumber, setSeniorPhoneNumber] = useState(
    senior.seniorPhoneNumber
  );

  const deleteSenior = () => {
    const isConfirmed = window.confirm('해당 시니어를 삭제하시겠습니까?');
    if (isConfirmed) {
      deleteMutation.mutate(senior.seniorId);
    }
  };

  const editSenior = () => {
    editMutation.mutate({
      seniorId: senior.seniorId,
      seniorInfo: { seniorName, seniorPhoneNumber },
    });
    setIsEditing(false);
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
