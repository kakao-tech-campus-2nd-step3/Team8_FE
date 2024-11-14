import { useTimeAgo } from '../hooks';

describe('> useTimeAgo', () => {
  describe("날짜 형식을 'YYYY-MM-DDTHH:mm:ss' 형식에서 '방금 전', 'n분 전', 'n시간 전' 형식으로 변환한다.", () => {
    it.each([
      {
        time: new Date().toString(),
        expected: '방금 전',
      },
      {
        time: new Date(Date.now() - 5 * 60 * 1000).toString(),
        expected: '5분 전',
      },
      {
        time: new Date(Date.now() - 60 * 60 * 1000).toString(),
        expected: '1시간 전',
      },
      {
        time: new Date(Date.now() - 24 * 60 * 60 * 1000).toString(),
        expected: '24시간 전',
      },
      {
        time: new Date(Date.now() - 30 * 60 * 60 * 1000).toString(),
        expected: '30시간 전',
      },
    ])('time: $time => $expected', ({ time, expected }) => {
      expect(useTimeAgo(time)).toBe(expected);
    });
  });
});
