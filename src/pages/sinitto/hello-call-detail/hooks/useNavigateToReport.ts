import { useNavigate } from 'react-router-dom';

export const useNavigateToReport = (helloCallId: string | undefined) => {
  const navigate = useNavigate();

  const goToReport = () => {
    if (helloCallId) {
      navigate(`/sinitto/hello-call/report/${helloCallId}`);
    }
  };

  return goToReport;
};
