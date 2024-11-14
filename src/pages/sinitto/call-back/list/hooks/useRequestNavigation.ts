import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

export const useRequestNavigation = (id: string) => {
  const navigate = useNavigate();

  return useCallback(() => {
    navigate(`${id}`);
  }, [navigate, id]);
};
