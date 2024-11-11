import { useServiceDate } from '../hooks';

describe('useServiceDate', () => {
  it('올바른 날짜 형식을 포맷하여 반환한다', () => {
    const formattedDate = useServiceDate('1981-02-22T09:00:00');
    expect(formattedDate).toBe('2월 22일');
  });

  it('한 자리 월과 일에도 올바르게 포맷하여 반환한다', () => {
    const formattedDate = useServiceDate('2023-01-05T12:00:00');
    expect(formattedDate).toBe('1월 05일');
  });

  it('서비스 날짜가 undefined일 경우 빈 문자열을 반환한다', () => {
    const formattedDate = useServiceDate(undefined);
    expect(formattedDate).toBe('');
  });
});
