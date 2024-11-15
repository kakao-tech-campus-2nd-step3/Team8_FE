import { Navigate } from 'react-router-dom';

export const RootPage = () => {
  if (window.location.pathname !== '/') return null;

  return <Navigate to='/onboard' />;
};
