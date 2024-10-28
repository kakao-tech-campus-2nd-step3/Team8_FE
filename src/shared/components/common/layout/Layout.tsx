import { Outlet } from 'react-router-dom';

import { Header } from '@/shared/components';

type LayoutProps = {
  title: string;
};

const Layout = ({ title }: LayoutProps) => {
  return (
    <>
      <Header title={title} />
      <Outlet />
    </>
  );
};

export default Layout;
