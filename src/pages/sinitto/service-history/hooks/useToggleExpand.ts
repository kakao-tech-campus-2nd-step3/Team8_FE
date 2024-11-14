import { useState } from 'react';

export const useToggleExpand = (serviceStatus: string) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    if (serviceStatus === 'IN_PROGRESS') {
      setIsExpanded((prev) => !prev);
    }
  };

  return { isExpanded, toggleExpand };
};
