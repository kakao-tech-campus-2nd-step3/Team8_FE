import { Outlet, useLocation } from 'react-router-dom';

import Header from '../../features/header';
import { RouterPath } from '@/app/routes/path';

const Layout = () => {
  const location = useLocation();
  let title;

  // 현재 경로에 따라 제목을 설정
  switch (location.pathname) {
    case RouterPath.REGISTER:
      title = '회원가입';
      break;
    case RouterPath.SINITTO_MYPAGE:
      title = '마이페이지';
      break;
    case RouterPath.GUARD_MYPAGE:
      title = '마이페이지';
      break;
    case RouterPath.GUARD_GUIDELINE:
      title = '요청 가이드라인';
      break;
    case RouterPath.SERVICE_HISTORY:
      title = '서비스 이용 내역';
      break;
    case RouterPath.HELLO_CALL:
      title = '안부전화 서비스';
      break;
    case RouterPath.SENIOR_REGISTER:
      title = '시니어 등록';
      break;
    case RouterPath.CALL_BACK_LIST:
      title = '콜백 요청';
      break;
    case RouterPath.SINITTO_REVIEW:
      title = '시니또 평가';
      break;
    default:
      title = '나만의 작은 시니또';
  }

  return (
    <>
      <Header title={title} />
      <Outlet />
    </>
  );
};

export default Layout;
