import { useState, useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { RouterPath } from '../../path';
import { authStorage } from '@/shared';

type Props = {
  requiresAuth?: boolean;
  sinittoOnly?: boolean;
  guardOnly?: boolean;
};

const ProtectedRoute = ({ requiresAuth, sinittoOnly, guardOnly }: Props) => {
  const [isAuthLoading, setIsAuthLoading] = useState(true);
  const accessToken = authStorage.accessToken.get();
  const isSinitto = authStorage.isSinitto.get() === 'true';

  useEffect(() => {
    setIsAuthLoading(false);
  }, [accessToken, isSinitto]);

  if (isAuthLoading) {
    return <></>;
  }

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
