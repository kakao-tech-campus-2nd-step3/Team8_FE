import { useNavigate } from 'react-router-dom';

export const useNavigateToDetail = (helloCallId: number) => {
  const navigate = useNavigate();

  const goToDetail = () => {
    localStorage.setItem('helloCallId', helloCallId.toString());
    navigate(`/sinitto/hello-call/${helloCallId}/detail`);
  };

  return { goToDetail };
};
