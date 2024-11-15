import { useNavigate } from 'react-router-dom';

export const useNavigateToDetail = () => {
  const navigate = useNavigate();

  const handlerNavigate = (helloCallId: number) => {
    navigate(`${helloCallId}`);
  };

  return handlerNavigate;
};
