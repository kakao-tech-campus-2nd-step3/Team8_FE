import { lazy } from 'react';

import { useHandleCallback } from '../../hooks';
import { formatPhoneNumber } from '@/shared';
import { Skeleton } from '@chakra-ui/react';

const PreAcceptMenu = lazy(() =>
  import('./pre-accept/PreAcceptMenu').then((module) => ({
    default: module.PreAcceptMenu,
  }))
);

const PostAcceptMenu = lazy(() =>
  import('./post-accept/PostAcceptMenu').then((module) => ({
    default: module.PostAcceptMenu,
  }))
);

type MenuProps = {
  callBackId: number;
  accept: boolean;
  phoneNumber: string;
};

export const CallbackMenu = ({
  callBackId,
  accept,
  phoneNumber,
}: MenuProps) => {
  const { isLoading, completeCallback, cancelCallback, acceptCallback } =
    useHandleCallback();

  return isLoading ? (
    <Skeleton height='50px' width='100%' />
  ) : accept ? (
    <PostAcceptMenu
      completeCallback={() => completeCallback(callBackId)}
      cancelCallback={() => cancelCallback(callBackId)}
      phoneNumber={formatPhoneNumber(phoneNumber)}
    />
  ) : (
    <PreAcceptMenu acceptCallback={() => acceptCallback(callBackId)} />
  );
};
