import { useEffect, useState } from 'react';

export const useErrorHandling = (isError: boolean, error: unknown) => {
  const [isLastPageReached, setIsLastPageReached] = useState(false);

  useEffect(() => {
    if (isError && error instanceof Error && error.message.includes('500')) {
      setIsLastPageReached(true);
    }
  }, [isError, error]);

  return isLastPageReached;
};
