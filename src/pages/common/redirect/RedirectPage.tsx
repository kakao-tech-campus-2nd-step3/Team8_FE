import { useLocation } from 'react-router-dom';

import { RedirectSection } from './components';

const RedirectPage = () => {
  const location = useLocation();

  const code = new URLSearchParams(location.search).get('code');
  if (!code) {
    return <div>로그인을 다시 진행해주세요.</div>;
  }

  return <RedirectSection code={code} />;
};

export default RedirectPage;
