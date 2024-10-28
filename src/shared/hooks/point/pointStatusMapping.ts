// 상태 키 타입 정의
export type PointStatus =
  | 'SPEND_COMPLETE'
  | 'SPEND_CANCEL'
  | 'WITHDRAW_REQUEST'
  | 'WITHDRAW_WAITING'
  | 'WITHDRAW_COMPLETE'
  | 'WITHDRAW_FAIL_AND_RESTORE_POINT'
  | 'EARN'
  | 'CHARGE_REQUEST'
  | 'CHARGE_WAITING'
  | 'CHARGE_COMPLETE'
  | 'CHARGE_FAIL';

// 상태 맵핑
export const pointStatusMapping: Record<PointStatus, string> = {
  SPEND_COMPLETE: '소비 확정',
  SPEND_CANCEL: '소비 취소',
  WITHDRAW_REQUEST: '출금 신청',
  WITHDRAW_WAITING: '출금 대기',
  WITHDRAW_COMPLETE: '출금 완료',
  WITHDRAW_FAIL_AND_RESTORE_POINT: '출금 실패',
  EARN: '적립',
  CHARGE_REQUEST: '충전 요청',
  CHARGE_WAITING: '충전 대기',
  CHARGE_COMPLETE: '충전 완료',
  CHARGE_FAIL: '충전 실패',
};

// 상태 가져오기
export const getPointStatusLabel = (status: PointStatus | string): string => {
  return pointStatusMapping[status as PointStatus] || status; // 기본값으로 원래 상태를 반환
};
