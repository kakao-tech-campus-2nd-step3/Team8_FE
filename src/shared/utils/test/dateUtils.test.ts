import { formatDate, formatPostTime } from '../dateUtils';

describe('> formatDate', () => {
  describe("날짜 형식을 'YYYY-MM-DD' 에서 'MM.DD-MM.DD' 형식으로 포맷팅한다.", () => {
    it.each([
      {
        startDate: '2024-11-02',
        endDate: '2024-11-05',
        expected: '11.02-11.05',
      },
      {
        startDate: '2024-01-15',
        endDate: '2024-02-01',
        expected: '01.15-02.01',
      },
      {
        startDate: undefined,
        endDate: undefined,
        expected: 'undefined-undefined',
      },
      {
        startDate: '2024-03-01',
        endDate: undefined,
        expected: '03.01-undefined',
      },
    ])(
      'startDate: $startDate, endDate: $endDate => $expected',
      ({ startDate, endDate, expected }) => {
        expect(formatDate(startDate, endDate)).toBe(expected);
      }
    );
  });
});

describe('> formatPostTime', () => {
  describe("ISO 형식의 날짜를 'YY.MM.DD' 형식으로 변환한다.", () => {
    it.each([
      {
        postTime: '2024-11-02T21:45:15.679988',
        expected: '24.11.02',
      },
      {
        postTime: '2023-10-15T09:30:00.000000',
        expected: '23.10.15',
      },
      {
        postTime: '2025-10-01T23:59:59.999999',
        expected: '25.10.01',
      },
    ])('$postTime => $expected', ({ postTime, expected }) => {
      expect(formatPostTime(postTime)).toBe(expected);
    });
  });
});
