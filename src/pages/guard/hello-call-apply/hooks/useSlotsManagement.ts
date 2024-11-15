import { useState, useEffect } from 'react';

import { TIME_SLOTS } from '../data';
import { TimeSlots } from '../types';
import { useSlots } from './useSlots';

export const useSlotsManagement = (
  setTimeSlotsArray: (slot: TimeSlots[]) => void
) => {
  const [days, setDays] = useState<string[]>([]);
  const [startTime, setStartTime] = useState<string>('');
  const [endTime, setEndTime] = useState<string>('');

  const { slots: addSlots, addSlot, removeSlot } = useSlots();

  useEffect(() => {
    const updatedSlots: TimeSlots[] = addSlots.map((_, index) => ({
      dayName: days[index] || '월',
      startTime,
      endTime,
      selectedTime: null,
    }));

    setTimeSlotsArray(updatedSlots);
  }, [addSlots, startTime, endTime, setTimeSlotsArray, days]);

  const handleDayChange = (
    e: React.ChangeEvent<HTMLSelectElement>,
    index: number
  ) => {
    const selectedDay = e.target.value;
    setDays((prevDays) => {
      const newDays = [...prevDays];
      newDays[index] = selectedDay;
      return newDays;
    });
  };

  const handleDaySelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value;
    const selectedSlot = TIME_SLOTS.find(
      (slot) => slot.value === selectedValue
    );
    if (selectedSlot) {
      const [start, end] = selectedSlot.label.split(' ~ ');
      setStartTime(start);
      setEndTime(end);
    }
  };

  const isAddDisabled = addSlots.length >= 7;
  const isRemoveDisabled = addSlots.length <= 1;

  return {
    days,
    addSlots,
    addSlot,
    removeSlot,
    handleDayChange,
    handleDaySelect,
    isAddDisabled,
    isRemoveDisabled,
  };
};
