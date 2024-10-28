import { useState } from 'react';

type Slot = {
  day: string;
  time: string;
};

export const useSlots = (
  initialSlots: Slot[] = [{ day: '', time: '' }],
  maxSlots: number = 7
) => {
  const [slots, setSlots] = useState<Slot[]>(initialSlots);

  const addSlot = () => {
    if (slots.length < maxSlots) {
      setSlots([...slots, { day: '', time: '' }]);
    }
  };

  const removeSlot = () => {
    if (slots.length > 1) {
      setSlots(slots.slice(0, -1));
    }
  };

  return {
    slots,
    addSlot,
    removeSlot,
  };
};
