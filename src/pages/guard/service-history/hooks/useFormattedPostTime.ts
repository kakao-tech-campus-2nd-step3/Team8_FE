import { formatPostTime } from '@/shared';

export const useFormattedPostTime = (postTime: string) => {
  return formatPostTime(postTime);
};
