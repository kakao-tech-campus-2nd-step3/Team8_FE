import { useEffect, useState } from 'react';

import axios from 'axios';

import { useGetAcceptedCallBackList } from './useGetAcceptedCallBackList';

export const useAcceptedCallBackData = () => {
  const [isAcceptedError, setIsAcceptedError] = useState(false);

  const {
    data: acceptedCallBackList,
    isLoading: isAcceptedLoading,
    error: acceptedError,
  } = useGetAcceptedCallBackList();

  useEffect(() => {
    if (
      axios.isAxiosError(acceptedError) &&
      acceptedError.response?.status === 404
    ) {
      setIsAcceptedError(true);
    }
  }, [acceptedError]);

  return {
    acceptedCallBackList,
    isAcceptedLoading,
    isAcceptedError,
  };
};
