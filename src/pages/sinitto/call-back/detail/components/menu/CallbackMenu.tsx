import { useNavigate } from 'react-router-dom';

import {
  useAcceptCallback,
  useCancelCallback,
  useCompleteCallback,
} from '../../api/hooks';
import { PostAcceptMenu } from '../../components/menu/post-accept';
import { PreAcceptMenu } from '../../components/menu/pre-accept';
import { Spinner } from '@chakra-ui/react';

type MenuProps = {
  callBackId: number;
  accept: boolean;
};

export const CallbackMenu = ({ callBackId, accept }: MenuProps) => {
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
    navigate('/call-back'); // TODO: 완료 이후 이동 페이지 지정 필요
  }

  const {
    mutate: cancelCallback,
    isPending: isCancelLoading,
    isSuccess: isCancelSuccess,
  } = useCancelCallback();
  if (isCancelSuccess) {
    navigate('/call-back'); // TODO: 취소 이후 이동 페이지 지정 필요
  }

  const isLoading = isAcceptLoading || isCancelLoading || isCompleteLoading;

  return isLoading ? (
    <Spinner size='xl' marginTop='30px' />
  ) : accept ? (
    <PostAcceptMenu
      handleComplete={() => completeCallback(callBackId)}
      handleCancle={() => cancelCallback(callBackId)}
      phoneNumber='010-1234-5678' // TODO: api로 콜백 조회 시 response에 전화번호 추가 필요
    />
  ) : (
    <PreAcceptMenu handleClick={() => acceptCallback(callBackId)} />
  );
};
