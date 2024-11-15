import { useMemo } from 'react';

import { GUIDE_LINE_CATEGORIES } from '@/shared';
import type { GuideLineCategoryProps } from '@/shared';

export const useCategoryName = (guideLineId: string) => {
  return useMemo(
    () =>
      GUIDE_LINE_CATEGORIES.find(
        (item: GuideLineCategoryProps) => item.id === guideLineId
      )?.title || null,
    [guideLineId]
  );
};
