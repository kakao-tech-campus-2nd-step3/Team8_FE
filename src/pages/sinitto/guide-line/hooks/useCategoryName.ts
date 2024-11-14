import { useMemo } from 'react';

import { CATEGORIES } from '../data';
import { Category } from '../types';

export const useCategoryName = (guideLineId: string) => {
  return useMemo(
    () =>
      CATEGORIES.find((item: Category) => item.id === guideLineId)?.name ||
      null,
    [guideLineId]
  );
};
