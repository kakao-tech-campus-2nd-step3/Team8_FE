import { useMemo } from 'react';

export const useTimeAgo = (postTime: string) => {
  return useMemo(() => {
    const postDate = new Date(postTime);
    const now = new Date();

    const differenceInMinutes = Math.floor(
      (now.getTime() - postDate.getTime()) / 60000
    );

    if (differenceInMinutes < 60) {
      return differenceInMinutes > 0
        ? `${differenceInMinutes}분 전`
        : '방금 전';
    } else {
      const differenceInHours = Math.floor(differenceInMinutes / 60);
      return `${differenceInHours}시간 전`;
    }
  }, [postTime]);
};
