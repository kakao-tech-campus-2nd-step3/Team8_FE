import { useNavigate } from 'react-router-dom';

export const useServiceStatusActions = (
  status: string,
  helloCallId: number,
  deleteHelloCall: () => void
) => {
  const navigate = useNavigate();

  const serviceDelete = () => {
    deleteHelloCall();
  };

  const goToReport = () => {
    navigate(`report/${helloCallId}`);
  };

  return { status, serviceDelete, goToReport };
};
