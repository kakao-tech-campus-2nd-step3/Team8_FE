import { CallbackResponse } from '@/shared';

export const useCallbackMenuData = (
  callbackData: CallbackResponse | undefined,
  callBackId: string
) => {
  if (!callbackData) return null;
  return {
    callBackId: Number(callBackId),
    accept: callbackData.isAssignedToSelf,
    phoneNumber: callbackData.seniorPhoneNumber,
  };
};
