import { formatPhoneNumber, parsePhoneNumber } from '../formatPhoneNumber';

describe('> formatPhoneNumber', () => {
  describe('formatPhoneNumber', () => {
    it('11자리 전화번호를 XXX-XXXX-XXXX 형태로 포맷팅한다', () => {
      expect(formatPhoneNumber('01012345678')).toBe('010-1234-5678');
      expect(formatPhoneNumber('010-1234-5678')).toBe('010-1234-5678');
    });

    it('10자리 전화번호를 XXX-XXX-XXXX 형태로 포맷팅한다', () => {
      expect(formatPhoneNumber('0553396717')).toBe('055-339-6717');
      expect(formatPhoneNumber('0531234567')).toBe('053-123-4567');
    });

    it('9자리 전화번호를 XX-XXX-XXXX 형태로 포맷팅한다', () => {
      expect(formatPhoneNumber('021234567')).toBe('02-123-4567');
    });

    it('잘못된 형식의 전화번호는 원본을 반환한다', () => {
      expect(formatPhoneNumber('123')).toBe('123');
      expect(formatPhoneNumber('300포인트')).toBe('300포인트');
    });
  });
});

describe('> parsePhoneNumber', () => {
  describe('전화번호 문자열에서 숫자만 추출한다', () => {
    it.each([
      {
        phone: '010-1234-5678',
        expected: '01012345678',
      },
      {
        phone: '055-339-6717',
        expected: '0553396717',
      },
      {
        phone: '010.1234.5678',
        expected: '01012345678',
      },
      {
        phone: '010 1234 5678',
        expected: '01012345678',
      },
      {
        phone: '01012345678',
        expected: '01012345678',
      },
    ])('phone: $phone => $expected', ({ phone, expected }) => {
      expect(parsePhoneNumber(phone)).toBe(expected);
    });
  });
});
