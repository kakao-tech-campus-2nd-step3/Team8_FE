import { Navigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

import { RouterPath } from '../../path';

type Props = {
  requiresAuth?: boolean;
  sinittoOnly?: boolean;
  guardOnly?: boolean;
};

const ProtectedRoute = ({ requiresAuth, sinittoOnly, guardOnly }: Props) => {
  const accessToken = localStorage.getItem('accessToken');
  const isSinitto = localStorage.getItem('isSinitto') === 'true';

  if (requiresAuth && !accessToken) {
    return <Navigate to={RouterPath.ROOT} />;
  }
  if (accessToken) {
    if (sinittoOnly && !isSinitto) {
      return <Navigate to={RouterPath.GUARD} />;
    }
    if (guardOnly && isSinitto) {
      return <Navigate to={RouterPath.SINITTO} />;
    }
    if (!requiresAuth) {
      return isSinitto ? (
        <Navigate to={RouterPath.SINITTO} />
      ) : (
        <Navigate to={RouterPath.GUARD} />
      );
    }
  }

  return <Outlet />;
};

export default ProtectedRoute;
