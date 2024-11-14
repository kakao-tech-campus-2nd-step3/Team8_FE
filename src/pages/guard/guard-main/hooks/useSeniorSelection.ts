import { ChangeEvent, Dispatch, SetStateAction } from 'react';

import { useAllSeniorInfo } from '@/shared';

type UseSeniorSelectionProps = {
  currentSenior: number | null;
  setCurrentSenior: Dispatch<SetStateAction<number | null>>;
};

export const useSeniorSelection = ({
  currentSenior,
  setCurrentSenior,
}: UseSeniorSelectionProps) => {
  const { data: seniors } = useAllSeniorInfo();

  const handleSeniorChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    setCurrentSenior(selectedValue ? Number(selectedValue) : null);
  };

  return { seniors, currentSenior, handleSeniorChange };
};
