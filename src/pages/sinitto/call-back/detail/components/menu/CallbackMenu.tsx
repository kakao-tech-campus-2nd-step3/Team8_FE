import { useNavigate } from 'react-router-dom';

import {
  useAcceptCallback,
  useCancelCallback,
  useCompleteCallback,
} from '../../api/hooks';
import { PostAcceptMenu } from '../../components/menu/post-accept';
import { PreAcceptMenu } from '../../components/menu/pre-accept';
import { RouterPath } from '@/app/routes/path';
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
  const navigate = useNavigate();

  const {
    mutate: acceptCallback,
    isPending: isAcceptLoading,
    isSuccess: isAcceptSuccess,
  } = useAcceptCallback();
  if (isAcceptSuccess) {
    window.location.reload();
  }

  const {
    mutate: completeCallback,
    isPending: isCompleteLoading,
    isSuccess: isCompleteSuccess,
  } = useCompleteCallback();
  if (isCompleteSuccess) {
    navigate(RouterPath.SINITTO);
  }

  const {
    mutate: cancelCallback,
    isPending: isCancelLoading,
    isSuccess: isCancelSuccess,
  } = useCancelCallback();
  if (isCancelSuccess) {
    navigate(RouterPath.SINITTO);
  }

  const isLoading = isAcceptLoading || isCancelLoading || isCompleteLoading;

  return isLoading ? (
    <Spinner size='xl' marginTop='30px' />
  ) : accept ? (
    <PostAcceptMenu
      handleComplete={() => completeCallback(callBackId)}
      handleCancle={() => cancelCallback(callBackId)}
      phoneNumber={formatPhoneNumber(phoneNumber)}
    />
  ) : (
    <PreAcceptMenu handleClick={() => acceptCallback(callBackId)} />
  );
};
