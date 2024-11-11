import { useServiceDate } from '../hooks/useServiceDate';

describe('> useServiceDate', () => {
  describe("날짜 형식을 'YYYY-MM-DDTHH:mm:ss' 형식에서 'MM월 DD일' 형식으로 변환한다.", () => {
    it.each([
      {
        date: '1981-02-22T09:00:00',
        expected: '2월 22일',
      },
      {
        date: '2023-01-05T12:00:00',
        expected: '1월 05일',
      },
      {
        date: undefined,
        expected: '',
      },
      {
        date: '2024-11-30T18:30:00',
        expected: '11월 30일',
      },
    ])('date: $date => $expected', ({ date, expected }) => {
      expect(useServiceDate(date)).toBe(expected);
    });
  });
});
