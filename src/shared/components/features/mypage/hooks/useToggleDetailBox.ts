import { useState } from 'react';

import { DUMMY_DATA } from '@/pages/sinitto/mypage/data/detail';

export const useToggleDetailBox = () => {
  // 처음에 5개 보여주고, 더보기를 눌렀을 때 나머지 전부를 보여주기
  const [visibleCount, setVisibleCount] = useState(5); // 기본적으로 5개 보여줌
  const [enabled, setEnabled] = useState(false); // 더보기, 숨기기 상태

  // 더보기, 숨기기 버튼을 눌렀을 때 동작
  const toggle = () => {
    if (enabled) {
      // 숨기기 동작
      setVisibleCount(5);
    } else {
      // 더보기 동작
      setVisibleCount(DUMMY_DATA.length);
    }
    setEnabled(!enabled);
  };

  const data = DUMMY_DATA.slice(0, visibleCount);

  return { data, enabled, toggle };
};
