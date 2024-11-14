import { useHandleCallback } from '../../hooks';
import { PostAcceptMenu } from './post-accept';
import { PreAcceptMenu } from './pre-accept';
import { formatPhoneNumber } from '@/shared';
import { Spinner } from '@chakra-ui/react';

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
    <Spinner size='xl' marginTop='30px' />
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
