import { getStatusStyle, StatusStyle } from '../statusUtils';

describe('> getStatusStyle', () => {
  describe('status에 맞는 색상과 텍스트를 반환한다', () => {
    it.each<{
      status: string;
      expected: StatusStyle;
    }>([
      {
        status: 'WAITING',
        expected: {
          backgroundColor: '#FFDA76',
          text: '대기중',
        },
      },
      {
        status: 'PENDING_COMPLETE',
        expected: {
          backgroundColor: '#D6E9DB',
          text: '완료대기',
        },
      },
      {
        status: 'IN_PROGRESS',
        expected: {
          backgroundColor: '#FFA7B5',
          text: '진행중',
        },
      },
      {
        status: 'COMPLETE',
        expected: {
          backgroundColor: '#82CAB7',
          text: '완료',
        },
      },
      {
        status: 'WRONG_STATUS',
        expected: {
          backgroundColor: '#FFDA76',
          text: '대기중',
        },
      },
    ])('status: $status => $expected', ({ status, expected }) => {
      expect(getStatusStyle(status)).toEqual(expected);
    });
  });
});
