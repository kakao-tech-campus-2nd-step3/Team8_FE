import { Outlet } from 'react-router-dom';

import { Header, SinittoHomeHeader } from '@/shared';

type LayoutProps = {
  title?: string;
  SinittoHome?: boolean;
};

const Layout = ({ title, SinittoHome }: LayoutProps) => {
  return (
    <>
      {SinittoHome ? <SinittoHomeHeader /> : <Header title={title || ''} />}
      <Outlet />
    </>
  );
};

export default Layout;
