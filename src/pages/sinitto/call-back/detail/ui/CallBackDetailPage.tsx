import { lazy } from 'react';
import { Outlet } from 'react-router-dom';

import { useCallbackDetailParams } from '../hooks/useCallbackDetailParams';
import { useCallbackMenuData } from '../hooks/useCallbackMenuData';
import { useFetchCallback } from '../hooks/useFetchCallback';
import { Notice, PageLayout, GuideLineButton } from '@/shared';
import { Divider, Skeleton } from '@chakra-ui/react';

const CallbackMenu = lazy(() =>
  import('../components/menu/CallbackMenu').then((module) => ({
    default: module.CallbackMenu,
  }))
);

export const CallBackDetailPage = () => {
  const { callBackId } = useCallbackDetailParams();

  const { callbackData, isCallBackLoading } = useFetchCallback(callBackId);

  const callbackMenuData = useCallbackMenuData(callbackData, callBackId);

  return (
    <>
      <PageLayout>
        <Notice
          noticeType='요청 거부'
          title='가이드라인을 잘 확인하고 수락해주세요!'
          contents='시니어의 요청이 가이드라인에서 벗어난 요청일 경우 요청을 거부할 수 있습니다!'
        />
        <GuideLineButton userType='sinitto' />
        <Divider />
        {isCallBackLoading ? (
          <Skeleton height='50px' width='100%' />
        ) : (
          callbackData &&
          callbackMenuData && <CallbackMenu {...callbackMenuData} />
        )}
      </PageLayout>
      <Outlet />
    </>
  );
};
